import React from 'react';
import { AiOutlineFileText } from 'react-icons/ai';
import { HiOutlineExclamationCircle } from "react-icons/hi2";
import { IoSearchOutline } from 'react-icons/io5';
import { BiChevronDown } from 'react-icons/bi';

const Sidepanel:React.FC = () => {
  return (
    <div className="sidepanel">
      <div className="searchbox">
        <IoSearchOutline />
        <input type="text" placeholder="Search by name, edu or #tag" />
        <HiOutlineExclamationCircle />
      </div>

      <div className="filters">
        <div className="filter_header">
          <span>Filters</span>
          <span>0 selected</span>
        </div>
        <div className="filter_item">
          <span><AiOutlineFileText /></span>
          <span>Personal Information</span>
          <span className="caret"><BiChevronDown /></span>
        </div>
        <div className="filter_item">
          <span><AiOutlineFileText /></span>
          <span>Education</span>
          <span className="caret"><BiChevronDown /></span>
        </div>
        <div className="filter_item">
          <span><AiOutlineFileText /></span>
          <span>Work Experience</span>
          <span className="caret"><BiChevronDown /></span>
        </div>
        <div className="filter_item">
          <span><AiOutlineFileText /></span>
          <span>Activity Filter</span>
          <span className="caret"><BiChevronDown /></span>
        </div>
        <div className="filter_item">
          <span><AiOutlineFileText /></span>
          <span>Advanced Filter</span>
          <span className="caret"><BiChevronDown /></span>
        </div>
      </div>
    </div>
  )
}

export default Sidepanel;