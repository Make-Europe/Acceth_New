import React from "react";
import { Link } from "react-router-dom";
import HostName from "../HostName";
import "./CreateEventGeneralInformation.css";

function CreateEventGeneralInformation(props) {
  const { pagetitel_General, nextbutton_Text, hostName1Props, hostName2Props, hostName3Props, hostName4Props, handleHostName, handleEventName, handleEventDescription, handleEventLineup } = props;

  return (
    <div className="createevent-generalinformation screen">
      <div className="page-titel_-general montserrat-medium-black-40px">{pagetitel_General}</div>
      <div className="inputfields_-general">
        <HostName inputPlaceholder={hostName1Props.inputPlaceholder} childToParent={handleHostName} />
        <HostName inputPlaceholder={hostName2Props.inputPlaceholder} className={hostName2Props.className} childToParent={handleEventName} />
        <HostName inputPlaceholder={hostName3Props.inputPlaceholder} className={hostName3Props.className} childToParent={handleEventDescription} />
        <HostName inputPlaceholder={hostName4Props.inputPlaceholder} className={hostName4Props.className} childToParent={handleEventLineup} />
      </div>
      <Link to="/createevent-location">
        <div className="next-button border-1px-dove-gray">
          <div className="next-button_-text montserrat-medium-white-30px">{nextbutton_Text}</div>
        </div>
      </Link>
    </div>
  );
}

export default CreateEventGeneralInformation;
