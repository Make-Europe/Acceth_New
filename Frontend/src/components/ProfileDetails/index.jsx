import React from "react";
import { useEffect, useState } from "react";
import { useLocation, Link } from "react-router-dom";
import ChainBanner from "../ChainBanner";
import "./EventDetails.css";
import { TwitterShareButton, LinkedinShareButton, PinterestShareButton, TelegramShareButton, WhatsappShareButton, TwitterIcon, LinkedinIcon, PinterestIcon, TelegramIcon, WhatsappIcon } from "react-share";

function EventDetails(props) {
  const {
    handleChangeNickname,
    handleChangeStory,
    nickname,
    profileDescription,
    handleUpdateProfile,
    account,
    handleConnect,
    handleAddToken,
    profile,
    profileComment,
    handleProfileComment,
    handlePostProfileComment,
    handleLike,
    handleLikeAmount,
    likeAmount,
    handleConnectRally
  } = props;

  const location = useLocation()

  const [user, setUser] = useState([])
  const [comments, setComments] = useState([])
  const [likes, setLikes] = useState(0)

  useEffect(() => {
    fetch('/api/list/profilecomment/' + location.state.profile.id).then(res => res.json()).then(data => {
      const result = data.sort((a, b) => (a.id < b.id) ? 1 : -1)
      setComments(result)
    })
    fetch('api/user/').then(res => res.json()).then(data => {
      setUser(data)
    })
    fetch('/api/list/likebyreciever/' + location.state.profile.public_address).then(res => res.json()).then(data => {
      setLikes(data)
      handleLikeAmount(data.value)
    })
  }, [])
  

  return (
    <div className="screen">
      <div className="profileBanner">
        <ChainBanner account={account} handleConnect={handleConnect} handleAddToken={handleAddToken} profile={profile} nickname={nickname} handleConnectRally={handleConnectRally} />
      </div>
      
      <div className="profilecontainer">
        <div>
          <img alt="" className="profile-picture border-1px-dove-gray" src={location.state.profile.image} />
        </div>
        
        <div className="nickSpace">
          <div className="nickname montserrat-medium-black-30px">{location.state.profile.name}</div>
        </div>
        <div className="storyContainer">
          <div className="story-panel2 border-1px-dove-gray">
            <div>
              <div className="profileLike" onClick={account ? () => handleLike(location.state.profile.public_address) : handleConnect}>Like</div>
              <div className="profileLikeCount">{likes ? likes.length > 0 ? likes.length : "0" : "-1"}</div>
            </div>
            <div className="story-panel_-text2 montserrat-medium-black-25px">{location.state.profile.description === ""  || location.state.profile.description === null ? "This User don´t have a story jet." : location.state.profile.description}</div>
          </div>
        </div>
      </div>
      <div className="CommentContainer2">
        <div className="make-commentsProfile border-1px-dove-gray">
            <textarea
              className="make-comments_-textfieldProfile montserrat-medium-tower-gray-30px"
              name="makecomments_textfield1"
              placeholder="Add a comment.."
              type="text"
              value={profileComment.childdata ? profileComment.childdata : ''}
              onInput={e => handleProfileComment(e.target.value)}
              onKeyDown={account ? (e) => e.key === "Enter" && !e.shiftKey && handlePostProfileComment(location.state.profile.id) : handleConnect}
              required
            ></textarea>
            <div className="placeProfile" onClick={account ? () => handlePostProfileComment(location.state.profile.id) : handleConnect} >
              Post
            </div>
          </div>
        </div>
        <div className="CommentsContainer2">
          <div className="comment-1Profile">
            {comments.map(value => (
              <div key={value.id} className="comment-2Profile">
                <div className="comment_-container-1Profile">
                  <Link
                    to={{
                      pathname: "/profiledetails",
                      state: {
                        profile: (user.find((e) => e.public_address === value.username)),
                      },
                    }}
                  >
                    <h1 className="comment_-titel-1Profile montserrat-medium-black-15px">{user.length < 1 ? (value.username ? value.username : "") : (user.find((e) => e.public_address === value.username).name === ""  ? value.username.substring(0, 5) + "..." + value.username.substring(38, 42) : user.find((e) => e.public_address === value.username).name.substring(0, 15))}</h1>
                  </Link>
                  <div className="comment_-date-1Profile montserrat-medium-tower-gray-15px">{value.date.substring(4, 21)}</div>
                </div>
                <div className="comment_-text-1Profile montserrat-normal-black-25px">{value.content}</div>
              </div>
            ))}
          </div>
        </div>
    </div> 
  );
}

export default EventDetails;


/*
Hey my name ist alex. I am a host. That is what i do. I host stuff. All the time. For testing purposes. I Try to write text that is slighly to big for this textbox here. Maybe i can break something. :D
*/