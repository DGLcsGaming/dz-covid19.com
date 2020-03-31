import React, { useState, useEffect, useMemo, Fragment } from "react";
import "./odometer-theme-default.css";
import "./App.css";
import "./flickity.css";
import Header from "./components/Header";
import NavDrawer from "./components/NavDrawer";
import CountryTab from "./components/CountryTab";
import MyMap from "./components/MyMap";
import { wilayasContext } from "./contexts/wilayasContext";
import { currentStatsContext } from "./contexts/currentStatsContext";
import { dailyStatsContext } from "./contexts/dailyStatsContext";
import { globalContext } from "./contexts/globalContext";
import useWindowDimensions from "./hooks/useWindowDimensions";
import openSocket from "socket.io-client";
import { CookiesProvider } from "react-cookie";
import { useCookies } from "react-cookie";
import usePushNotifications from "./hooks/usePushNotifications";
import Modal from "react-modal";
import GetNotifiedButton from "./components/GetNotifiedButton";
import { ReactComponent as Bell } from "./Icons/Bell.svg";

Modal.setAppElement("#root");

const socket =
  process.env.NODE_ENV === "production"
    ? openSocket("./")
    : openSocket("http://localhost:4000", { path: "/api" });

function App() {
  const [globalState, setGlobalState] = useState({
    selectedWilayaId: null
  });
  const [cookies, setCookie, removeCookie] = useCookies(["push_subscription"]);

  const [width, height] = useWindowDimensions();
  const [currentStats, setCurrentStats] = useState(null);
  const [dailyStats, setDailyStats] = useState(null);
  const [wilayas, setWilayas] = useState(null);
  const [isServerDown, setIsServerDown] = useState(false);
  const [navDrawerVisible, setNavDrawerVisible] = useState({
    opacity: 0,
    display: "none"
  });
  const [modalIsOpen, setModalIsOpen] = useState(false);
  // Push Notifications
  const {
    userConsent,
    pushNotificationSupported,
    userSubscription,
    onClickAskUserPermission,
    onClickSusbribeToPushNotification,
    onClickSendSubscriptionToPushServer,
    pushServerSubscriptionId,
    onClickSendNotification,
    error,
    loading,
    updateSubscription
  } = usePushNotifications();
  const isConsentGranted = userConsent === "granted";

  const navTogglerClick = () => {
    if (navDrawerVisible.display === "none") {
      setNavDrawerVisible({ opacity: 0, display: "block" });
      setTimeout(() => {
        setNavDrawerVisible({ display: "block", opacity: 1 });
      }, 10);
    } else {
      setNavDrawerVisible({ display: "block", opacity: 0 });
      setTimeout(() => {
        setNavDrawerVisible({ opacity: 0, display: "none" });
      }, 300);
    }
  };

  const hideBackDrop = () => {
    setNavDrawerVisible({ display: "block", opacity: 0 });
    setTimeout(() => {
      setNavDrawerVisible({ opacity: 0, display: "none" });
    }, 300);
  };

  socket.io.on("connect_error", function() {
    console.log("Error connecting to Socket.io server");
    setIsServerDown(true);
  });
  socket.on("connect", function() {
    console.log("Connected to Socket.io server");
    setIsServerDown(false);
  });

  useEffect(() => {
    socket.on("currentStats", data => {
      console.log("CurrentStats Loaded!", new Date(Date.now()).toISOString());
      setCurrentStats(data);
    });
    socket.on("dailyStats", data => {
      console.log("Daily Loaded!", new Date(Date.now()).toISOString());
      setDailyStats(data);
    });
    socket.on("wilayas", data => {
      console.log("Wilayas Loaded!", new Date(Date.now()).toISOString());
      setWilayas(data);
    });
    socket.on("clientscount", data => {
      console.log("Clients Online: " + data);
    });
  }, []);

  const handleSubscribeButtonYes = () => {
    onClickAskUserPermission();
  };
  useEffect(() => {
    if (loading || (Object.keys(cookies).length !== 0 && userSubscription))
      return;

    if (Object.keys(cookies).length !== 0 && !userSubscription) {
      //Subscription expired, refresh!
      console.log("Registration Expired!");
      updateSubscription(cookies.push_subscription);
      removeCookie("push_subscription");
      return;
    }

    if (isConsentGranted) {
      if (userSubscription) {
        if (pushServerSubscriptionId) {
          let d = new Date();
          d.setTime(d.getTime() + 365 * 24 * 3600 * 1000);
          setCookie("push_subscription", pushServerSubscriptionId, {
            path: "/",
            expires: d,
            sameSite: "lax"
          });
          console.log(
            "You can send Push notifications now!: " + pushServerSubscriptionId
          );
        } else {
          console.log("onClickSendSubscriptionToPushServer()..");
          onClickSendSubscriptionToPushServer();
        }
      } else {
        console.log("onClickSusbribeToPushNotification()..");
        onClickSusbribeToPushNotification();
      }
    }
  }, [
    cookies,
    loading,
    isConsentGranted,
    userSubscription,
    pushServerSubscriptionId
  ]);

  var content;

  if (!isServerDown) {
    content = (
      <CookiesProvider>
        <div className="App">
          <globalContext.Provider value={[globalState, setGlobalState]}>
            <currentStatsContext.Provider
              value={[currentStats, setCurrentStats]}>
              <dailyStatsContext.Provider value={[dailyStats, setDailyStats]}>
                <wilayasContext.Provider value={[wilayas, setWilayas]}>
                  <div className={width >= 800 ? "desktop" : "mobile"}>
                    <div
                      className="content"
                      style={
                        navDrawerVisible.display === "block"
                          ? { overflowY: "hidden" }
                          : { overflowY: "auto" }
                      }>
                      <CountryTab />
                      <MyMap />
                    </div>
                    <GetNotifiedButton
                      click={() => setModalIsOpen(true)}
                      style={
                        userSubscription && Object.keys(cookies).length !== 0
                          ? { display: "none" }
                          : { display: "block" }
                      }
                    />
                    <Modal
                      isOpen={modalIsOpen}
                      onRequestClose={() => setModalIsOpen(false)}
                      style={{
                        overlay: {
                          backgroundColor: "rgba(0, 0, 0, 0.75)",
                          zIndex: 99999
                        },
                        content: {
                          top: "25%",
                          left: "50%",
                          right: "auto",
                          bottom: "auto",
                          marginRight: "-50%",
                          transform: "translate(-50%, -50%)"
                        }
                      }}
                      contentLabel="Example Modal">
                      {pushServerSubscriptionId &&
                      Object.keys(cookies).length !== 0 ? (
                        <p>Thanks for subscribing!</p>
                      ) : (
                        <div className="notificationModalContent">
                          <div
                            style={{
                              display: "flex",
                              justifyContent: "center"
                            }}>
                            <Bell
                              height="25px"
                              width="25px"
                              style={{
                                fill: "#38a169",
                                margin: "0 auto"
                              }}
                            />
                          </div>
                          <p>
                            Do you want to recieve notifications about daily
                            statistics?
                          </p>
                          <div className="modalButtonsContainer">
                            <button
                              className="yes"
                              onClick={handleSubscribeButtonYes}>
                              <Bell
                                width="15px"
                                height="15px"
                                style={{ fill: "#fff" }}
                              />{" "}
                              &nbsp; Yes
                            </button>
                            <button
                              className="no"
                              onClick={() => setModalIsOpen(false)}>
                              No
                            </button>
                          </div>
                        </div>
                      )}
                    </Modal>
                    <NavDrawer
                      visible={navDrawerVisible}
                      click={hideBackDrop}
                    />
                    <Header />
                    <button
                      className="navbar-toggler"
                      type="button"
                      onClick={navTogglerClick}>
                      <span className="navbar-toggler-icon"></span>
                    </button>
                  </div>
                </wilayasContext.Provider>
              </dailyStatsContext.Provider>
            </currentStatsContext.Provider>
          </globalContext.Provider>
        </div>
      </CookiesProvider>
    );
  } else if (isServerDown) {
    content = <h1>Server is Offline</h1>;
  } else {
    content = <h1> Loading .. </h1>;
  }

  return content;
}

export default App;
/*
        <currentStatsContext.Provider value={[currentStats, setCurrentStats]}>
          <dailyStatsContext.Provider value={[dailyStats, setDailyStats]}>
            <wilayasContext.Provider value={[wilayas, setWilayas]}>
              <div className="desktop">
                <div className="content">
                  <CountryTab />
                  <MyMap />
                </div>
                <Header />
              </div>
            </wilayasContext.Provider>
          </dailyStatsContext.Provider>
        </currentStatsContext.Provider>
        */
