import React from "react";
import "./ChainBannerMobile.css";

function ChainBannerMobile(props) {
  const {
    account,
    handleConnect,
    handleAddToken
  } = props;

  if(account != null){
    return (
      <div className="chain-banner-mobile" onClick={handleAddToken}>
        <div className="chain-banner-mobile_-text montserrat-medium-black-25px">Add Token to {account.substring(0, 6)}...</div>
      </div>
    );
  }else{
    return (
      <div className="chain-banner-mobile" onClick={handleConnect} >
        <div className="chain-banner-mobile_-text montserrat-medium-black-25px">Connect Wallet</div>
      </div>
    );
  }
  
}

export default ChainBannerMobile;
