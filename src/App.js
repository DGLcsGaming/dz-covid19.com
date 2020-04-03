import React, { useState, useEffect, useMemo, Fragment, Suspense } from "react";
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
import { useTranslation } from "react-i18next";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Disclaimer from "./components/Disclaimer";
import Faq from "./components/Faq";
import "./material-expansion-panel.min.css";
import Advices from "./components/Advices";
Modal.setAppElement("#root");

const socket =
  process.env.NODE_ENV === "production"
    ? openSocket("https://dz-covid19.com", { path: "/ws" })
    : openSocket("http://localhost:4001", { path: "/ws" });

function App() {
  const { t, i18n } = useTranslation();
  const [isArabic, setIsArabic] = useState(true);
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
  const isMobile = width < 800;

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

  useEffect(() => {
    socket.io.on("connect_error", function() {
      console.log("Error connecting to Socket.io server");
      setIsServerDown(true);
    });
    socket.on("connect", function() {
      console.log("Connected to Socket.io server");
      setIsServerDown(false);
    });
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
    i18n.on("languageChanged", lng => {
      if (lng === "Ar") {
        setIsArabic(true);
      } else {
        setIsArabic(false);
      }
    });
    return () => {
      socket.io.off("connect_error");
      socket.off("connect");
      socket.off("currentStats");
      socket.off("dailyStats");
      socket.off("wilayas");
      socket.off("clientscount");
      i18n.off("languageChanged");
    };
  }, []);

  const handleSubscribeButtonYes = () => {
    onClickAskUserPermission();
  };
  useEffect(() => {
    if (!pushNotificationSupported) return;
    if (loading || (cookies.push_subscription && userSubscription)) return;

    if (cookies.push_subscription && !userSubscription) {
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
          console.log("You can send Push notifications now!: " + pushServerSubscriptionId);
        } else {
          console.log("onClickSendSubscriptionToPushServer()..");
          onClickSendSubscriptionToPushServer();
        }
      } else {
        console.log("onClickSusbribeToPushNotification()..");
        onClickSusbribeToPushNotification();
      }
    }
  }, [cookies, loading, isConsentGranted, userSubscription, pushServerSubscriptionId]);

  var content;

  if (!isServerDown) {
    content = (
      <CookiesProvider>
        <Router>
          <div className={isArabic ? "App arabic" : "App nonarabic"}>
            <globalContext.Provider value={[globalState, setGlobalState]}>
              <currentStatsContext.Provider value={[currentStats, setCurrentStats]}>
                <dailyStatsContext.Provider value={[dailyStats, setDailyStats]}>
                  <wilayasContext.Provider value={[wilayas, setWilayas]}>
                    <div className={!isMobile ? "desktop" : "mobile"}>
                      <div className="content" style={navDrawerVisible.display === "block" ? { overflowY: "hidden" } : { overflowY: "auto" }}>
                        {isMobile ? (
                          <Switch>
                            <Route path="/" exact>
                              <CountryTab />
                              <MyMap />
                            </Route>
                            <Route path="/disclaimer" exact>
                              <CountryTab style={{ display: "none" }} />
                              <Disclaimer />
                            </Route>
                            <Route path="/faq" exact>
                              <CountryTab style={{ display: "none" }} />
                              <Faq />
                            </Route>
                            <Route path="/advices" exact>
                              <CountryTab style={{ display: "none" }} />
                              <Advices />
                            </Route>
                          </Switch>
                        ) : (
                          <Switch>
                            <Route path="/" exact>
                              <CountryTab />
                              <MyMap />
                            </Route>
                            <Route path="/disclaimer" exact>
                              <CountryTab />
                              <Disclaimer />
                            </Route>
                            <Route path="/faq" exact>
                              <CountryTab />
                              <Faq />
                            </Route>
                            <Route path="/advices" exact>
                              <CountryTab />
                              <Advices style={{ fontSize: "-10%" }} />
                            </Route>
                          </Switch>
                        )}
                      </div>
                      <GetNotifiedButton
                        click={() => setModalIsOpen(true)}
                        style={
                          !pushNotificationSupported || (userSubscription && cookies.push_subscription) ? { display: "none" } : { display: "block" }
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
                        contentLabel="Notification">
                        {pushServerSubscriptionId && cookies.push_subscription ? (
                          <p>{t("Subscription.Thanks")}</p>
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
                            <p>{t("Subscription.Question")}</p>
                            <div className="modalButtonsContainer">
                              <button className="yes" onClick={handleSubscribeButtonYes}>
                                <Bell width="15px" height="15px" style={{ fill: "#fff" }} /> &nbsp; Yes
                              </button>
                              <button className="no" onClick={() => setModalIsOpen(false)}>
                                No
                              </button>
                            </div>
                          </div>
                        )}
                      </Modal>
                      <NavDrawer visible={navDrawerVisible} click={hideBackDrop} />
                      <Header />
                      <button className="navbar-toggler" type="button" onClick={navTogglerClick}>
                        <span className="navbar-toggler-icon"></span>
                      </button>
                    </div>
                  </wilayasContext.Provider>
                </dailyStatsContext.Provider>
              </currentStatsContext.Provider>
            </globalContext.Provider>
          </div>
        </Router>
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
