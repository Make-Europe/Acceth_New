import React, { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Selection.css";
import Modal from "../Modal";

function Selection(props) {
  const { host_Text, place, guest_Text, guestbutton_Text, handleLoadData, account, handleConnect } = props;
  
  const specModal = useRef(null)

  useEffect(() => {
    specModal.current.open()
  }, [])

  if(account != null){
    return (
      <div className="selection screen">
        <Modal ref={specModal}>
          <div class="infoModal">
            <h1 class="infoModalTitel montserrat-medium-black-25px">Hi #Ethdenver - get early Acc.eth!</h1>
            <div class="infoModalText montserrat-normal-black-25px">
              This is an experimental dDapp to kickstart the event economy IRL. All Tickets $TCKT are listed on CELO. If you have at least one, you join our whitelist automatically and forever. We will however ban profanity from our platform and blacklist other bad actor's public adresses. 
              <br></br><br></br>
              Early access runs out 02/28/22.
            </div>
          </div>
        </Modal>
        <div className="host">
          <div className="host_-text montserrat-medium-black-40px">{host_Text}</div>
          <Link to="/createevent-generalinformation">
            <div className="host-button border-1px-dove-gray">
              <div className="place2 montserrat-medium-white-30px">{place}</div>
            </div>
          </Link>
        </div>
        <div className="guest">
          <div className="guest_-text montserrat-medium-white-40px">{guest_Text}</div>
          <Link to="/chainofevents">
            <div className="guest-button border-1px-dove-gray" onClick={handleLoadData}>
              <div className="guest-button_-text montserrat-medium-black-30px">{guestbutton_Text}</div>
            </div>
          </Link>
        </div>
      </div>
    );
  }
  else{
    return (
      <div className="selection screen">
        <Modal ref={specModal}>
          <div class="infoModal">
            <h1 class="infoModalTitel montserrat-medium-black-25px">Hi #Ethdenver - get early Acc.eth!</h1>
            <div class="infoModalText montserrat-normal-black-25px">
              This is an experimental dDapp to kickstart the event economy IRL. All Tickets $TCKT are listed on CELO. If you have at least one, you join our whitelist automatically and forever. We will however ban profanity from our platform and blacklist other bad actor's public adresses. 
              <br></br><br></br>
              Early access runs out 02/28/22.
            </div>
          </div>
        </Modal>
        <div className="host">
          <div className="host_-text montserrat-medium-black-40px">{host_Text}</div>
            <div className="host-button border-1px-dove-gray" onClick={handleConnect}>
              <div className="place2 montserrat-medium-white-30px">{place}</div>
            </div>
            <div className="info_text montserrat-medium-black-20px">Connect wallet to host</div>
        </div>
        <div className="guest">
          <div className="guest_-text montserrat-medium-white-40px">{guest_Text}</div>
          <Link to="/chainofevents">
            <div className="guest-button border-1px-dove-gray" onClick={handleLoadData}>
              <div className="guest-button_-text montserrat-medium-black-30px">{guestbutton_Text}</div>
            </div>
          </Link>
        </div>
      </div>
    );
  }
  
}

export default Selection;
