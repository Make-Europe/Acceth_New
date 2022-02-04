import React from "react";
import "./CreateEventImage.css";

function CreateEventImage(props) {
  const { pagetitel_Image, dropimage_Text, uploadbutton_Text, donebutton_Text, eventImage, handleEventImage, handleSaveData } = props;

  return (
    <div className="createevent-image screen">
      <div className="page-titel_-image montserrat-medium-black-40px">{pagetitel_Image}</div>
      <div className="upload border-1px-dove-gray">
        <div className="upload-image">
          <img width={"200px"} src={eventImage}/>
          <input
            className="upload-file"
            type="file"
            name="upload"
            onChange={e => handleEventImage(e.target.files[0])}
          />
        </div>
      </div>
      <div onClick={handleSaveData} className="done-button border-1px-dove-gray">
        <div className="done-button_-text montserrat-medium-white-30px">{donebutton_Text}</div>
      </div>
    </div>
  );
}

export default CreateEventImage;
