import React from "react";
import { Link } from "react-router-dom";
import "./ChainBanner.css";

function ChainBanner(props) {
  const {
    account,
    handleConnect,
    handleAddToken,
    profile,
    nickname
  } = props;

  if(account != null){
    return (
      <div className="container-center-horizontal">
        <div className="chain-banner" onClick={handleAddToken}>
          <div className="chain-banner_-text montserrat-medium-black-25px">
          Click to add Token
          </div>
        </div>
        <Link
        to={{
          pathname: "/profiledetails",
          state: {
            profile: (profile),
          },
        }}
      >
        <div className="chain-banner2">
          <div className="chain-banner_-text2 montserrat-medium-black-25px">
            {"Connected as: "} {nickname ? nickname : account.substring(0, 6) + "..." + account.substring(38 ,42)}
          </div>
        </div>
        </Link>
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
