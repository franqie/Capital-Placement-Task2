import React from 'react';
import { Checkbox } from 'antd';
import { AiOutlinePlayCircle } from 'react-icons/ai';
import { PiNotebook } from 'react-icons/pi';

interface CandidateType {
    name: string;
    address: string;
    education: string;
    active?: boolean;
}

const Candidate:React.FC<CandidateType> = ({ name, address, education, active }) => {
  return (
    <div className="candidate">
        <Checkbox />
        <div className="candidate_profile">
            <div className="avatar">AS</div>
            <div className="candidate_bio">
                <h3>{ name }</h3>
                <p className="address">{ address }</p>
                <p className="edu">{ education } (2023 - 2023)</p>
                <div className="tags">
                    <span className="tag">#top_candidate</span>
                    <span className="tag">#top_candidate</span>
                </div>
                <div className="chipbars">
                    <span className="chipbar">New York</span>
                    <span className="chipbar">Marketing</span>
                    <span className="chipbar">London</span>
                </div>
            </div>

            {active && <div className="active_programs">
                <span className="video"><AiOutlinePlayCircle /> 4</span>
                <span className="written"><PiNotebook /> 5 Programs</span>
            </div> }
        </div>
    </div>
  )
}

export default Candidate;