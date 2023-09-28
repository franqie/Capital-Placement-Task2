import React from 'react';
import { GoHome, GoHeart} from "react-icons/go";
import { PiUsersThree, PiNotebook } from "react-icons/pi";
import { BsCalendar2Check } from "react-icons/bs";
import { IoShareSocialOutline } from "react-icons/io5";
import { AiOutlineFileText } from "react-icons/ai";
import { TfiSettings, TfiAngleLeft } from "react-icons/tfi";

const Sidebar:React.FC = () => {
  return (
    <aside className="sidebar">
      <div className="sidebar_inner">
        <div className="sidebar_item avatar"></div>
        <div className="controls">
          <div>
            <div className="icon"><GoHome /></div>
            <div className="icon"><PiUsersThree /></div>
            <div className="icon"><BsCalendar2Check /></div>
            <div className="icon"><IoShareSocialOutline /></div>
            <div className="icon"><AiOutlineFileText /></div>
            <div className="icon"><PiNotebook /></div>
            <div className="icon"><GoHeart /></div>
            <div className="icon"><TfiAngleLeft /></div>
          </div>

          <div>            
            <div className="icon"><TfiSettings /></div>
            <div className="sidebar_item">
              <span className="as-avatar">AS</span>
            </div>
          </div>
        </div>
      </div>
    </aside>
  )
}

export default Sidebar;