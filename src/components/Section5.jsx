import React from 'react';
import '../css/Section5.css';
import { ImArrowUpRight2 } from "react-icons/im";
import { FaTriangleExclamation } from "react-icons/fa6";
import { BiChevronRight } from "react-icons/bi";
import { FaHandHoldingDollar } from "react-icons/fa6";
import { GiCandles } from "react-icons/gi";
import { GiFrozenBlock } from "react-icons/gi";

const Section5 = () => {
  return (
    <div className='section-five'>
        <div className='first-divv'>
            <div className='first-coming'>
                <p>COMING SOON</p>
                <ImArrowUpRight2 />
            </div>
            <div>
                <FaTriangleExclamation className='exclamation'/>
                <h3 className='rug-pull'>Rug Pull Protection</h3>
                <p className='trade-safely'>Trade safely, protection from scam projects.</p>
            </div>
            <div className='first-learnn'>
                <p>Learn more</p>
                <BiChevronRight />
            </div>
        </div>


        <div className='second-divv'>
            <div className='second-coming'>
                <p>COMING SOON</p>
                <ImArrowUpRight2 />
            </div>
            <div>
                <FaHandHoldingDollar className='hand-dollar'/>
                <h3 className='limit-orders'>Limit Orders</h3>
                <p className='take-control'>Take control of your trades, and set your own price.</p>
            </div>
            <div className='second-learnn'>
                <p>Learn more</p>
                <BiChevronRight />
            </div>
        </div>


        <div className='third-divv'>
            <div className='third-coming'>
                <p>COMING SOON</p>
                <ImArrowUpRight2 />
            </div>
            <div>
                <GiCandles className='candles'/>
                <h3 className='candle-swaps'>Candle Swaps</h3>
                <p className='precise-timing'>Precise timing and optimal price execution.</p>
            </div>
            <div className='third-learnn'>
                <p>Learn more</p>
                <BiChevronRight />
            </div>
        </div>


        <div className='fourth-divv'>
            <div className='fourth-coming'>
                <p>COMING SOON</p>
                <ImArrowUpRight2 />
            </div>
            <div>
                <GiFrozenBlock className='frozen'/>
                <h3 className='block-opt'>Block Optimized Positioning</h3>
                <p className='everyblock'>Trade with precision within every block.</p>
            </div>
            <div className='fourth-learnn'>
                <p>Learn more</p>
                <BiChevronRight />
            </div>
        </div>
    </div>
  )
}

export default Section5