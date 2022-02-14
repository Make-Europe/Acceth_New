import React from "react";
import "./ChainBanner.css";

function ChainBanner(props) {
  const {
    account,
    handleConnect
  } = props;

  if(account != null){
    return (
      <div className="chain-banner">
        <div className="chain-banner_-text montserrat-medium-black-25px">
          {"Connected as: " + account.substring(0, 6) + "..." + account.substring(38 ,42)}
        </div>
      </div>
    );
  }
  else{
    return (
      <div className="chain-banner" onClick={handleConnect} >
        <div className="chain-banner_-text montserrat-medium-black-25px">
          Connect Wallet
        </div>
      </div>
    );
  }
  
}

export default ChainBanner;
