import JobList from "./JobList";
import { useState, useEffect } from "react";
import JoblyApi from "./api";

function Jobs() {
    const [ jobs, setJobs ] = useState([]);

    useEffect(function getAllJobs() {
        async function getJobs() {
            setJobs(await JoblyApi.getAllJobs());
        }

        getJobs();
    }, []);

    return <JobList jobs={jobs}/>
}

export default Jobs;