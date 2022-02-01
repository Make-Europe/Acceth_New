import React from "react";
import "./CreateEventImage.css";

function CreateEventImage(props) {
  const { pagetitel_Image, dropimage_Text, uploadbutton_Text, donebutton_Text } = props;

  return (
    <div className="createevent-image screen">
      <div className="page-titel_-image montserrat-medium-black-40px">{pagetitel_Image}</div>
      <div className="upload border-1px-dove-gray">
        <div className="upload-image">
          <div className="drop-image_-text montserrat-medium-tower-gray-30px">{dropimage_Text}</div>
          <div className="upload-button border-1px-dove-gray">
            <div className="upload-button_-text montserrat-medium-black-30px">{uploadbutton_Text}</div>
          </div>
        </div>
      </div>
      <div className="done-button border-1px-dove-gray">
        <div className="done-button_-text montserrat-medium-white-30px">{donebutton_Text}</div>
      </div>
    </div>
  );
}

export default CreateEventImage;
