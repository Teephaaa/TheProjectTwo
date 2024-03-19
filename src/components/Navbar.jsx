import React from 'react';
import '../css/Navbar.css';
import { BiMenu } from "react-icons/bi";
import { FaTwitter } from "react-icons/fa6";
import { CgShapeTriangle } from "react-icons/cg";
import { SiCoinmarketcap } from "react-icons/si";



const Navbar = () => {
  return (
    <div className='Nav-Bar'>

        <div className='navbar'>
            <h1 className='first-toadswap'>ToadSwap</h1>
            <BiMenu className='the-spans'/>
            <div className='the-gap'>
            <div className='the-home'>
            <p>Home</p>
            <p>Utilities</p>
            <p>Roadmap</p>
            <p>DAO</p>
            <p>Audit</p>
            <p>Whitepaper</p>
            </div>
            <div className='the-buytoad'>
                <p>Buy$TOAD</p>
                <FaTwitter />
                <CgShapeTriangle />
                <SiCoinmarketcap />
                <button className='first-btn'><b>Launch App</b></button>
            </div>
            </div>
            
        </div>
    </div>
  )
}

export default Navbar