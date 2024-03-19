import React from "react";
import "../css/Section1.css";
import { IoIosWarning } from "react-icons/io";

const Section1 = () => {
  return (
    <div className="Section-one">
      <div>
        <h1 className="ttm">Toad Token Migration</h1>
      </div>
      <div className="toad-div">
        <IoIosWarning className="danger"/>
        <p className="warning">
          WARNING: if you have not migrate yet, do NOT buy, sell or transfer
          TOADSWAP tokens. For a successful migration, you must use the original
          wallet from the snapshot date and transfer only the exact amount of
          tokens you had at that time.
        </p>
      </div>
      <div className="connect-div">
        <p className="connect">
            Connect your wallet to migrate your tokens
        </p>
        <button className="connect-btn">Connect Wallet</button>
      </div>
    </div>
  );
};

export default Section1;
