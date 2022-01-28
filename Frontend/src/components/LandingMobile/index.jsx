import React from "react";
import "./LandingMobile.css";

function LandingMobile(props) {
  const {
    banner_Text,
    heart,
    logo,
    reclaimingCulture,
    about_Text,
    pfad5,
    pfad6,
    pfad7,
    pfad8,
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
    <div className="landing-mobile screen">
      <div className="banner-1">
        <div className="banner_-text-1">{banner_Text}</div>
      </div>
      <div className="image">
        <div className="overlap-group-1">
          <div className="background_-image-1"></div>
          <img className="heart" src={heart} />
          <img className="logo-1" src={logo} />
          <div className="reclaimingculture">{reclaimingCulture}</div>
        </div>
      </div>
      <div className="about-1">
        <div className="about_-text-1 montserrat-semi-bold-water-leaf-28px">{about_Text}</div>
      </div>
      <div className="about-text-1">
        <div className="about_-icon-1">
          <div className="ebene-1-2">
            <div className="pfad-container-1">
              <img className="pfad-5-1" src={pfad5} />
              <img className="pfad-6-1" src={pfad6} />
              <img className="pfad-7-1" src={pfad7} />
              <img className="pfad-8-1" src={pfad8} />
            </div>
          </div>
        </div>
        <p className="about-text_-text-1 montserrat-normal-black-15px">{abouttext_Text}</p>
      </div>
      <div className="project-1">
        <div className="project_-icon-1">
          <div className="ebene-1-3">
            <img className="pfad-4-1" src={pfad4} />
          </div>
        </div>
        <div className="project_-text-1 montserrat-semi-bold-water-leaf-28px">{project_Text}</div>
      </div>
      <div className="project-text-1">
        <p className="project-text_-text-1 montserrat-normal-black-15px">{projecttext_Text}</p>
      </div>
      <div className="cta-1">
        <p className="cta_-text1-1 montserrat-normal-black-15px">{cta_Text1}</p>
        <div className="cta_-button-1">
          <div className="cta_-button_-text-1">{cta_Button_Text}</div>
        </div>
        <div className="cta_-container-1 montserrat-normal-black-9px">
          <div className="cta_-text2-1">{cta_Text2}</div>
          <div className="cta_mail-1">{cta_Mail}</div>
        </div>
      </div>
    </div>
  );
}

export default LandingMobile;
