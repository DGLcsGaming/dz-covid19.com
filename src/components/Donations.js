import React, { useEffect, useState, Fragment } from "react";
import { useTranslation } from "react-i18next";
import Modal from "react-modal";
import { useCookies } from "react-cookie";
Modal.setAppElement("#root");

const Donations = (props) => {
  const [cookies, setCookie] = useCookies(["donations"]);
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
    if (!cookies.donations) {
      setTimeout(() => {
        setModalIsOpen(true);
        let d = new Date();
        d.setTime(d.getTime() + 24 * 3600 * 1000);
        setCookie("donations", "1", {
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
        contentLabel="Donation"
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
          <p style={{ display: "flex", flexDirection: "column" }} className="justify">
            {t("Donations.Description")} <br />
            <span style={{ alignSelf: "center", fontWeight: "600", marginTop: ".5em" }}>{t("Donations.Thanks")}</span>
          </p>
          <div className="modalDonationsContainer">
            <div className="CCP">
              <img src={`${process.env.PUBLIC_URL}/img/CCP.png`} />
              <img src={`${process.env.PUBLIC_URL}/img/baridimob.png`} />
            </div>
            <table className="table table-striped">
              <thead>
                <tr>
                  <th scope="col" colSpan="2">
                    CCP / EDAHABIA
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">{t("Donations.CCP_RIP_TITLE")}</th>
                  <td>{t("Donations.CCP_RIP_VALUE")}</td>
                </tr>
                <tr>
                  <th scope="row">{t("Donations.CCP_NUMKEY_TITLE")}</th>
                  <td>{t("Donations.CCP_NUMKEY_VALUE")}</td>
                </tr>
                <tr>
                  <th scope="row">{t("Donations.CCP_NAME_TITLE")}</th>
                  <td>{t("Donations.CCP_NAME_VALUE")}</td>
                </tr>
                <tr>
                  <th scope="row">{t("Donations.CCP_LASTNAME_TITLE")}</th>
                  <td>{t("Donations.CCP_LASTNAME_VALUE")}</td>
                </tr>
              </tbody>
            </table>
            {/*  <img className="paypal-image" src={`${process.env.PUBLIC_URL}/img/paypal.png`} />
            <div className="paypal">
              <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_blank">
                <input type="hidden" name="cmd" value="_donations" />
                <input type="hidden" name="business" value="med.l.red@me.com" />
                <input type="hidden" name="currency_code" value="EUR" />
                <input
                  type="image"
                  src="https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif"
                  border="0"
                  name="submit"
                  title="PayPal - The safer, easier way to pay online!"
                  alt="Donate with PayPal button"
                />
                <img alt="" border="0" src="https://www.paypal.com/en_US/i/scr/pixel.gif" width="1" height="1" />
              </form>
            </div> */}
          </div>
          <div className="modalButtonsContainer">
            <button className="yes" onClick={() => setModalIsOpen(false)}>
              {t("Donations.Close")}
            </button>
          </div>
        </div>
      </Modal>
      <div dir={isArabic ? "rtl" : "ltr"} className="donations-container" onClick={() => setModalIsOpen(true)}>
        <span className="donations-text">{t("Donations.donatenow")}</span>
      </div>
    </div>
  );
};

export default Donations;
