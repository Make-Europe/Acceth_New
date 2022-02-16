import React from "react";
import { Link } from "react-router-dom";
import "./Gruppe5.css";

function Gruppe5(props) {
  const { className, event } = props;

  return (
    <Link
        to={{
          pathname: "/eventdetails",
          state: {
            event: (event),
          },
        }}
      >
    <div className={`gruppe-5-1 ${className || ""}`}>
      <img alt="" className="event_-picture border-1px-dove-gray" src={event.image} />
      <div className="flex-col">
        <div className="flex-row-1">
          <div className="event_-container">
            <div className="event_-host montserrat-medium-black-30px">{event.name.length >= 35 ? event.name.substring(0, 35) + " ..." : event.name}</div>
            <div className="event_-location montserrat-medium-black-20px">{event.city}</div>
          </div>
        </div>
        <div className="event_-container-1 montserrat-medium-black-30px">
          <div className="event_-date">{event.date}</div>
          <div className="event_-time">{event.start} - {event.end}</div>
        </div>
        <div className="event_-lineup montserrat-medium-black-20px">{event.lineup.length >= 50 ? event.lineup.substring(0, 50) + " ..." : event.lineup}</div>
      </div>
        <div className="overlap-group border-1px-dove-gray">
          <div className="more_-text montserrat-medium-black-30px">
            Find
            <br />
            Out
            <br />
            More
          </div>
        </div>
    </div>
    </Link>
  );
}

export default Gruppe5;
