import React from 'react';
import '../css/Section2.css';
import { BsChevronDown } from "react-icons/bs";

const Section2 = () => {
  return (
    <div className='section-two'>

        <div className='all-two'>
        <div className='first-big-saves'>
            <h1 className='big-toad'>ToadSwap</h1>
            <h2 className='saves'>Saves you money</h2>
        </div>

        <div>
            <h5 className='hop-into'>Hop into the future of decentralized trading</h5>
            <button className='second-launch'>Launch App</button>
        </div>

        <div className='scroll'>
            <p>scroll</p>
            <BsChevronDown />
        </div>
        </div>
    </div>
  )
}

export default Section2