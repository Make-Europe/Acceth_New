import "./App.css";
import React from "react";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import { BrowserView, MobileView } from 'react-device-detect';

import Landing from "./components/Landing";
import LandingMobile from "./components/LandingMobile";

import logo from "./static/img/logo.png"
import about_icon from "./static/img/About_Icon.png"
import project_icon from "./static/img/Project_Icon.png"


function App() {
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

