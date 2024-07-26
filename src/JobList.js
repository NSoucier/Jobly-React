import { useCallback, useContext, useEffect, useState } from "react";
import JobCard from "./JobCard";
import UserContext from "./userContext";

function JobList({ jobs }) {
    const { currentUser, getUser } = useContext(UserContext);
    const [ appliedList, setAppliedList ] = useState([]);

    useEffect(function getApplications() {        
        async function getJobApplications() {
            const user = await getUser(currentUser);  
            setAppliedList(user.applications)
        }

        getJobApplications();
    }, []);

    return (
        <>
            {jobs.map((job) => (
                <JobCard job={job} key={job.id} appliedList={appliedList}/>
            ))}
        </>
    )
};

export default JobList;