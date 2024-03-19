import React from 'react';
import '../css/Section12.css';
import { BsChevronDown } from "react-icons/bs";

const Section12 = () => {
  return (
    <div className='section-twelve'>
        
        <div>
            <h1 className='faq'>FAQ</h1>
            <p className='quick'>Quick answers to question you may have.</p>
            <p className='cant'>Can't find what you're looking for? Check out our full documentation.</p>
            <div>
            <button className='documentation'>Documentation</button>
        </div>
       
        </div>




        <div className='all-nums'>
            <div className='one'>
                <p>Why choose ToadSwap?</p>
                <BsChevronDown className='icon1'/>
            </div>

            <div className='two'>
                <p>What are the fees on ToadSwap?</p>
                <BsChevronDown className='icon2'/>
            </div>

            <div className='three'>
                <p className='vision-of'>What's the long-term vision of ToadSwap?</p>
                <BsChevronDown className='icon3'/>
            </div>

            <div className='four'>
                <p className='ensure-security'>How does ToadSwap ensure security?</p>
                <BsChevronDown className='icon4'/>
            </div>

            <div className='five'>
                <p className='calculate'>How does ToadSwap calculate the output for the trades and why is it different from other platform?</p>
                <BsChevronDown className='icon5'/>
            </div>
        </div>
    </div>
  )
}

export default Section12