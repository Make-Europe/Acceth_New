import React from "react";
import { Link } from "react-router-dom";
import HostName from "../HostName";
import "./CreateEventDetails.css";

function CreateEventDetails(props) {
  const {
    pagetitel_Detail,
    inputType1,
    inputPlaceholder1,
    inputType2,
    inputPlaceholder2,
    nextbutton3_Text,
    hostName1Props,
    hostName2Props,
    hostName3Props,
  } = props;

  return (
    <div className="createevent-details screen">
      <div className="page-titel_-detail montserrat-medium-black-40px">{pagetitel_Detail}</div>
      <div className="inputfields_-details">
        <HostName inputPlaceholder={hostName1Props.inputPlaceholder} />
        <div className="gruppe2">
          <div className="start-time border-1px-dove-gray">
            <input
              className="start-time_-placeholder montserrat-medium-tower-gray-30px"
              name="starttime_placeholder1"
              placeholder={inputPlaceholder1}
              type={inputType1}
              required
            />
          </div>
          <div className="end-time border-1px-dove-gray">
            <input
              className="end-time_-placeholder montserrat-medium-tower-gray-30px"
              name="endtime_placeholder1"
              placeholder={inputPlaceholder2}
              type={inputType2}
              required
            />
          </div>
        </div>
        <HostName inputPlaceholder={hostName2Props.inputPlaceholder} className={hostName2Props.className} />
        <HostName inputPlaceholder={hostName3Props.inputPlaceholder} className={hostName3Props.className} />
      </div>
      <Link to="/createevent-image">
        <div className="next-button3 border-1px-dove-gray">
          <div className="next-button3_-text montserrat-medium-white-30px">{nextbutton3_Text}</div>
        </div>
      </Link>
    </div>
  );
}

export default CreateEventDetails;
