import { Button, Card, CardBody, CardSubtitle, CardText, CardTitle } from 'reactstrap';
import './JobCard.css';
import UserContext from './userContext';
import { useContext, useEffect, useState } from 'react';

function JobCard({ job, appliedList=[] }) {
  const {currentUser, applyJob} = useContext(UserContext);
  const [ applied, setApplied ] = useState(false);

  useEffect(function applicationStatus() {
    if (appliedList.indexOf(job.id) !== -1) setApplied(true)

  }, []);

  // if job id is in applied-jobs-list, setapplied = true
  // if (appliedList.indexOf(job.id) !== -1) setApplied(true)

  function handleApply() {
    applyJob(currentUser, job.id);
    setApplied(true)
  }

  return (
    <Card style={{ width: "75%", margin: "30px auto", textAlign: "left" }}>
      <CardBody>
        <CardTitle tag="h5">
            {job.title}
        </CardTitle>
        <h6>{ job.companyName || ''}</h6>
        <CardSubtitle className="mb-1 text-muted job-details" tag="h6">
          Salary: {job.salary || 'volunteer'} <br/> 
          Equity: {job.equity || 0}
        </CardSubtitle>
        <Button color='primary' className='apply' disabled={applied} onClick={handleApply}>
          {applied ? 'Applied' : 'Apply'}
        </Button>
      </CardBody>
    </Card>
  );
}

export default JobCard;
