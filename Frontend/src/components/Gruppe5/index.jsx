import React from "react";
import { Link } from "react-router-dom";
import "./Gruppe5.css";

function Gruppe5(props) {
  const { className, event } = props;

  return (
    <div className={`gruppe-5-1 border-1px-dove-gray ${className || ""}`}>
      <img className="event_-picture" src={event.image} />
      <div className="flex-col">
        <div className="flex-row-1">
          <div className="event_-container">
            <div className="event_-host montserrat-medium-black-30px">{event.hostName}</div>
            <div className="event_-location montserrat-medium-black-20px">{event.city}</div>
          </div>
          <div className="event_-eventname montserrat-normal-black-30px">{event.name}</div>
        </div>
        <div className="event_-container-1 montserrat-medium-black-30px">
          <div className="event_-date">{event.date}</div>
          <div className="event_-time">{event.start} - {event.end}</div>
        </div>
        <div className="event_-lineup montserrat-medium-black-20px">{event.lineup}</div>
      </div>
      <Link to="/eventdetails">
        <div className="overlap-group border-1px-dove-gray">
          <div className="more_-text montserrat-medium-black-30px">
            Find
            <br />
            Out
            <br />
            More
          </div>
        </div>
      </Link>
    </div>
  );
}

export default Gruppe5;
