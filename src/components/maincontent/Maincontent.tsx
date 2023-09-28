import React from 'react';
import { Checkbox, Divider } from "antd";
import Candidate from '../candidate/Candidate';

const Maincontent:React.FC = () => {
  return (
    <div className="maincontent">
      <header className="maincontent_header">
        <div className="candidates">
          <Checkbox />
          <span>247 Candidates</span>
        </div>

        <div className="status">
          <div className="qualified">Qualified</div>

          <Divider type="vertical" />

          <div>
            <span>Task</span>
            <span className="chip">25</span>
          </div>

          <Divider type="vertical" />

          <div>
            <span>Disqualified</span>
            <span className="chip">78</span>
          </div>
        </div>
      </header>

      <Candidate 
        name="Aaliyah Sanderson"
        address="Riyadh, Saudi Arabia"
        education="Bachelor - Cambridge University" />
      <Candidate
        name="John Doe"
        address="Bostom, USA"
        education="Bachelor - MIT" />
      <Candidate
        name="Thomas Matt"
        address="Edinburgh, UK"
        education="Bachelor - Harvard University" />
      <Candidate
        name="Kamilia Smith"
        address="London, UK"
        education="Bachelor - Boston University" />
      <Candidate
        name="Roy Jade"
        address="Cambridge, UK"
        education="Bachelor - Yale" />
      <Candidate
        name="Ahmed Salman"
        address="New York, USA"
        education="Bachelor - Cambridge University"
        active />
    </div>
  )
}

export default Maincontent;