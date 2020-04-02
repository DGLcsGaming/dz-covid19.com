import React, { useEffect, useState, useRef } from "react";
import { useTranslation } from "react-i18next";
import FaqItem from "./FaqItem";

const Faq = props => {
  var openFaqs = [];
  const { t, i18n } = useTranslation();
  const [arr, setArr] = useState(t("Faq", { returnObjects: true }));
  useEffect(() => {
    i18n.on("languageChanged", lng => {
      if (t("Faq", { returnObjects: true })) setArr(t("Faq", { returnObjects: true }));
    });
    return () => {
      i18n.off("languageChanged");
    };
  }, []);
  const handleClick = e => {
    if (e.target.className.includes("faq-container")) {
      // Clicked outside FaqItem
      openFaqs.forEach(faq => faq.close());
    }
  };

  return (
    <div className="faq-container rtl" onClick={e => handleClick(e)}>
      <h3 className="disclaimer-header">الأسئلة الشائعة</h3>
      <br />
      {Array.isArray(arr) && arr.map((value, idx) => <FaqItem ref={ref => openFaqs.push(ref)} key={idx} title={value.Title} text={value.Text} />)}
    </div>
  );
};

export default Faq;
