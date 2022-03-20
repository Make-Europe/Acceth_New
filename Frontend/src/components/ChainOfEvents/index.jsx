import React, { useRef } from "react";
import { Link } from "react-router-dom";
import ChainBanner from "../ChainBanner";
import Gruppe5 from "../Gruppe5";
import "./ChainOfEvents.css";

function ChainOfEvents(props) {
  const {
    chainofevents_Titel,
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
    handleAddToken,
    handleDeleteEvent,
    profile,
    nickname,
    handleConnectRally
  } = props;


  if(account != null){
    return (
      <div className="container-center-horizontal">
        <div className="chainofevents screen">
          <ChainBanner account={account} handleConnect={handleConnect} handleAddToken={handleAddToken} profile={profile} nickname={nickname} handleConnectRally={handleConnectRally} />
          <h1 className="chain-of-events_-titel montserrat-semi-bold-black-50px">{chainofevents_Titel}</h1>
          <Link to="/createevent-generalinformation">
            <h1 className="addEvent montserrat-medium-cerise-20px">+ Add Event</h1> 
          </Link>
          <div className="flex-row">
            <div className="search border-1px-dove-gray">
              <input
                className="search_-text montserrat-medium-tower-gray-30px"
                name="search_text1"
                placeholder={inputPlaceholder}
                type="search"
                value={searchResult}
                onChange={filter}
                required
              />
            </div>
              <select id="lang" onChange={handleSort} value={sortBy} className="sort  border-1px-dove-gray montserrat-medium-tower-gray-30px">{sort_Text}
                <option value="newestFirst" >Newest first</option>
                <option value="oldestFFirst" >Oldest first</option>
                <option value="byName" >Sort by Name</option>
              </select>
          </div>
          <div className="event">
            {allEvents
            .map(value => (
              <Gruppe5 key={value.id} className={gruppe51Props.className} event={value} handleScrollTop={handleScrollTop} handleDeleteEvent={handleDeleteEvent}/>
            ))}
          </div>
        </div>
      </div>
    );
  }else{
    return (
      <div className="container-center-horizontal">
        <div className="chainofevents screen">
          <ChainBanner account={account} handleConnect={handleConnect} handleAddToken={handleAddToken} profile={profile} nickname={nickname} handleConnectRally={handleConnectRally} />
          <h1 className="chain-of-events_-titel montserrat-semi-bold-black-50px">{chainofevents_Titel}</h1>
          <div className="flex-row">
            <div className="search border-1px-dove-gray">
              <input
                className="search_-text montserrat-medium-tower-gray-30px"
                name="search_text1"
                placeholder={inputPlaceholder}
                type="search"
                value={searchResult}
                onChange={filter}
                required
              />
            </div>
              <select id="lang" onChange={handleSort} value={sortBy} className="sort  border-1px-dove-gray montserrat-medium-tower-gray-30px">{sort_Text}
                <option value="newestFirst" >Newest first</option>
                <option value="oldestFFirst" >Oldest first</option>
                <option value="byName" >Sort by Name</option>
              </select>
          </div>
          <div className="event">
            {allEvents
            .map(value => (
              <Gruppe5 key={value.id} className={gruppe51Props.className} event={value} handleScrollTop={handleScrollTop} handleDeleteEvent={handleDeleteEvent}/>
            ))}
          </div>
        </div>
      </div>
    );
  }
  
}

export default ChainOfEvents;
