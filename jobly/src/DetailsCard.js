import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import JoblyApi from "./api";
import JobList from "./JobList";
import "./DetailsCard.css";


function CompanyDetails({ user }) {
    const [ company, setCompany ] = useState(null);
    const { handle } = useParams();
    const navigate = useNavigate();

    console.log(handle)

    useEffect(function getDetailsAndJobs() {
        if (!user) {
            navigate("/login");
        }

        async function getDetails() {
            setCompany(await JoblyApi.getCompany(handle));
        }

        getDetails();
    }, [handle]);

    if (!company) return <p></p>

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