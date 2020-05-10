import React, { useEffect, useState, Fragment } from "react";
import { useTranslation } from "react-i18next";
import Modal from "react-modal";
import { useCookies } from "react-cookie";
import { ReactComponent as Sihhatech } from "../Icons/Sihhatech.svg";
Modal.setAppElement("#root");

const Doctor = (props) => {
  const [cookies, setCookie] = useCookies(["doctor"]);
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
    if (!cookies.doctor) {
      setTimeout(() => {
        setModalIsOpen(true);
        let d = new Date();
        d.setTime(d.getTime() + 24 * 3600 * 1000);
        setCookie("doctor", "1", {
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
        contentLabel="Doctor"
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
            {t("Doctor.Description")} <strong>{t("Doctor.Free")}</strong> {t("Doctor.Description2")}
          </p>
          <div className="modalButtonsContainer">
            <a
              className="yes"
              href="https://sihhatech.com/etablissements?name=&speciality=0&telemedicine=1&wilaya=0&commune=0&service=0"
              target="_blank">
              {t("Doctor.VisitWebsite")}
            </a>
            <a href="#" onClick={() => setModalIsOpen(false)}>
              <span style={{ alignSelf: "center" }}>{t("Doctor.Close")}</span>
            </a>
          </div>
        </div>
      </Modal>
      <div dir={isArabic ? "rtl" : "ltr"} className="donations-container" onClick={() => setModalIsOpen(true)}>
        <span className="donations-text">{t("Doctor.ConsultNow")}</span>
      </div>
    </div>
  );
};

export default Doctor;
