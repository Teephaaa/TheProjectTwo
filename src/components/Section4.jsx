import React from 'react';
import '../css/Section4.css';
import { ImArrowUpRight2 } from "react-icons/im";
import { DiAndroid } from "react-icons/di";
import { BiChevronRight } from "react-icons/bi";
import { VscSettingsGear } from "react-icons/vsc";
import { MdOutlineLocalGasStation } from "react-icons/md";
import { LuCircleDollarSign } from "react-icons/lu";

const Section4 = () => {
  return (
    <div className='section-four'>

        <div className='first-div'>
            <div className='first-live'>
                <p>LIVE</p>
                <ImArrowUpRight2 />
            </div>
            <div>
                <DiAndroid className='robot'/>
                <h3 className='front-run'>Front-Run Protection</h3>
                <p className='trade-with'>Trade with confidence, protected from exploitative bots.</p>
            </div>
            <div className='first-learn'>
                <p>Learn more</p>
                <BiChevronRight />
            </div>
        </div>


        <div className='second-div'>
            <div className='second-live'>
                <p>LIVE</p>
                <ImArrowUpRight2 />
            </div>
            <div>
                <VscSettingsGear className='settings'/>
                <h3 className='true-auto'>True Auto Slippage</h3>
                <p className='no-more'>No more guessing, get the best price every time.</p>
            </div>
            <div className='second-learn'>
                <p>Learn more</p>
                <BiChevronRight />
            </div>
        </div>


        <div className='third-div'>
            <div className='third-live'>
                <p>LIVE</p>
                <ImArrowUpRight2 />
            </div>
            <div>
                <MdOutlineLocalGasStation className='station'/>
                <h3 className='eth'>ETH-Less Trading</h3>
                <p className='exchange'>Exchange your tokens without paying ETH upfront.</p>
            </div>
            <div className='third-learn'>
                <p>Learn more</p>
                <BiChevronRight />
            </div>
        </div>


        <div className='fourth-div'>
            <div className='fourth-live'>
                <p>LIVE</p>
                <ImArrowUpRight2 />
            </div>
            <div>
                <LuCircleDollarSign className='dollar'/>
                <h3 className='no-failed'>No Failed Transaction Fee</h3>
                <p className='peace-mind'>Trade with peace of mind, and never pay for a failed transaction again.</p>
            </div>
            <div className='fourth-learn'>
                <p>Learn more</p>
                <BiChevronRight />
            </div>
        </div>


    </div>
  )
}

export default Section4