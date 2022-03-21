import React from "react";
import { useState, useEffect } from "react";
import ChainBannerMobile from "../ChainBannerMobile";
import "./EventDetailsMobile.css";
import { useLocation } from "react-router-dom";

function EventDetailsMobile(props) {
  const {
    detailspanel_Host_Titel,
    detailspanel_Date_Titel,
    detailspanel_Start_Titel,
    detailspanel_End_Titel,
    detailspanel_Location_Titel,
    detailspanel_City_Titel,
    detailspanel_Street_Titel,
    lineuppanel_Titel,
    informationpanel_Titel,
    buyticket_Text,
    ticketpanel_Category_Titel,
    ticketpanel_Category_Text,
    ticketpanel_Capacity_Titel,
    ticketpanel_Capacity_Current_Text,
    ticketpanel_Expiry_Titel,
    ticketpanel_Price_Titel,
    account,
    handleConnect,
    handleComment,
    handlePostComment,
    eventComment,
    handleBuyTicket,
    handleTicketAmount,
    handleAddToken,
    handleConnectRally
  } = props;

  const [comments, setComments] = useState([])
  const [soldTickets, setSoldTickets] = useState(0)
  const [owner, setOwner] = useState([])
  const [user, setUser] = useState([])
  useEffect(() => {
    fetch('/api/list/comment/' + location.state.event.id).then(res => res.json()).then(data => {
      const result = data.sort((a, b) => (a.id < b.id) ? 1 : -1)
      setComments(result)
    })
    fetch('/api/count/' + location.state.event.id).then(res => res.json()).then(data => {
      setSoldTickets(data.value)
      handleTicketAmount(data.value)
    })
  }, [account])

  useEffect(() => {
    fetch('api/user/' + location.state.event.ownerAddress).then(res => res.json()).then(data => {
      setOwner(data)
    })
    fetch('api/user/').then(res => res.json()).then(data => {
      setUser(data)
    })
  }, [])

  const location = useLocation()

  return (
    <div className="container-center-horizontal">
      <div className="eventdetails-mobile screen">
        <ChainBannerMobile account={account} handleConnect={handleConnect} handleAddToken={handleAddToken} handleConnectRally={handleConnectRally} />
        <div className="details-mobile_-titel">{location.state.event.name}</div>
        <div className="detail-informations-mobile">
          <img className="details_-picture-mobile" src={location.state.event.image} />
          <div className="details-panel-mobile border-1px-dove-gray">
            <div className="detailspanelmobile_host_t-container">
              <div className="x-panel-mobile montserrat-normal-black-25px">{owner.name ? owner.name.length >= 28 ? owner.name.substring(0, 28) + "..." : owner.name : owner.public_address !== undefined ? (owner.public_address.substring(0, 5) + "..." + owner.public_address.substring(38, 42)) : ""}</div>
              <div className="x-panel-mobile-1 montserrat-medium-black-25px">{detailspanel_Host_Titel}</div>
            </div>
            <div className="detailspanelmobile_date_t-container">
              <div className="x-panel-mobile montserrat-normal-black-25px">{location.state.event.date}</div>
              <div className="x-panel-mobile-1 montserrat-medium-black-25px">{detailspanel_Date_Titel}</div>
            </div>
            <div className="detailspanelmobile_start_t-container">
              <div className="x-panel-mobile montserrat-normal-black-25px">{location.state.event.start}</div>
              <div className="x-panel-mobile-1 montserrat-medium-black-25px">{detailspanel_Start_Titel}</div>
            </div>
            <div className="detailspanelmobile_end_t-container">
              <div className="x-panel-mobile montserrat-normal-black-25px">{location.state.event.end}</div>
              <div className="x-panel-mobile-1 montserrat-medium-black-25px">{detailspanel_End_Titel}</div>
            </div>
            <div className="detailspanelmobile_location_t-container">
              <div className="x-panel-mobile montserrat-normal-black-25px">{location.state.event.location}</div>
              <div className="x-panel-mobile-1 montserrat-medium-black-25px">{detailspanel_Location_Titel}</div>
            </div>
            <div className="detailspanelmobile_city_-container">
              <div className="details-panel-mobile_-city_-text montserrat-normal-black-25px">
                {location.state.event.city}
              </div>
              <div className="x-panel-mobile montserrat-normal-black-25px">{location.state.event.zipCode}</div>
              <div className="x-panel-mobile-1 montserrat-medium-black-25px">{detailspanel_City_Titel}</div>
            </div>
            <div className="detailspanelmobile_-container">
              <div className="x-panel-mobile montserrat-normal-black-25px">{location.state.event.street}</div>
              <div className="x-panel-mobile-1 montserrat-medium-black-25px">{detailspanel_Street_Titel}</div>
            </div>
          </div>
        </div>
        <div className="lineup-panel-mobile border-1px-dove-gray information-panel-mobile">
          <div className="lineup-panel-mobile_-titel montserrat-medium-black-25px">{lineuppanel_Titel}</div>
          <div className="lineup-panel-mobile_-text montserrat-normal-black-25px">{location.state.event.lineup}</div>
        </div>
        <div className="lineup-panel-mobile border-1px-dove-gray information-panel-mobile">
          <div className="lineup-panel-mobile_-titel montserrat-medium-black-25px">{informationpanel_Titel}</div>
          <div className="lineup-panel-mobile_-text montserrat-normal-black-25px">{location.state.event.description}</div>
        </div>
        <div className="buy-ticket-panel-mobile">
          <div className="ticket-panel-mobile border-1px-dove-gray">
            <div className="ticketpanelmobile_category_t-container">
              <div className="x-panel-mobile montserrat-normal-black-25px">{ticketpanel_Category_Text}</div>
              <div className="x-panel-mobile-1 montserrat-medium-black-25px">{ticketpanel_Category_Titel}</div>
            </div>
            <div className="ticketpanelmobile_expiry_t-container">
              <div className="x-panel-mobile montserrat-normal-black-25px">{location.state.event.date} {location.state.event.end}</div>
              <div className="x-panel-mobile-1 montserrat-medium-black-25px">{ticketpanel_Expiry_Titel}</div>
            </div>
            <div className="overlap-group4">
              <div className="ticketpanelmobile_capacity_t-container">
                <div className="x-panel-mobile-1 montserrat-medium-black-25px">{ticketpanel_Capacity_Titel}</div>
              </div>
              <div className="ticket-panel-mobile_-1 montserrat-normal-black-25px">
              {soldTickets ? soldTickets : 0} / {location.state.event.capacity}
              </div>
            </div>
            <div className="ticketpanelmobile_price_t-container">
              <div className="x-panel-mobile montserrat-normal-black-25px">{location.state.event.price === null ? "0" : location.state.event.price} CELO</div>
              <div className="x-panel-mobile-1 montserrat-medium-black-25px">{ticketpanel_Price_Titel}</div>
            </div>
          </div>
          <div className="buy-ticket-mobile border-1px-dove-gray" onClick={() => handleBuyTicket(location.state.event)} >
            <div className="buyticket-mobile_-text montserrat-medium-black-25px">Claim Your Ticket</div>
          </div>
        </div>
        <div className="make-comments-mobile border-1px-dove-gray">
          <textarea
            className="make-comments-mobile_-textfield"
            name="makecommentsmobile_textfield1"
            placeholder="Add a comment.."
            type="text"
            value={eventComment.childdata ? eventComment.childdata : ''}
            onInput={e => handleComment(e.target.value)}
            onKeyDown={account ? null : handleConnect}
            required
          ></textarea>
          <div className="place montserrat-medium-cerise-20px" onClick={account ? () => handlePostComment(location.state.event.id) : handleConnect}>Post</div>
        </div>
        <div className="comment-mobile">
        {comments.map(value => (
          <div key={value.id} className="commentM">
            <div className="comment-mobile_-titel montserrat-medium-black-25px">{value.username === null ? "0x0000" : value.username.substring(0, 6)}</div>
            <div className="comment-mobile_-date montserrat-medium-tower-gray-15px">{value.date.substring(4, 21)}</div>
            <div className="comment-mobile_-text montserrat-normal-black-25px">{value.content}</div>
          </div>
        ))}
        </div>
      </div>
    </div>
  );
}

export default EventDetailsMobile;
