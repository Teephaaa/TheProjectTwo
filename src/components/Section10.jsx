import React from 'react';
import '../css/Section10.css';
import { ImArrowUpRight2 } from "react-icons/im";

const Section10 = () => {
  return (
    <div className='section-ten'>
        <div className='first-join'>
            <div className='join'>
            <h3 className='the-community'>JOIN THE COMMUNITY</h3>
            <ImArrowUpRight2 className='first-icon'/>
            </div>
            <div>
                <h1 className='forum'>Forum</h1>
            </div>
            </div>


            <div className='first-follow'>
                <div className='follow'>
                    <h3 className='follow-dao'>FOLLOW DAO DECISIONS</h3>
                    <ImArrowUpRight2 className='second-icon'/>
                </div>
                <div>
                    <h1 className='latest-proposals'>Latest Proposals</h1>
                </div>
            </div>
            
        
    </div>
  )
}

export default Section10