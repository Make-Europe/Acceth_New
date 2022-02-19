import React, { Link } from "react";
import ChainBannerMobile from "../ChainBannerMobile";
import Event3Mobile from "../Event3Mobile";
import "./ChainOfEventsMobile.css";

function ChainOfEventsMobile(props) {
  const { 
    chainofevents_Titel, 
    event3Mobile1Props, 
    event3Mobile2Props,
    inputPlaceholder,
    sort_Text,
    gruppe51Props,
    searchResult,
    filter,
    handleScrollTop,
    handleSort,
    sortBy,
    allEvents,
    account,
    handleConnect,
    handleAddToken
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="chainofevents-mobile screen">
        <ChainBannerMobile account={account} handleConnect={handleConnect} handleAddToken={handleAddToken}/>
        <div className="chain-of-events-mobile_-titel">{chainofevents_Titel}</div>
        <div className="event-chain-mobile">
        {allEvents
          .map(value => (
            <Event3Mobile key={value.id} className={gruppe51Props.className} event={value} handleScrollTop={handleScrollTop}/>
            
          ))}
          
        </div>
      </div>
    </div>
  );
}

export default ChainOfEventsMobile;
