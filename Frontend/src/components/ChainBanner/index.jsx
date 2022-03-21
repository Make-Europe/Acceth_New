import React from "react";
import { Link } from "react-router-dom";
import "./ChainBanner.css";

function ChainBanner(props) {
  const {
    account,
    handleConnect,
    handleAddToken,
    profile,
    nickname,
    handleConnectRally
  } = props;

  if(account != null){
    return (
      <div className="container-center-horizontal">
        <div className="chain-banner" onClick={handleAddToken}>
          <div className="chain-banner_-text montserrat-medium-black-25px">
          Add $TCKT here to see Tickets
          </div>
        </div>
        <Link
        to={{
          pathname: "/editprofiledetails",
          state: {
            profile: (profile),
          },
        }}
      >
        <div className="chain-banner2">
          <div className="chain-banner_-text2 montserrat-medium-black-25px">
            {"Manage Profile: "} {nickname ? nickname : account.substring(0, 6) + "..." + account.substring(38 ,42)}
          </div>
        </div>
        </Link>
        <div className="chain-banner3" onClick={handleConnectRally}>
          <div className="chain-banner_-text3 montserrat-medium-black-25px">
          Connect Rally.io
          </div>
        </div>
      </div>
      
      
    );
  }
  else{
    return (
      <div className="container-center-horizontal">
      <div className="chain-banner" onClick={handleConnect} >
        <div className="chain-banner_-text montserrat-medium-black-25px">
          Connect any Wallet
        </div>
      </div>
      <div className="placeHolder11"></div>
      <div className="chain-banner3" onClick={handleConnectRally}>
          <div className="chain-banner_-text montserrat-medium-black-25px">
          Connect Rally.io
          </div>
        </div>
      </div>
    );
  }
  
}

export default ChainBanner;
