import React from "react";
import { Link } from "react-router-dom";
import "./Selection.css";

function Selection(props) {
  const { host_Text, place, guest_Text, guestbutton_Text } = props;

  return (
    <div className="selection screen">
      <div className="host">
        <div className="host_-text montserrat-medium-black-40px">{host_Text}</div>
        <Link to="/createevent-generalinformation">
          <div className="host-button border-1px-dove-gray">
            <div className="place montserrat-medium-white-30px">{place}</div>
          </div>
        </Link>
      </div>
      <div className="guest">
        <div className="guest_-text montserrat-medium-white-40px">{guest_Text}</div>
        <div className="guest-button border-1px-dove-gray">
          <div className="guest-button_-text montserrat-medium-black-30px">{guestbutton_Text}</div>
        </div>
      </div>
    </div>
  );
}

export default Selection;
