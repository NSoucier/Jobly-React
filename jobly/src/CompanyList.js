import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import JoblyApi from "./api";
import { Button, Card, CardBody, CardSubtitle, CardTitle, Input } from 'reactstrap';

// let comps = await JoblyApi.getCompanies();
// console.log('companies:', comps)

function CompanyList({ user }) {
    const [ searchFor, setSearchFor ] = useState('');
    const [ comps, setComps ] = useState([]);
    const navigate = useNavigate();

    useEffect(function showComps() {
        if (!user) {
            navigate("/login");
        }
        
        async function getComps() {
            setComps(await JoblyApi.getCompanies())
        }
        
        getComps();
    }, []);

    // handles submission of company search form 
    async function handleClick(evt) {
        evt.preventDefault();
        if(searchFor.length) { // apply filter if user input search
            setComps(await JoblyApi.getCompanies(searchFor));
        } else { // get all companies again
            setComps(await JoblyApi.getCompanies());
        }
    }

    // handles form input
    function handleInput(evt) {
        evt.preventDefault();
        setSearchFor(evt.target.value.trim())
    }

    return (
        <>
            <div>
                <Input style={{ width: '40%', margin: '20px auto', display: 'inline-block'}} placeholder="Enter search term..." onChange={handleInput}/>
                <Button color="primary" style={{ marginLeft: '15px' }} onClick={handleClick}>Search</Button>

            </div>

            {comps.map((company) => (
                <Card style={{ width: '75%', margin: '30px auto', textAlign: 'left'}} key={company.handle}>
                    <CardBody>
                        <CardTitle tag='h5'>
                            <Link to={`/companies/${company.handle}`}>{company.name}</Link>
                        </CardTitle>
                        <CardSubtitle className="mb-1 text-muted" tag="h6">
                            {company.description}
                        </CardSubtitle>
                    </CardBody>
                </Card>                
            ))}
        </>
    )
};

export default CompanyList;