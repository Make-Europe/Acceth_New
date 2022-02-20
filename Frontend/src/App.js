import "./App.css";
import React, { useEffect, useState, useCallback } from "react";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import { BrowserView, MobileView } from 'react-device-detect';
import { SwapWidget } from '@uniswap/widgets'

//import { useWeb3React } from "@web3-react/core"
import { injected } from "./components/wallet/Connectors"
import Web3 from 'web3'
import { useContractKit } from "@celo-tools/use-contractkit";
import "@celo-tools/use-contractkit/lib/styles.css";
import { RampInstantSDK } from '@ramp-network/ramp-instant-sdk';

//import Landing from "./components/Landing";
import LandingMobile from "./components/LandingMobile";
import Selection from "./components/Selection";
import CreateEventGeneralInformation from "./components/CreateEventGeneralInformation"
import CreateEventLocation from "./components/CreateEventLocation";
import CreateEventDetails from "./components/CreateEventDetails";
import CreateEventImage from "./components/CreateEventImage";
import ChainOfEvents from "./components/ChainOfEvents";
import ChainOfEventsMobile from './components/ChainOfEventsMobile'
import EventDetails from "./components/EventDetails";
import EventDetailsMobile from './components/EventDetailsMobile'
import InfoMobile from './components/InfoMobile'

import logo from "./static/img/logo.png"
import about_icon from "./static/img/About_Icon.png"
import project_icon from "./static/img/Project_Icon.png"
import default_picture from "./static/img/event-picture.png"
import details_picture from "./static/img/details-picture.png"

import ABI from './components/abi/ABI'


function App() {
  //const { account, activate } = useWeb3React()
  const { address, connect, kit, getConnectedKit, performActions } = useContractKit();
  const APP_NODE = process.env.REACT_APP_NODE
  const APP_CONTRACT = process.env.REACT_APP_CONTRACT
  const contract = new kit.web3.eth.Contract(ABI, APP_CONTRACT)

  const [hostName, setHostName] = useState('')
  const [eventName, setEventName] = useState('')
  const [eventDescription, setEventDescription] = useState('')
  const [eventLineup, setEventLineup] = useState('')
  const [eventLocation, setEventLocation] = useState('')
  const [eventStreet, setEventStreet] = useState('')
  const [eventZip, setEventZip] = useState('')
  const [eventCity, setEventCity] = useState('')
  const [eventDate, setEventDate] = useState('')
  const [eventStartTime, setEventStartTime] = useState('')
  const [eventEndTime, setEventEndTime] = useState('')
  const [eventCapacity, setEventCapacity] = useState('')
  const [eventPrice, setEventPrice] = useState(0)
  const [eventImage, setEventImage] = useState(null)
  const [allEvents, setAllEvents] = useState([])
  const [searchResult, setSearchResult] = useState('')
  const [sortBy, setSortBy] = useState('')
  const [foundEvents, setFoundEvents] = useState([])
  const [eventComment, setEventComment] = useState('')
  const [ticketAmount, setTicketAmount] = useState(0)
/*
  async function handleConnect() {
    try {
      await activate(injected)
    } catch (ex) {
      console.log(ex)
    }
  }
*/
  const handleHostName = (childdata) => {
    setHostName({childdata});
  }
  const handleEventName = (childdata) => {
    setEventName({childdata});
  }
  const handleEventDescription = (childdata) => {
    setEventDescription({childdata});
  }
  const handleEventLineup = (childdata) => {
    setEventLineup({childdata});
  }
  const handleEventLocation = (childdata) => {
    setEventLocation({childdata});
  }
  const handleEventStreet = (childdata) => {
    setEventStreet({childdata});
  }
  const handleEventZip = (childdata) => {
    setEventZip({childdata});
  }
  const handleEventCity = (childdata) => {
    setEventCity({childdata});
  }
  const handleEventDate = (childdata) => {
    setEventDate({childdata});
  }
  const handleEventStartTime = (childdata) => {
    setEventStartTime({childdata});
  }
  const handleEventEndTime = (childdata) => {
    setEventEndTime({childdata});
  }
  const handleEventCapacity = (childdata) => {
    setEventCapacity({childdata});
  }
  const handleEventPrice = (childdata) => {
    setEventPrice({childdata});
  }
  const handleEventImage = (childdata) => {
    let reader = new FileReader()
    reader.readAsDataURL(childdata)

    reader.onload = () => {
      setEventImage(reader.result)
    }
    
  }
  const handleComment = (childdata) => {
    setEventComment({childdata})
  }
  const handleTicketAmount = (childdata) => {
    setTicketAmount({childdata})
  }

  const handleAddToken = () => {
    //addToken()
    connect()
  }

  async function addToken(){
    try {
      const APP_CONTRACT = process.env.REACT_APP_CONTRACT
      // wasAdded is a boolean. Like any RPC method, an error may be thrown.
      const wasAdded = await window.ethereum.request({
        method: 'wallet_watchAsset',
        params: {
          type: 'ERC20', // Initially only supports ERC20, but eventually more!
          options: {
            address: APP_CONTRACT, // The address that the token is at.
            symbol: 'TCKT', // A ticker symbol or shorthand, up to 5 chars.
            decimals: 0, // The number of decimals in the token
            image: 'https://yourdapp.com/yourlogo.png', // A string url of the token logo
          },
        },
      });
    
      if (wasAdded) {
        console.log('Thanks for your interest!');
      } else {
        console.log('Your loss!');
      }
    } catch (error) {
      console.log(error);
    }
  }

  const handleSaveData = () => {
    saveEvent();
  }

  function saveEvent(){
    fetch('/api/event/5', {
      method: "POST",
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify({ 
        hostName: hostName.childdata,
        name: eventName.childdata,
        description: eventDescription.childdata,
        lineup: eventLineup.childdata,
        locationName: eventLocation.childdata,
        street: eventStreet.childdata,
        zipCode: eventZip.childdata,
        city: eventCity.childdata,
        date: eventDate.childdata,
        start: eventStartTime.childdata,
        end: eventEndTime.childdata,
        capacity: eventCapacity.childdata,
        price: eventPrice.childdata,
        image: eventImage
      })
    })
    .then((response) => response.json()
    )
    .then((result) => {
      if(eventImage === null){
        fetch('/api/image/' + result.id, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' }
        })
        .then(response => response.json())
        .then(data => {loadData()})
      }else{
        loadData()
      }
      console.log(result.id + " " + eventName.childdata + " " + 0)
      fetch('/api/count/' + result.id, {
        method: "POST",
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify({ 
          id: result.id,
          name: eventName.childdata,
          value: 0
        })
      })
      .then((response) => response.json()
      )
      .then((result) => {
        window.location.reload(false);
      })
    })
  }

  const handleLoadData = () => {
    loadData()
  }

  function loadData(){
    fetch('/api/list/event').then(res => res.json()).then(data => {
      setAllEvents(data)
      const result = data.sort((a, b) => (a.id < b.id) ? 1 : -1)
      setFoundEvents(result)
    })
  }

  const handlePostComment = (childdata) => {
    if(eventComment  !== ''){
      postComment(childdata)
    }
  }
  
  const handleDeleteComment = (commentId, eventId) => {
    deleteComment(commentId, eventId)
  }

  function deleteComment(commentId, eventId){
    console.log(eventId)
    fetch('/api/comment/' + commentId.id, {
      method: "DELETE",
      headers: {
        'Content-type': 'application/json'
      }
    })
    .then((response) => response.json()
    )
    .then((result) => {
      window.location.reload(false);
    })
  }

  const handleDeleteEvent = (eventId) => {
    deleteEvent(eventId)
  }

  function deleteEvent(eventId){
    console.log(eventId)
    fetch('/api/event/' + eventId, {
      method: "DELETE",
      headers: {
        'Content-type': 'application/json'
      }
    })
    .then((response) => response.json()
    )
    .then((result) => {
      window.location.reload(false);
    })
  }

  function postComment(childdata){
    const day = new Date()
    fetch('/api/comment/' + childdata, {
      method: "POST",
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify({ 
        content: eventComment.childdata,
        date: day.toString(),
        event_id: childdata,
        username: address
      })
    })
    .then((response) => response.json()
    )
    .then((result) => {
      window.location.reload(false);
    })
  }

  const handleScrollTop = () => {
    window.scrollTo(0, 0)
  }

  const filter = (e) => {
    const keyword = e.target.value;

    if (keyword !== '') {
      const results = allEvents.filter((obj) => {
        return obj.name.toLowerCase().includes(keyword.toLowerCase()) || obj.lineup.toLowerCase().includes(keyword.toLowerCase()) || obj.description.toLowerCase().includes(keyword.toLowerCase());
      });
      setFoundEvents(results);
    } else {
      setFoundEvents(allEvents);
    }

    setSearchResult(keyword);
  };

  const handleSort = (e) => {
    const sortResult = e.target.value;
    let result = []
    setSortBy(sortResult)

    if(sortResult === "newestFirst"){
      result = foundEvents.sort((a, b) => (a.id < b.id) ? 1 : -1)
    }
    else if(sortResult === "oldestFFirst"){
      result = foundEvents.sort((a, b) => (a.id > b.id) ? 1 : -1)
    }
    else if(sortResult === "byName"){
      result = foundEvents.sort((a, b) => a.name > b.name ? 1 : -1)
    }
    setFoundEvents(result)
  }

  const awardTicket = async (event) => {
    let accounts = await kit.web3.eth.getAccounts()
    kit.defaultAccount = accounts[0]

    fetch('/api/count/' + event.id).then(res => res.json()).then(data => {
      handleTicketAmount(data.value)
    })

    if(accounts[0] != null) {
      await kit.getTotalBalance(accounts[0]).then((balance) => {
        if(balance.CELO.c[0] <= 0){
          console.log("NO MONEY")
          new RampInstantSDK({
            hostAppName: 'ACC.ETH',
            hostLogoUrl: 'https://yourdapp.com/yourlogo.png',
            swapAsset: 'CELO',
            userAddress: address,
            paymentMethodType: 'CARD_PAYMENT',
          }).on('*', event => console.log(event)).show();
        
        }
        else if(ticketAmount.childdata >= event.capacity){
          console.log("No Tickets Available")
        }
        else{
          contract.methods.awardTicket(address, "https://acceth.xyz/api/ticket/").send({from: address}).then((res) => {
            console.log(res)
            if(res) {
              contract.methods.awardTicket(address, "https://acceth.xyz/api/ticket/").call().then((id) => {
                fetch('/api/ticket/create/' + event.id + '/' + (id-1), {
                  method: "POST",
                  headers: {
                    'Content-type': 'application/json'
                  }
                }).then(res => res.json()).then(data => {
                  console.log(data)
                })

                fetch('/api/count/' + event.id, {
                  method: 'PUT',
                  headers: { 'Content-Type': 'application/json' }
                })
                .then(response => response.json())
                .then(data => {
                  console.log("You bought a ticket.")
                  window.location.reload(false)
                })
              })
            }else{
              console.log("ABORD MISSION")
            }
          })
        }
      })
    }else{
      connect()
    }
  };

  useEffect(() => {
    handleLoadData()
    setSortBy("newestFirst")
  }, [allEvents.length])

  useEffect(() =>{
    if(window.location.pathname !== '/' && address === null){
      //connect()
    }
    
  }, [address])
  
  return (
    <Router>
      <Switch>
        <Route path="/:path(|landing)">
          <BrowserView>
          {/* 
            <Landing 
              {...landingData}
              handleConnect={connect}
            />
            */}
            <Selection 
            host_Text="I'm a" 
            place="HOST" 
            guest_Text="I'm a" 
            guestbutton_Text="GUEST"
            handleLoadData={handleLoadData}
            account={address}
            handleConnect={connect}
          />
          </BrowserView>
          <MobileView>
            {/* 
            <LandingMobile {...landingMobileData} />
            */}
            <InfoMobile 
                
              />
          </MobileView>
        </Route>
        <Route path="/selection">
          <Selection 
            host_Text="I'm a" 
            place="HOST" 
            guest_Text="I'm a" 
            guestbutton_Text="GUEST"
            handleLoadData={handleLoadData}
            account={address}
            handleConnect={connect}
          />
        </Route>
        <Route path="/createevent-generalinformation">
          <CreateEventGeneralInformation
            pagetitel_General="General Information"
            nextbutton_Text="Next"
            hostName1Props={createEventGeneralInformationData.hostName1Props}
            hostName2Props={createEventGeneralInformationData.hostName2Props}
            hostName3Props={createEventGeneralInformationData.hostName3Props}
            hostName4Props={createEventGeneralInformationData.hostName4Props}
            handleHostName={handleHostName}
            handleEventName={handleEventName}
            handleEventDescription={handleEventDescription}
            handleEventLineup={handleEventLineup}
            hostName={hostName}
            eventName={eventName}
            eventDescription={eventDescription}
            eventLineup={eventLineup}
          />
        </Route>
        <Route path="/createevent-location">
          <CreateEventLocation 
            {...createEventLocationData}
            handleEventLocation={handleEventLocation}
            handleEventStreet={handleEventStreet}
            handleEventZip={handleEventZip}
            handleEventCity={handleEventCity}
            eventLocation={eventLocation}
            eventStreet={eventStreet}
            eventZip={eventZip}
            eventCity={eventCity}
          />
        </Route>
        <Route path="/createevent-details">
          <CreateEventDetails 
            {...createEventDetailsData} 
            handleEventDate={handleEventDate}
            handleEventStartTime={handleEventStartTime}
            handleEventEndTime={handleEventEndTime}
            handleEventCapacity={handleEventCapacity}
            handleEventPrice={handleEventPrice}
            eventDate={eventDate}
            eventStartTime={eventStartTime}
            eventEndTime={eventEndTime}
            eventCapacity={eventCapacity}
            eventPrice={eventPrice}
            />
        </Route>
        <Route path="/createevent-image">
          <CreateEventImage
            pagetitel_Image="Image"
            dropimage_Text={
              <>
                Drop image here
                <br />
                Or
              </>
            }
            uploadbutton_Text="Upload"
            donebutton_Text="DONE"
            handleEventImage={handleEventImage}
            eventImage={eventImage}
            handleSaveData={handleSaveData}
            handleLoadData={handleLoadData}
          />
        </Route>
        <Route path="/chainofevents">
          <BrowserView>
            <ChainOfEvents
              {...chainOfEventsData}
              default_picture={default_picture}
              handleLoadData={handleLoadData}
              allEvents={foundEvents}
              searchResult={searchResult}
              filter={filter}
              handleScrollTop={handleScrollTop}
              sortBy={sortBy}
              handleSort={handleSort}
              account={address}
              handleConnect={connect}
              handleAddToken={handleAddToken}
              handleDeleteEvent={handleDeleteEvent}
            />
          </BrowserView>
          <MobileView>
            <ChainOfEventsMobile 
                {...chainOfEventsData}
                default_picture={default_picture}
                handleLoadData={handleLoadData}
                allEvents={foundEvents}
                searchResult={searchResult}
                filter={filter}
                handleScrollTop={handleScrollTop}
                sortBy={sortBy}
                handleSort={handleSort}
                account={address}
                handleConnect={connect}
                handleAddToken={handleAddToken}
              />
          </MobileView>
        </Route>
        <Route path="/eventdetails">
          <BrowserView>
            <EventDetails 
            {...eventDetailsData}
            details_picture={details_picture}
            account={address}
            handleConnect={connect}
            handlePostComment={handlePostComment}
            handleComment={handleComment}
            eventComment={eventComment}
            handleBuyTicket={awardTicket}
            handleTicketAmount={handleTicketAmount}
            handleAddToken={handleAddToken}
            handleDeleteComment={handleDeleteComment}
            />
          </BrowserView>
          <MobileView>
            <EventDetailsMobile
            {...eventDetailsData}
            details_picture={details_picture}
            account={address}
            handleConnect={connect}
            handlePostComment={handlePostComment}
            handleComment={handleComment}
            eventComment={eventComment}
            handleBuyTicket={awardTicket}
            handleTicketAmount={handleTicketAmount}
            handleAddToken={handleAddToken}
            />
          </MobileView>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
const landingData = {
    banner_Text: "Test the Project NOW (connect)",
    logo: logo,
    about_Text: "Who we are",
    pfad5: about_icon,
    abouttext_Text: "Developing software Made in Germany since 2015, the Make Europe GmbH is among the leading pioneers in the fields DLT, Blockchain, EVM, Metaverse-Technology, Web3 as well as Online Payments and Online Brokerage.",
    pfad4: project_icon,
    project_Text: "The Project",
    projecttext_Text: "We are launching Acc.eth – reclaiming culture. The Acc.Eth DAO It is a decentralised Application that is there to kickstart the event economy once the battle on the virus is won: We want to allow communities to buy event tickets wholesale and manage the event risk in a secure and fan-friendly way. We hope to inspire a decentralised network of evergrowing user content around the world.",
    cta_Text1: "Want to join the project, test, hack or just give feedback?",
    cta_Button_Text: "CONNECT",
    cta_Text2: "Or just mail us:",
    cta_Mail: "roman (ä) make-europe.com",
};

const landingMobileData = {
    banner_Text: "Test the Project NOW (click here)",
    logo: logo,
    reclaimingCulture: <>Reclaiming<br />Culture</>,
    about_Text: "Who we are",
    pfad5: about_icon,
    abouttext_Text: "Developing software Made in Germany since 2015, the Make Europe GmbH is among the leading pioneers in the fields DLT, Blockchain, EVM, Metaverse-Technology, Web3 as well as Online Payments and Online Brokerage.",
    pfad4: "/img/pfad-4@1x.png",
    project_Text: "The Project",
    projecttext_Text: "We are launching Acc.eth – reclaiming culture. The Acc.Eth DAO It is a decentralised Application that is there to kickstart the event economy once the battle on the virus is won: We want to allow communities to buy event tickets wholesale and manage the event risk in a secure and fan-friendly way. We hope to inspire a decentralised network of evergrowing user content around the world.",
    cta_Text1: <>Want to join the project, test, hack <br />or just give feedback?</>,
    cta_Button_Text: "Try NOW",
    cta_Text2: "Or just mail us:",
    cta_Mail: "roman (ä) make-europe.com",
};

const hostName1Data = {
  inputPlaceholder: "Host Name",
};

const hostName2Data = {
  inputPlaceholder: "Event Name",
  className: "event-name",
};

const hostName3Data = {
  inputPlaceholder: "Event Description",
  className: "event-2",
};

const hostName4Data = {
  inputPlaceholder: "Event Lineup",
  className: "event-1",
};

const createEventGeneralInformationData = {
  hostName1Props: hostName1Data,
  hostName2Props: hostName2Data,
  hostName3Props: hostName3Data,
  hostName4Props: hostName4Data,
};

const hostName5Data = {
  inputPlaceholder: "Location Name",
};

const hostName6Data = {
  inputPlaceholder: "Street",
  className: "street-name",
};

const createEventLocationData = {
  pagetitel_Location: "Location Information",
  inputType1: "text",
  inputPlaceholder1: "ZIP",
  inputType2: "text",
  inputPlaceholder2: "City",
  nextbutton2_Text: "Next",
  hostName1Props: hostName5Data,
  hostName2Props: hostName6Data,
};

const hostName7Data = {
  inputPlaceholder: "Event Date",
};

const hostName8Data = {
  inputPlaceholder: "Capacity",
  className: "capacity",
};

const hostName9Data = {
  inputPlaceholder: "Price",
  className: "price",
};

const createEventDetailsData = {
  pagetitel_Detail: "Detail Information",
  inputType1: "text",
  inputPlaceholder1: "Start Time",
  inputType2: "text",
  inputPlaceholder2: "End Time",
  nextbutton3_Text: "Next",
  hostName1Props: hostName7Data,
  hostName2Props: hostName8Data,
  hostName3Props: hostName9Data,
};

const gruppe52Data = {
  className: "gruppe-5",
};

const gruppe53Data = {
  className: "gruppe-5",
};

const gruppe54Data = {
  className: "gruppe-5",
};

const gruppe55Data = {
  className: "gruppe-5",
};

const chainOfEventsData = {
  chainofevents_Titel: "Available to you",
  inputType: "text",
  inputPlaceholder: "Search",
  sort_Text: "Sort by Date",
  gruppe51Props: gruppe52Data,
  gruppe52Props: gruppe53Data,
  gruppe53Props: gruppe54Data,
  gruppe54Props: gruppe55Data,
};

const eventDetailsData = {
  details_Titel: "Festival 2022",
  detailspanel_Host_Titel: "Host:",
  detailspanel_Host_Text: "Sommerschein",
  detailspanel_Date_Titel: "Date:",
  detailspanel_Date_Text: "18.09.2022",
  detailspanel_Start_Titel: "Start:",
  detailspanel_Start_Text: "08:00",
  detailspanel_End_Titel: "End:",
  detailspanel_End_Text: "23:55",
  detailspanel_Location_Titel: "Location:",
  detailspanel_Location_Text: "Sportpark Heide",
  detailspanel_City_Titel: "City:",
  detailspanel_City_Ziptext: "65719",
  detailspanel_City_Text1: "Hofheim am Taunus",
  detailspanel_Street_Titel: "Street:",
  detailspanel_City_Text2: "An der Heide 15",
  lineuppanel_Titel: "Lineup:",
  lineuppanel_Text: "ParA-DogX, JaJa, The Morning Pints",
  informationpanel_Titel: "Information:",
  informationpanel_Text: "Das Sommerschein-Team freut sich dieses Jahr wieder ein Festival für euch zu organisieren.",
  buyticket_Text: "Buy your ticket directly from the event host",
  ticketpanel_Category_Titel: "Category:",
  ticketpanel_Category_Text: "Standard Ticket",
  ticketpanel_Capacity_Titel: "Capacity:",
  ticketpanel_Capacity_Current_Text: "1982",
  ticketpanel_Capacity_Total_Text: "/ 5000",
  ticketpanel_Expiry_Titel: "Expiry Date:",
  ticketpanel_Expiry_Text: "18.09.2022 23:55",
  ticketpanel_Price_Titel: "Price:",
  ticketpanel_Price_Text: "20 CELO",
};