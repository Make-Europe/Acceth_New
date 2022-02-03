import React from "react";
import { Link } from "react-router-dom";
import HostName from "../HostName";
import "./CreateEventLocation.css";

function CreateEventLocation(props) {
  const {
    pagetitel_Location,
    inputType1,
    inputPlaceholder1,
    inputType2,
    inputPlaceholder2,
    nextbutton2_Text,
    hostName1Props,
    hostName2Props,
    handleEventLocation,
    handleEventStreet,
    handleEventZip,
    handleEventCity
  } = props;

  return (
    <div className="createevent-location screen">
      <div className="page-titel_-location montserrat-medium-black-40px">{pagetitel_Location}</div>
      <div className="inputfields_-location">
        <HostName inputPlaceholder={hostName1Props.inputPlaceholder} childToParent={handleEventLocation} />
        <HostName inputPlaceholder={hostName2Props.inputPlaceholder} className={hostName2Props.className} childToParent={handleEventStreet} />
        <div className="gruppe1">
          <div className="zip border-1px-dove-gray">
            <input
              className="zip_-placeholder montserrat-medium-tower-gray-30px"
              name="zip_placeholder1"
              placeholder={inputPlaceholder1}
              type={inputType1}
              onInput={e => handleEventZip(e.target.value)}
              required
            />
          </div>
          <div className="city-name border-1px-dove-gray">
            <input
              className="city-name_-placeholder montserrat-medium-tower-gray-30px"
              name="cityname_placeholder1"
              placeholder={inputPlaceholder2}
              type={inputType2}
              onInput={e => handleEventCity(e.target.value)}
              required
            />
          </div>
        </div>
      </div>
      <Link to="/createevent-details">
        <div className="next-button2 border-1px-dove-gray">
          <div className="next-button2_-text montserrat-medium-white-30px">{nextbutton2_Text}</div>
        </div>
      </Link>
    </div>
  );
}

export default CreateEventLocation;
