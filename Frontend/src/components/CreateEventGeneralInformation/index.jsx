import React from "react";
import { Link } from "react-router-dom";
import HostName from "../HostName";
import "./CreateEventGeneralInformation.css";

function CreateEventGeneralInformation(props) {
  const { 
    pagetitel_General, 
    nextbutton_Text, 
    hostName1Props, 
    hostName2Props, 
    hostName3Props, 
    hostName4Props, 
    handleHostName, 
    handleEventName, 
    handleEventDescription, 
    handleEventLineup,
    hostName,
    eventName,
    eventDescription,
    eventLineup
  } = props;

  if(eventName === '' || eventDescription === '' || eventLineup === ''){
    return (
      <div className="createevent-generalinformation screen">
      <div className="page-titel_-general montserrat-medium-black-40px">{pagetitel_General}</div>
      <div className="inputfields_-general">
        <HostName inputPlaceholder={hostName2Props.inputPlaceholder} className={hostName2Props.className} childToParent={handleEventName} currentValue={eventName} fieldType={"text"} />
        <HostName inputPlaceholder={hostName3Props.inputPlaceholder} className={hostName3Props.className} childToParent={handleEventDescription} currentValue={eventDescription} fieldType={"text"} />
        <HostName inputPlaceholder={hostName4Props.inputPlaceholder} className={hostName4Props.className} childToParent={handleEventLineup} currentValue={eventLineup} fieldType={"text"} />
      </div>
      
        <div className="next-button border-1px-dove-red">
          <div className="next-button_-text montserrat-medium-white-30px">{nextbutton_Text}</div>
        </div>
    </div>
    )
  }
  else{
    return (
      <div className="createevent-generalinformation screen">
        <div className="page-titel_-general montserrat-medium-black-40px">{pagetitel_General}</div>
        <div className="inputfields_-general">
          <HostName inputPlaceholder={hostName2Props.inputPlaceholder} className={hostName2Props.className} childToParent={handleEventName} currentValue={eventName} fieldType={"text"} />
          <HostName inputPlaceholder={hostName3Props.inputPlaceholder} className={hostName3Props.className} childToParent={handleEventDescription} currentValue={eventDescription} fieldType={"text"} />
          <HostName inputPlaceholder={hostName4Props.inputPlaceholder} className={hostName4Props.className} childToParent={handleEventLineup} currentValue={eventLineup} fieldType={"text"} />
        </div>
        
        <Link to="/createevent-location">
          <div className="next-button border-1px-dove-gray">
            <div className="next-button_-text montserrat-medium-white-30px">{nextbutton_Text}</div>
          </div>
        </Link>
      </div>
    );
  }
  }

  

export default CreateEventGeneralInformation;
