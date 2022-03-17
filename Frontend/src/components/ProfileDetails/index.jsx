import React from "react";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import ChainBanner from "../ChainBanner";
import "./EventDetails.css";
import { TwitterShareButton, LinkedinShareButton, PinterestShareButton, TelegramShareButton, WhatsappShareButton, TwitterIcon, LinkedinIcon, PinterestIcon, TelegramIcon, WhatsappIcon } from "react-share";

function EventDetails(props) {
  const {
    handleChangeNickname,
    nickname,
    handleUpdateNickname,
    account,
    handleConnect,
    handleAddToken,
    profile
  } = props;

  /*
  const [comments, setComments] = useState([])
  const [soldTickets, setSoldTickets] = useState(0)
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
  */
  const location = useLocation()
  console.log(nickname)
  //const hashtags = ["BUIDL", "Ethdenver", "NFT", "Web3"]
  

  return (
    /*
    <div className="container-center-horizontal">
      <div className="eventdetails screen">
        <ChainBanner account={account} handleConnect={handleConnect} handleAddToken={handleAddToken}/>
        <div className="details_-titel montserrat-semi-bold-black-50px">{location.state.event.name}</div>
        <div className="container socialMedia">
            <TwitterShareButton url="https://acceth.xyz/chainofevents" title={"I just got my ticket: " + '"' + location.state.event.name + '"'} hashtags={hashtags} via="make_rhein_main">
              <TwitterIcon round={true} size="35px"/>
            </TwitterShareButton>
            <WhatsappShareButton windowWidth="1000px" windowHeight="1000px" title={"Check out this amazing event: " + location.state.event.name} url="https://acceth.xyz/chainofevents">
              <WhatsappIcon round={true} size="35px"/>
            </WhatsappShareButton>
            <TelegramShareButton windowWidth="1000px" windowHeight="1000px" title={"Check out this amazing event: " + location.state.event.name} url="https://acceth.xyz/chainofevents">
              <TelegramIcon round={true} size="35px"/>
            </TelegramShareButton>
          </div>
        <div className="detail-informations">
          <img alt="" className="details_-picture border-1px-dove-gray" src={location.state.event.image} />
          <div className="details-panel-1 border-1px-dove-gray">
            <div className="detailspanel_host_t-container">
              <div className="details-panel_-host_-titel montserrat-medium-black-25px">{detailspanel_Host_Titel}</div>
              <div className="details-panel montserrat-normal-black-25px">{location.state.event.owner.length >= 28 ? location.state.event.owner.substring(0,28) + "..." : location.state.event.owner}</div>
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
            <div className="buy-ticket border-1px-dove-gray" onClick={() => handleBuyTicket(location.state.event)}>
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
                  {soldTickets ? soldTickets : 0} / {location.state.event.capacity}
                </div>
              </div>
              <div className="ticketpanel_-container">
                <div className="ticket-panel_-expiry_-titel montserrat-medium-black-25px">
                  {ticketpanel_Expiry_Titel}
                </div>
                <div className="ticket-panel_-expiry_-text montserrat-normal-black-25px">{location.state.event.date} {location.state.event.end} </div>
                <div className="ticket-panel_-price_-titel montserrat-medium-black-25px">{ticketpanel_Price_Titel}</div>
                <div className="x-panel montserrat-normal-black-25px">{location.state.event.price === null || location.state.event.price != 0 ? "0" : location.state.event.price} CELO</div>
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
            onKeyDown={account ? (e) => e.key === "Enter" && !e.shiftKey && handlePostComment(location.state.event.id) : handleConnect}
            required
          ></textarea>
          <div className="place" onClick={account ? () => handlePostComment(location.state.event.id) : handleConnect} >
            Post
          </div>
        </div>
        <div className="comment-1">
          {comments.map(value => (
            <div key={value.id} className="comment-2">
              <div className="comment_-container-1">
                <h1 className="comment_-titel-1 montserrat-medium-black-25px">{value.username === null ? "0x0000" : value.username.substring(0, 6)}</h1>
                <div className="comment_-date-1 montserrat-medium-tower-gray-15px">{value.date.substring(4, 21)}</div>
              </div>
              <div className="comment_-text-1 montserrat-normal-black-25px">{value.content}</div>
            </div>
          ))}
          
        </div>
      </div>
    </div>*/
    <div className="profilecontainer">
      <div>
        <img alt="" className="profile-picture border-1px-dove-gray" src={location.state.profile.image} />
      </div>
      
      <div className="nickSpace">
        <input
          className="nickname montserrat-medium-tower-gray-30px"
          name="nickname"
          placeholder="enter nickname"
          type="text"
          value={nickname ? nickname : ""}
          onInput={e => handleChangeNickname(e.target.value)}
          required
        />
        <div className="submitNickname montserrat-medium-black-20px border-1px-dove-gray" onClick={handleUpdateNickname}>
          OK
        </div>
      </div>

    </div>
    
  );
  
}

export default EventDetails;
