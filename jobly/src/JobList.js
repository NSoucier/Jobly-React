import JobCard from "./JobCard";

function JobList({ jobs }) {
    console.log('here', jobs)
    return (
        <>
            {jobs.map((job) => (
                <JobCard job={job} key={job.id}/>
            ))}
        </>
    )
};

export default JobList;