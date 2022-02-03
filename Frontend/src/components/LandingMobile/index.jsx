import React from "react";
import "./LandingMobile.css";

function LandingMobile(props) {
  const {
    banner_Text,
    logo,
    pfad5,
    pfad6,
    pfad7,
    pfad8,
    about_Text,
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
      <div className="banner_mobile">
        <div className="banner_-text_mobile">{banner_Text}</div>
      </div>
      <div className="image_mobile">
        <img className="logo_mobile" src={logo} />
      </div>
      <div className="about_mobile">
        <div className="about_-icon_mobile">
          <div className="ebene-1_mobile">
            <div className="pfad-container_mobile">
              <img className="pfad-5_mobile" src={pfad5} />
            </div>
          </div>
        </div>
        <div className="about_-text_mobile montserrat-semi-bold-white-28px">{about_Text}</div>
      </div>
      <div className="about-text_mobile">
        <p className="about-text_-text_mobile montserrat-normal-black-15px">{abouttext_Text}</p>
      </div>
      <div className="project_mobile">
        <div className="project_-icon_mobile">
          <div className="ebene-1-1_mobile">
            <img className="pfad-4_mobile" src={pfad4} />
          </div>
        </div>
        <div className="project_-text_mobile montserrat-semi-bold-white-28px">{project_Text}</div>
      </div>
      <div className="project-text_mobile">
        <p className="project-text_-text_mobile montserrat-normal-black-15px">{projecttext_Text}</p>
      </div>
      <div className="cta_mobile">
        <p className="cta_-text1_mobile montserrat-normal-black-15px">{cta_Text1}</p>
        <div className="cta_-button_mobile">
          <div className="cta_-button_-text_mobile">{cta_Button_Text}</div>
        </div>
        <div className="cta_-container_mobile montserrat-normal-black-9px">
          <div className="cta_-text2_mobile">{cta_Text2}</div>
          <div className="cta_mail_mobile">{cta_Mail}</div>
        </div>
      </div>
    </div>
  );
}

export default LandingMobile;
