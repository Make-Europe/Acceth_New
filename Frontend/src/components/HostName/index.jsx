import React from "react";
import "./HostName.css";

function HostName(props) {
  const { inputPlaceholder, className } = props;

  return (
    <div className={`host-name border-1px-dove-gray ${className || ""}`}>
      <input
        className="t-name_-placeholder montserrat-medium-tower-gray-30px"
        name="hostname_placeholder1"
        placeholder={inputPlaceholder}
        type="text"
        required
      />
    </div>
  );
}

export default HostName;
