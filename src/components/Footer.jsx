import React from 'react';
import '../css/Footer.css';
import { RiCopyrightLine } from "react-icons/ri";
import { FaTelegramPlane } from "react-icons/fa";
import { CiTwitter } from "react-icons/ci";
import { RiBook2Line } from "react-icons/ri";

const Footer = () => {
  return (
    <div className='the-footer'>

        <div>
            <h1 className='footer-toadswap'>ToadSwap</h1>
        </div>


        <div className='first-display'>
            <RiCopyrightLine />
            <p className='next-line'>ToadSwap 2024.</p>
        </div>
        <div className='all-right'>
            <p>All right reserved.</p>
            <p>info@toadswap.org</p>
        </div>

        <div className='three-icons'>
            <FaTelegramPlane />
            <CiTwitter />
            <RiBook2Line />
        </div>
    </div>
  )
}

export default Footer