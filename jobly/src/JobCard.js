import { Button, Card, CardBody, CardSubtitle, CardText, CardTitle } from 'reactstrap';
import './JobCard.css';

function JobCard({ job }) {
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
        <Button color='primary' className='apply'>Apply</Button>
      </CardBody>
    </Card>
  );
}

export default JobCard;
