import "./App.css";
import React, { useEffect } from "react";
import { useState } from "react";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import { BrowserView, MobileView } from 'react-device-detect';

import Landing from "./components/Landing";
import LandingMobile from "./components/LandingMobile";
import Selection from "./components/Selection";
import CreateEventGeneralInformation from "./components/CreateEventGeneralInformation"
import CreateEventLocation from "./components/CreateEventLocation";
import CreateEventDetails from "./components/CreateEventDetails";
import CreateEventImage from "./components/CreateEventImage";

import logo from "./static/img/logo.png"
import about_icon from "./static/img/About_Icon.png"
import project_icon from "./static/img/Project_Icon.png"


function App() {
  const [hostName, setHostName] = useState('')
  const [eventName, setEventName] = useState('')
  const [eventDescription, setEventDescription] = useState('')
  const [eventLineup, setEventLineup] = useState('')
  const [eventLocation, setEventLocation] = useState('')
  const [eventStreet, setEventStreet] = useState('')
  const [eventZip, setEventZip] = useState('')
  const [eventCity, setEventCity] = useState('')

  const handleHostName = (childdata) => {
    setHostName({childdata});
  }
  const handleEventName = (childdata) => {
    setEventName({childdata});
  }
  const handleEventDescription = (childdata) => {
    setEventDescription({childdata});
  }
  const handleEventLineup = (childdata) => {
    setEventLineup({childdata});
  }
  const handleEventLocation = (childdata) => {
    setEventLocation({childdata});
  }
  const handleEventStreet = (childdata) => {
    setEventStreet({childdata});
  }
  const handleEventZip = (childdata) => {
    setEventZip({childdata});
  }
  const handleEventCity = (childdata) => {
    setEventCity({childdata});
  }

  useEffect(() => {
    console.log(hostName.childdata + eventName.childdata + eventDescription.childdata + eventLineup.childdata + eventLocation.childdata + eventStreet.childdata + eventZip.childdata + eventCity.childdata)
  }, [hostName, eventName, eventDescription, eventLineup, eventLocation, eventStreet, eventZip, eventCity])

  return (
    <Router>
      <Switch>
        <Route path="/:path(|landing)">
          <BrowserView>
            <Landing {...landingData} />
          </BrowserView>
          <MobileView>
            <LandingMobile {...landingMobileData} />
          </MobileView>
        </Route>
        <Route path="/selection">
          <Selection host_Text="I’m a" place="HOST" guest_Text="I’m a" guestbutton_Text="GUEST" />
        </Route>
        <Route path="/createevent-generalinformation">
          <CreateEventGeneralInformation
            pagetitel_General="General Information"
            nextbutton_Text="Next"
            hostName1Props={createEventGeneralInformationData.hostName1Props}
            hostName2Props={createEventGeneralInformationData.hostName2Props}
            hostName3Props={createEventGeneralInformationData.hostName3Props}
            hostName4Props={createEventGeneralInformationData.hostName4Props}
            handleHostName={handleHostName}
            handleEventName={handleEventName}
            handleEventDescription={handleEventDescription}
            handleEventLineup={handleEventLineup}
          />
        </Route>
        <Route path="/createevent-location">
          <CreateEventLocation 
          {...createEventLocationData}
          handleEventLocation={handleEventLocation}
          handleEventStreet={handleEventStreet}
          handleEventZip={handleEventZip}
          handleEventCity={handleEventCity}
          />
        </Route>
        <Route path="/createevent-details">
          <CreateEventDetails {...createEventDetailsData} />
        </Route>
        <Route path="/createevent-image">
          <CreateEventImage
            pagetitel_Image="Image"
            dropimage_Text={
              <>
                Drop image here
                <br />
                Or
              </>
            }
            uploadbutton_Text="Upload"
            donebutton_Text="DONE"
          />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
const landingData = {
    banner_Text: "Test the Project NOW (click here)",
    logo: logo,
    about_Text: "Who we are",
    pfad5: about_icon,
    abouttext_Text: "Developing software Made in Germany since 2015, the Make Europe GmbH is among the leading pioneers in the fields DLT, Blockchain, EVM, Metaverse-Technology, Web3 as well as Online Payments and Online Brokerage.",
    pfad4: project_icon,
    project_Text: "The Project",
    projecttext_Text: "We are launching Acc.eth – reclaiming culture. The Acc.Eth DAO It is a decentralised Application that is there to kickstart the event economy once the battle on the virus is won: We want to allow communities to buy event tickets wholesale and manage the event risk in a secure and fan-friendly way. We hope to inspire a decentralised network of evergrowing user content around the world.",
    cta_Text1: "Want to join the project, test, hack or just give feedback?",
    cta_Button_Text: "Try NOW",
    cta_Text2: "Or just mail us:",
    cta_Mail: "roman (ä) make-europe.com",
};

const landingMobileData = {
    banner_Text: "Test the Project NOW (click here)",
    logo: logo,
    reclaimingCulture: <>Reclaiming<br />Culture</>,
    about_Text: "Who we are",
    pfad5: about_icon,
    abouttext_Text: "Developing software Made in Germany since 2015, the Make Europe GmbH is among the leading pioneers in the fields DLT, Blockchain, EVM, Metaverse-Technology, Web3 as well as Online Payments and Online Brokerage.",
    pfad4: "/img/pfad-4@1x.png",
    project_Text: "The Project",
    projecttext_Text: "We are launching Acc.eth – reclaiming culture. The Acc.Eth DAO It is a decentralised Application that is there to kickstart the event economy once the battle on the virus is won: We want to allow communities to buy event tickets wholesale and manage the event risk in a secure and fan-friendly way. We hope to inspire a decentralised network of evergrowing user content around the world.",
    cta_Text1: <>Want to join the project, test, hack <br />or just give feedback?</>,
    cta_Button_Text: "Try NOW",
    cta_Text2: "Or just mail us:",
    cta_Mail: "roman (ä) make-europe.com",
};

const hostName1Data = {
  inputPlaceholder: "Host Name",
};

const hostName2Data = {
  inputPlaceholder: "Event Name",
  className: "event-name",
};

const hostName3Data = {
  inputPlaceholder: "Event Description",
  className: "event-2",
};

const hostName4Data = {
  inputPlaceholder: "Event Lineup",
  className: "event",
};

const createEventGeneralInformationData = {
  hostName1Props: hostName1Data,
  hostName2Props: hostName2Data,
  hostName3Props: hostName3Data,
  hostName4Props: hostName4Data,
};

const hostName5Data = {
  inputPlaceholder: "Location Name",
};

const hostName6Data = {
  inputPlaceholder: "Street",
  className: "street-name",
};

const createEventLocationData = {
  pagetitel_Location: "Location Information",
  inputType1: "text",
  inputPlaceholder1: "ZIP",
  inputType2: "text",
  inputPlaceholder2: "City",
  nextbutton2_Text: "Next",
  hostName1Props: hostName5Data,
  hostName2Props: hostName6Data,
};

const hostName7Data = {
  inputPlaceholder: "Event Date",
};

const hostName8Data = {
  inputPlaceholder: "Capacity",
  className: "capacity",
};

const hostName9Data = {
  inputPlaceholder: "Price",
  className: "price",
};

const createEventDetailsData = {
  pagetitel_Detail: "Detail Information",
  inputType1: "text",
  inputPlaceholder1: "Start Time",
  inputType2: "text",
  inputPlaceholder2: "End Time",
  nextbutton3_Text: "Next",
  hostName1Props: hostName7Data,
  hostName2Props: hostName8Data,
  hostName3Props: hostName9Data,
};