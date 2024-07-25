import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import JoblyApi from "./api";
import JobList from "./JobList";
import "./DetailsCard.css";


function CompanyDetails() {
    const [ company, setCompany ] = useState(null);
    const { handle } = useParams();

    console.log(handle)

    useEffect(function getDetailsAndJobs() {
        async function getDetails() {
            setCompany(await JoblyApi.getCompany(handle));
        }

        getDetails();
    }, [handle]);

    console.log(company);
    if (!company) return <p>nothin'</p>

    return (
        <>
            <div className="heading">
                <h4>{company.name}</h4>
                <h6>{company.description}</h6>
            </div>

            <JobList jobs={company.jobs}/>
        </>
    )
};

export default CompanyDetails;