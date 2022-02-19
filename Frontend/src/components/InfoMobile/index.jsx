import React from "react";
import { useState, useEffect } from "react";
import ChainBannerMobile from "../ChainBannerMobile";
import "./InfoMobile.css";
import { Link } from "react-router-dom";

function EventDetailsMobile() {

  

  return (
    <div className="container-center-horizontal">
      <div className="eventdetails-mobile screen">
        <div className="details-mobile_-titel">Information</div>
          <div className="mobileInfoPanel border-1px-dove-gray">
            <div className="mobileInfoTitle montserrat-medium-black-20px">Hi #Ethdenver - get early Acc.eth!</div>
            <div className="mobileInfoText montserrat-normal-black-20px">
              This is an experimental dDapp to kickstart the event economy IRL. All Tickets $TCKT are listed on CELO. If you have at least one, you join our whitelist automatically and forever. We will however ban profanity from our platform and blacklist other bad actor's public adresses. 
              <br></br><br></br>
              Early access runs out 02/28/22.
            </div>
            <div></div>
          </div>
          <Link to="/chainofevents">
          <div className="mobileInfoButton border-1px-dove-gray" >
            <div className="buyticket-mobile_-text montserrat-medium-black-25px">Accept</div>
          </div>
          </Link>
      </div>
    </div>
  );
}

export default EventDetailsMobile;
