import React from "react";
import { Link } from "react-router-dom";
import "./CreateEventImage.css";

function CreateEventImage(props) {
  const { pagetitel_Image, donebutton_Text, eventImage, handleEventImage, handleSaveData } = props;

  return (
    <div className="createevent-image screen">
      <div className="page-titel_-image montserrat-medium-black-40px">{pagetitel_Image}</div>
      <div className="upload border-1px-dove-gray">
        <div className="upload-image">
          <div className="textForNow montserrat-medium-black-20px">A picture will be generated for testing. Click DONE.</div>
        </div>
      </div>
      <Link to="/chainofevents">
        <div onClick={handleSaveData} className="done-button border-1px-dove-gray">
          <div className="done-button_-text montserrat-medium-white-30px">{donebutton_Text}</div>
        </div>
      </Link>
    </div>
  );
}

export default CreateEventImage;
