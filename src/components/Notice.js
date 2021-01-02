import React, { useEffect, useState, Fragment } from "react";
import { useTranslation } from "react-i18next";
import Modal from "react-modal";
import { useCookies } from "react-cookie";
import { ReactComponent as Sihhatech } from "../Icons/Sihhatech.svg";
import ReactGA from "react-ga";
Modal.setAppElement("#root");

const Notice = (props) => {
  const [cookies, setCookie] = useCookies(["notice"]);
  const { t, i18n } = useTranslation();
  const [isArabic, setIsArabic] = useState(true);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  useEffect(() => {
    i18n.on("languageChanged", (lng) => {
      if (lng === "Ar") {
        setIsArabic(true);
      } else {
        setIsArabic(false);
      }
    });
    return () => {
      i18n.off();
    };
  });
  useEffect(() => {
    if (!cookies.notice) {
      setTimeout(() => {
        setModalIsOpen(true);
        let d = new Date();
        d.setTime(d.getTime() + 15 * 24 * 3600 * 1000);
        setCookie("notice", "1", {
          path: "/",
          expires: d,
          sameSite: "lax",
        });
      }, 5000);
    }
  }, []);
  return (
    <div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        contentLabel="Notice"
        style={{
          overlay: {
            backgroundColor: "rgba(0, 0, 0, 0.75)",
            zIndex: 99999,
          },
          content: {
            top: "50%",
            left: "50%",
            right: "auto",
            bottom: "auto",
            marginRight: "-50%",
            transform: "translate(-50%, -50%)",
            maxWidth: "400px",
          },
        }}>
        <div className={isArabic ? "notificationModalContent arabic" : "notificationModalContent nonarabic"} dir={isArabic ? "rtl" : "ltr"}>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <Sihhatech />
          </div>
          <p style={{}} className="justify">
            {t("Notice.Description")} <br />
            {t("Notice.Description2")}
          </p>
          <div className="modalButtonsContainer">
            <ReactGA.OutboundLink
              className="yes"
              eventLabel="SihhaTech"
              to="https://sihhatech.com/etablissements?name=&speciality=0&telemedicine=1&wilaya=0&commune=0&service=0"
              target="_blank">
              <span className="github-icon"></span>
              {t("Notice.VisitGithub")}
            </ReactGA.OutboundLink>
            <a href="#" onClick={() => setModalIsOpen(false)}>
              <span style={{ alignSelf: "center" }}>{t("Notice.Close")}</span>
            </a>
          </div>
        </div>
      </Modal>
      <div dir={isArabic ? "rtl" : "ltr"} className="donations-container" onClick={() => setModalIsOpen(true)}>
        <span className="donations-text">
          <span className="github-icon" style={{ margin: "0px 5px 0px 0px" }}></span> {t("Notice.SourceCode")}
        </span>
      </div>
    </div>
  );
};

export default Notice;
