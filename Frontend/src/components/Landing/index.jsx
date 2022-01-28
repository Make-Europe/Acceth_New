import React from "react";
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
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="landing screen">
        <div className="overlap-group4">
          <div className="banner">
            <div className="banner_-text">{banner_Text}</div>
          </div>
          <div className="overlap-group">
            <div className="background_-image"></div>
            <img className="logo" src={logo} />
          </div>
        </div>
        <div className="overlap-group-container">
          <div className="overlap-group3">
            <div className="about">
              <h1 className="about_-text montserrat-semi-bold-white-50px">{about_Text}</h1>
            </div>
            <div className="about-text">
              <div className="about_-icon">
                <div className="ebene-1">
                  <div className="pfad-container">
                    <img className="pfad-5" src={pfad5} />
                  </div>
                </div>
              </div>
              <div className="overlap-group1">
                <div className="about-text_-text montserrat-normal-black-25px">{abouttext_Text}</div>
              </div>
            </div>
            <div className="project">
              <div className="project_-icon">
                <div className="ebene-1-1">
                  <img className="pfad-4" src={pfad4} />
                </div>
              </div>
              <div className="project_-text montserrat-semi-bold-white-50px">{project_Text}</div>
            </div>
          </div>
          <div className="overlap-group5">
            <div className="project-text">
              <div className="project-text_-text montserrat-normal-black-25px">{projecttext_Text}</div>
            </div>
            <div className="cta">
              <div className="cta_-text1 montserrat-normal-black-35px">{cta_Text1}</div>
              <div className="cta_-button">
                <div className="cta_-button_-text">{cta_Button_Text}</div>
              </div>
              <div className="cta_-container montserrat-normal-black-35px">
                <div className="cta_-text2">{cta_Text2}</div>
                <div className="cta_mail">{cta_Mail}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Landing;
