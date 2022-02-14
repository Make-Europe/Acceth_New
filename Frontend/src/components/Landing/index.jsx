import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./Landing.css";

function Landing(props) {
  const {
    banner_Text,
    logo,
    about_Text,
    pfad5,
    abouttext_Text,
    pfad4,
    project_Text,
    projecttext_Text,
    cta_Text1,
    cta_Button_Text,
    cta_Text2,
    cta_Mail,
    handleConnect
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="landing screen">
        <div className="overlap-group-logo">
          <Link to="/selection">
            <div className="banner" onClick={handleConnect}>
              <div className="banner-text">{banner_Text}</div>
            </div>
          </Link>
          <div className="overlap-group-image">
            <div className="background-image"></div>
            <img className="logo" src={logo} />
          </div>
        </div>
        <div className="overlap-group-container">
          <div className="overlap-group-content">
            <div className="about">
              <h1 className="about-titel montserrat-semi-bold-white-50px">{about_Text}</h1>
            </div>
            <div className="about-text">
              <img className="about-icon" src={pfad5} />
              <div className="overlap-group-about">
                <div className="about-text-text montserrat-normal-black-25px">{abouttext_Text}</div>
              </div>
            </div>
            <div className="project">
              <div className="project-icon">
                <img className="project-icon-icon" src={pfad4} />
              </div>
              <div className="project-titel montserrat-semi-bold-white-50px">{project_Text}</div>
            </div>
          </div>
          <div className="overlap-group-project">
            <div className="project-text">
              <div className="project-text-text montserrat-normal-black-25px">{projecttext_Text}</div>
            </div>
            <div className="cta">
              <div className="cta-titel montserrat-normal-black-35px">{cta_Text1}</div>
              <Link to="/selection">
                <div className="cta-button" onClick={handleConnect}>
                  <div className="cta-button-text">{cta_Button_Text}</div>
                </div>
              </Link>
              <div className="cta-container montserrat-normal-black-35px">
                <div className="cta-text">{cta_Text2}</div>
                <div className="cta-mail">{cta_Mail}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Landing;
