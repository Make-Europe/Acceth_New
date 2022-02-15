import React from "react";
import { useLocation } from "react-router-dom";
import ChainBanner from "../ChainBanner";
import "./EventDetails.css";

function EventDetails(props) {
  const {
    details_Titel,
    detailspanel_Host_Titel,
    detailspanel_Host_Text,
    detailspanel_Date_Titel,
    detailspanel_Date_Text,
    detailspanel_Start_Titel,
    detailspanel_Start_Text,
    detailspanel_End_Titel,
    detailspanel_End_Text,
    detailspanel_Location_Titel,
    detailspanel_Location_Text,
    detailspanel_City_Titel,
    detailspanel_City_Ziptext,
    detailspanel_City_Text1,
    detailspanel_Street_Titel,
    detailspanel_City_Text2,
    lineuppanel_Titel,
    lineuppanel_Text,
    informationpanel_Titel,
    informationpanel_Text,
    buyticket_Text,
    ticketpanel_Category_Titel,
    ticketpanel_Category_Text,
    ticketpanel_Capacity_Titel,
    ticketpanel_Capacity_Current_Text,
    ticketpanel_Capacity_Total_Text,
    ticketpanel_Expiry_Titel,
    ticketpanel_Expiry_Text,
    ticketpanel_Price_Titel,
    ticketpanel_Price_Text,
    details_picture, 
    account,
    handleConnect,
    handleComment,
    handlePostComment,
    eventComment
  } = props;

  const location = useLocation()
  const { event } = location.state

  return (
    <div className="container-center-horizontal">
      <div className="eventdetails screen">
        <ChainBanner account={account} handleConnect={handleConnect} />
        <div className="details_-titel montserrat-semi-bold-black-50px">{location.state.event.name}</div>
        <div className="detail-informations">
          <img className="details_-picture border-1px-dove-gray" src={location.state.event.image} />
          <div className="details-panel-1 border-1px-dove-gray">
            <div className="detailspanel_host_t-container">
              <div className="details-panel_-host_-titel montserrat-medium-black-25px">{detailspanel_Host_Titel}</div>
              <div className="details-panel montserrat-normal-black-25px">{location.state.event.hostName.length >= 30 ? location.state.event.hostName.substring(0,30) + "..." : location.state.event.hostName}</div>
            </div>
            <div className="detailspanel_date_t-container">
              <div className="details-panel_-date_-titel montserrat-medium-black-25px">{detailspanel_Date_Titel}</div>
              <div className="details-panel montserrat-normal-black-25px">{location.state.event.date}</div>
            </div>
            <div className="detailspanel_start_t-container">
              <div className="details-panel_-start_-titel montserrat-medium-black-25px">{detailspanel_Start_Titel}</div>
              <div className="details-panel montserrat-normal-black-25px">{location.state.event.start}</div>
            </div>
            <div className="detailspanel_end_t-container">
              <div className="details-panel_-end_-titel montserrat-medium-black-25px">{detailspanel_End_Titel}</div>
              <div className="details-panel montserrat-normal-black-25px">{location.state.event.end}</div>
            </div>
            <div className="detailspanel_location_t-container">
              <div className="details-panel_-location_-titel montserrat-medium-black-25px">
                {detailspanel_Location_Titel}
              </div>
              <div className="details-panel_-location_-text montserrat-normal-black-25px">
                {location.state.event.location}
              </div>
            </div>
            <div className="detailspanel_city_-container">
              <div className="details-panel_-city_-titel montserrat-medium-black-25px">{detailspanel_City_Titel}</div>
              <div className="details-panel_-city_-zip-text montserrat-normal-black-25px">
                {location.state.event.zipCode}
              </div>
              <div className="x-panel montserrat-normal-black-25px">{location.state.event.city}</div>
            </div>
            <div className="detailspanel_-container">
              <div className="details-panel_-street_-titel montserrat-medium-black-25px">
                {detailspanel_Street_Titel}
              </div>
              <div className="details-panel montserrat-normal-black-25px">{location.state.event.street}</div>
            </div>
          </div>
        </div>
        <div className="lineup-panel2 border-1px-dove-gray">
          <div className="lineup-panel_-titel2 montserrat-medium-black-25px">{lineuppanel_Titel}</div>
          <div className="lineup-panel_-text2 montserrat-normal-black-25px">{location.state.event.lineup}</div>
        </div>
        <div className="information-panel2 border-1px-dove-gray">
          <div className="information-panel_-titel2 montserrat-medium-black-25px">{informationpanel_Titel}</div>
          <div className="information-panel_-text2 montserrat-normal-black-25px">{location.state.event.description}</div>
        </div>
        <div className="buy-ticket-panel">
          <div className="ticket-container">
            <div className="buy-ticket border-1px-dove-gray">
              <div className="buyticket_-text montserrat-medium-black-30px">{buyticket_Text}</div>
            </div>
            <div className="ticket-panel border-1px-dove-gray">
              <div className="ticketpanel_ca-container">
                <div className="ticket-panel_-category_-titel montserrat-medium-black-25px">
                  {ticketpanel_Category_Titel}
                </div>
                <div className="ticket-panel_-category_-text montserrat-normal-black-25px">
                  {ticketpanel_Category_Text}
                </div>
                <div className="ticket-panel_-capacity_-titel montserrat-medium-black-25px">
                  {ticketpanel_Capacity_Titel}
                </div>
                <div className="ticket-panel_-capacity_-current_-text montserrat-normal-black-25px">
                  {ticketpanel_Capacity_Current_Text} / {location.state.event.capacity}
                </div>
              </div>
              <div className="ticketpanel_-container">
                <div className="ticket-panel_-expiry_-titel montserrat-medium-black-25px">
                  {ticketpanel_Expiry_Titel}
                </div>
                <div className="ticket-panel_-expiry_-text montserrat-normal-black-25px">{location.state.event.date} {location.state.event.end} </div>
                <div className="ticket-panel_-price_-titel montserrat-medium-black-25px">{ticketpanel_Price_Titel}</div>
                <div className="x-panel montserrat-normal-black-25px">{location.state.event.price} CELO</div>
              </div>
            </div>
          </div>
        </div>
        <div className="make-comments border-1px-dove-gray">
          <textarea
            className="make-comments_-textfield montserrat-medium-tower-gray-30px"
            name="makecomments_textfield1"
            placeholder="Add a comment.."
            type="text"
            value={eventComment.childdata ? eventComment.childdata : ''}
            onInput={e => handleComment(e.target.value)}
            required
          ></textarea>
          <div className="place" onClick={() => handlePostComment(location.state.event.id)} >
            Post
          </div>
        </div>
        <div className="comment-1">
          <div className="comment-2">
            <div className="comment_-container-1">
              <h1 className="comment_-titel-1 montserrat-medium-black-25px">0x3D4A:</h1>
              <div className="comment_-date-1 montserrat-medium-tower-gray-15px">05/04/2022 10:13</div>
            </div>
            <div className="comment_-text-1 montserrat-normal-black-25px">Das Sommerschein-Team freut sich dieses Jahr wieder ein Festival für euch zu organisieren.</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EventDetails;
