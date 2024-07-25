import JobList from "./JobList";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import JoblyApi from "./api";

function Jobs({ user }) {
    const [ jobs, setJobs ] = useState([]);
    const navigate = useNavigate();

    useEffect(function getAllJobs() {
        if (!user) {
            navigate("/login");
        }
        
        async function getJobs() {
            setJobs(await JoblyApi.getAllJobs());
        }

        getJobs();
    }, []);

    return <JobList jobs={jobs}/>
}

export default Jobs;