import React from "react";
import { Link } from "react-router-dom";
import "./Event3Mobile.css";

function Event3Mobile(props) {
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
    <div className="event3-mobile border-1px-dove-gray">
    <img className="event-mobile_-picture" src={event.image} />
    <div className="eventmobile_-container">
      <div className="event-mobile_-eventname montserrat-medium-black-30px">{event.name.length >= 16 ? event.name.substring(0, 16) + "..." : event.name}</div>
      <div className="event-mobile_-location montserrat-medium-black-20px">{event.city}</div>
    </div>
    <div className="event-mobile_-date montserrat-medium-black-30px">{event.date}</div>
    <div className="event-mobile_-time montserrat-medium-black-20px">{event.start + " - " + event.end}</div>
    <div className="event-mobile_-lineup montserrat-medium-black-20px">{event.lineup.length >= 28 ? event.lineup.substring(0, 28) + "..." : event.lineup}</div>
    <div className="overlap-groupMobile border-1px-dove-gray">
      <div className="more-mobile_-text montserrat-medium-black-30px">Find Out More</div>
    </div>
  </div>
  </Link>
  );
}

export default Event3Mobile;
