import React from "react";
import ChainBanner from "../ChainBanner";
import Gruppe5 from "../Gruppe5";
import "./ChainOfEvents.css";

function ChainOfEvents(props) {
  const {
    chainofevents_Titel,
    inputType,
    inputPlaceholder,
    sort_Text,
    gruppe51Props,
    gruppe52Props,
    gruppe53Props,
    gruppe54Props,
    default_picture,
    handleLoadData,
    allEvents
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="chainofevents screen">
        <ChainBanner />
        <h1 className="chain-of-events_-titel montserrat-semi-bold-black-50px">{chainofevents_Titel}</h1>
        <div className="flex-row">
          <div className="search border-1px-dove-gray">
            <input
              className="search_-text montserrat-medium-tower-gray-30px"
              name="search_text1"
              placeholder={inputPlaceholder}
              type={inputType}
              required
            />
          </div>
          <div className="sort border-1px-dove-gray">
            <div className="sort_-text montserrat-medium-tower-gray-30px">{sort_Text}</div>
          </div>
        </div>
        <div className="event">
          {allEvents.map(value => (
            <Gruppe5 className={gruppe51Props.className} event={value} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default ChainOfEvents;
