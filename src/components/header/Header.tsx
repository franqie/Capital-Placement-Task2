import React from 'react';
import userCancel from '../../icons/userCancel.svg';
import group from '../../icons/group.svg';
import userCheck from '../../icons/userCheck.svg';
import userVoice from '../../icons/userVoice.svg';
import mail from '../../icons/mail.svg';
import { PiCaretDownThin } from 'react-icons/pi';
import { BiChevronDown } from 'react-icons/bi';

type itemsType = Array<{
  id: string
  category: string
  count: number
}>;

const items: itemsType = [
    {
      id: '1',
      category: "applied",
      count: 1745,
    },
    {
      id: '2',
      category: "shortlisted",
      count: 435,
    },
    {
      id: '3',
      category: "technical interview",
      count: 123,
    },
    {
      id: '4',
      category: "opportunity browsing",
      count: 243,
    },
    {
      id: '5',
      category: "interview I",
      count: 25,
    },
    {
      id: '6',
      category: "interview II",
      count: 25,
    },
    {
      id: '7',
      category: "interview III",
      count: 25,
    },
    {
      id: '8',
      category: "offer",
      count: 25,
    },
    {
      id: '9',
      category: "withdrawn",
      count: 25,
    },
  ];

const Header:React.FC = () => {
  return (
    <header className="header">
        <nav>
            <div className="title">
                <h1>London Internship Program</h1>
                <p>London</p>
            </div>
            
            <div className="dropdown">
              <div className="dropdown_container">                
                <div className="dropdown_button">
                  Opportunity Browsing
                  <BiChevronDown />
                </div>
                <div className="dropdown_list">
                  {items.map(item =>(
                    <div className="list_item" key={ item.id }>
                      <span className="category">{ item.category }</span>
                      <span className="count">{ item.count }</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="control">
                <div className="icon_row">
                    <div className="icon"><img src={ group } alt='tag' /></div>
                    <div className="icon"><img src={ userCancel } alt='user cancel' /></div>
                    <div className="icon"><img src={ userCheck } alt='user check' /></div>
                    <div className="icon"><img src={ userVoice } alt='user voice' /></div>
                    <div className="icon"><img src={ mail } alt='mail' /></div>
                </div>
                <button className="interview">
                    <span>move to video interview</span>
                    <span><PiCaretDownThin /></span>
                </button>
            </div>
        </nav>
    </header>
  )
}

export default Header;