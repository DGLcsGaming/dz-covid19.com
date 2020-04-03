import React from "react";
import "../advices.css";
import { useTranslation } from "react-i18next";

const Advices = props => {
  const { t } = useTranslation();
  return (
    <main dir="rtl" className="mainContainer w-full max-w-screen-xl mx-auto py-6 md:flex-1 md:overflow-x-hidden">
      <div className="container p-5">
        <div className="Flow">
          <div className="Flow-Heading">
            <h2 className="Flow-Heading-Title">{t("Advices.Flow-Heading-Title")}</h2>
          </div>
          <div>
            <div className="only-pc">
              <div className="FlowCard_3NwfR">
                <h3>{t("Advices.FlowCard_3NwfR")}</h3>
                <div className="Outer_2sXgv OuterUpper_3DvDM">
                  <div className="CardBlock_1oXUz Past_2t-T3">
                    <section className="Flow_2pc4c">
                      <div className="FlowHeading_1iS7c">
                        <span>
                          <span place="past" className="FlowLText_5lR_B">
                            {t("Advices.FlowLText_5lR_B")}
                          </span>
                          {t("Advices.FlowLText_5lR_B_span")}
                        </span>
                      </div>
                      <div className="FlowInner_1AINm">
                        <div className="FlowItem_e2l-B">
                          <strong className="FlowTitle_c_l5x">{t("Advices.FlowTitle_c_l5x")}</strong>
                          <span className="FlowPerson_3iKvi">
                            {t("Advices.FlowPerson_3iKvi_1")} &nbsp;
                            <em place="closeContact" className="FlowLine___Ybi">
                              {t("Advices.FlowPerson_3iKvi_2")}
                            </em>
                          </span>
                        </div>
                        <div className="FlowItem_e2l-B">
                          <span className="FlowPerson_3iKvi FlowPersonS_1J6AJ">
                            {t("Advices.FlowPersonS_1J6AJ_1")} &nbsp;
                            <em place="area" className="FlowLine___Ybi">
                              {t("Advices.FlowPersonS_1J6AJ_1_area")}
                            </em>
                          </span>
                          <span className="FlowPerson_3iKvi FlowPersonS_1J6AJ">
                            {t("Advices.FlowPersonS_1J6AJ_2")} &nbsp;
                            <em place="inCloseContact" className="FlowLine___Ybi">
                              {t("Advices.inCloseContact")}
                            </em>
                            &nbsp;{t("Advices.inCloseContact_em")}
                          </span>
                        </div>
                        <div className="FlowCondition_J9LTg">
                          <em className="FlowSymptom_28_SY">
                            {t("Advices.FlowSymptom_28_SY_1")}
                            <img src="/img/flow/check_circle-24px.svg" aria-hidden="true" className="FlowSymptomIcon_qyVsA" />
                          </em>

                          <span className="FlowText_1_qsH">{t("Advices.Or")}</span>
                          <em className="FlowSymptom_28_SY">
                            {t("Advices.FlowSymptom_28_SY_2")}
                            <img src="/img/flow/check_circle-24px.svg" aria-hidden="true" className="FlowSymptomIcon_qyVsA" />
                          </em>

                          <span className="FlowText_1_qsH">{t("Advices.And")}</span>
                          <em className="FlowSymptom_28_SY">
                            <span className="FlowTextSm_hBW5Y">
                              {t("Advices.FlowSymptom_28_SY_3")} &nbsp;
                              <span place="temperature">
                                {t("Advices.FlowTextSm_hBW5Y_temperature")}
                                <span place="tempNum" className="FlowTemperature_1OgU-">
                                  {t("Advices.FlowTextSm_hBW5Y_tempNum")}
                                </span>
                              </span>
                            </span>
                            <img src="/img/flow/check_circle-24px.svg" aria-hidden="true" className="FlowSymptomIcon_qyVsA" />
                          </em>
                        </div>
                      </div>
                    </section>
                  </div>
                  <div className="CardBlock_1oXUz Days_HXFqw">
                    <div className="Flow_2BS95">
                      <div className="FlowRow_iP_e1">
                        <div className="FlowRowRowThree_1ww7o">
                          <p>
                            <img src="/img/flow/accessibility-24px.svg" aria-hidden="true" className="FlowRowRowThreeGeneralIcon_1d7xH" />
                            {t("Advices.FlowRowRowThreeGeneralIcon_1d7xH")}
                          </p>
                        </div>
                        <div>
                          <p>
                            <span>
                              {t("Advices.FlowRowRowThreeGeneralIcon_1d7xH_span")} &nbsp;
                              <span place="duration" className="FlowRowEmphasis_2piQf">
                                <span place="day" className="FlowRowEmphasisDay_2yVbW">
                                  4
                                </span>{" "}
                                {t("Advices.FlowRowEmphasisDay_2yVbW_day")}
                              </span>
                            </span>
                          </p>
                        </div>
                      </div>
                      <div className="FlowRow_iP_e1 FlowRowRowCheck_3JRDZ">
                        <div className="FlowRowCondition_kaBsY">
                          <p>
                            <span className="FlowRowConditionSmall_i3om-">
                              {t("Advices.FlowRowConditionSmall_i3om-1")} &nbsp;
                              <span place="cold" className="FlowRowConditionLarge_15_WW">
                                {t("Advices.FlowRowConditionLarge_15_WW-cold")}
                              </span>
                            </span>
                          </p>
                          <img src="/img/flow/check_circle-24px.svg" aria-hidden="true" className="FlowRowConditionIcon_1alQe" />
                        </div>

                        <div className="FlowRowCondition_kaBsY">
                          <p>
                            <span className="FlowRowConditionSmall_i3om-">
                              {t("Advices.FlowSymptom_28_SY_3")} &nbsp;
                              <span place="temperature">
                                {t("Advices.FlowTextSm_hBW5Y_temperature")}
                                <span place="tempNum" className="FlowRowConditionLarge_15_WW">
                                  {t("Advices.FlowTextSm_hBW5Y_tempNum")}
                                </span>
                              </span>
                            </span>
                          </p>
                          <img src="/img/flow/check_circle-24px.svg" aria-hidden="true" className="FlowRowConditionIcon_1alQe" />
                        </div>

                        <div className="FlowRowCondition_kaBsY">
                          <p>{t("Advices.FlowRowCondition_kaBsY_1")}</p>
                          <img src="/img/flow/check_circle-24px.svg" aria-hidden="true" className="FlowRowConditionIcon_1alQe" />
                        </div>
                        <div className="FlowRowCondition_kaBsY">
                          <p>{t("Advices.FlowRowCondition_kaBsY_2")}</p>
                          <img src="/img/flow/check_circle-24px.svg" aria-hidden="true" className="FlowRowConditionIcon_1alQe" />
                        </div>
                      </div>
                      <div className="FlowRow_iP_e1">
                        <div className="FlowRowRowThree_1ww7o">
                          <ul className="FlowRowRowThreeCareTargetList_1-VJY">
                            <li className="FlowRowRowThreeCareTargetListItem_W6a_I">
                              <img
                                src="/img/flow/directions_walk-24px.svg"
                                aria-hidden="true"
                                className="FlowRowRowThreeCareTargetListItemIcon_1aNyc"
                              />
                              {t("Advices.OldPeople")}
                            </li>
                            <li className="FlowRowRowThreeCareTargetListItem_W6a_I">
                              <img src="/img/flow/accessible-24px.svg" aria-hidden="true" className="FlowRowRowThreeCareTargetListItemIcon_1aNyc" />
                              {t("Advices.IllPeople")}
                            </li>
                            <li className="FlowRowRowThreeCareTargetListItem_W6a_I">
                              <img
                                src="/img/flow/pregnant_woman-24px.svg"
                                aria-hidden="true"
                                className="FlowRowRowThreeCareTargetListItemIcon_1aNyc"
                              />
                              {t("Advices.Pregnant")}
                            </li>
                          </ul>
                        </div>
                        <div>
                          <p>
                            <span>
                              {t("Advices.Symptoms")} &nbsp;
                              <span place="duration" className="FlowRowEmphasis_2piQf">
                                <span place="day" className="FlowRowEmphasisDay_2yVbW">
                                  2
                                </span>{" "}
                                {t("Advices.Symptoms_day")}
                              </span>
                            </span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="CardBlock_1oXUz CardBlockCenter_D11C7 Suspect_2Zh4h">
                    <div className="FlowComponent_3WqRq">
                      <div className="SubtleBox_njJh7 Box1_29SlP">
                        <img src="/img/flow/flow_arrow_rtl.svg" aria-hidden="true" className="Box1Icon_nniZP" />
                        <div className="RowItems_1LH1F">
                          <div className="RowItemsHeader_3uPRh">
                            <img src="/img/flow/sentiment_very_dissatisfied-24px.svg" aria-hidden="true" className="RowItemsHeaderIcon_C80DQ" />
                            {t("Advices.")}
                          </div>
                        </div>
                        <div className="RowItems_1LH1F">
                          <div className="CheckBox_irTfs">
                            <img src="/img/flow/check_circle-24px.svg" aria-hidden="true" className="CheckBoxIcon_2XdHx" />
                            {t("Advices.Fever")}
                          </div>
                          <div className="CheckBox_irTfs">
                            <img src="/img/flow/check_circle-24px.svg" aria-hidden="true" className="CheckBoxIcon_2XdHx" />
                            {t("Advices.Cough")}
                          </div>
                          <div className="CheckBox_irTfs">
                            <img src="/img/flow/check_circle-24px.svg" aria-hidden="true" className="CheckBoxIcon_2XdHx" />
                            {t("Advices.Infection")}
                          </div>
                        </div>
                      </div>
                      <div className="SubtleBox_njJh7 Box2_3DYIg Center_3BCBk">
                        <div className="LargerText_2j9J-">{t("Advices.CallDoctor")}</div>
                      </div>
                    </div>
                  </div>
                  <div className="Advisory_1kPqI">
                    <div className="Advisory_1Xs1W">
                      <div className="AdvisoryContainer_hIPT_">
                        <div className="AdvisoryContents_2dfls">
                          <div>
                            <span className="AdvisoryContentsTitle_2skvV">{t("Advices.AdvisoryContentsTitle_2skvV")}</span>
                          </div>
                          <div className="AdvisoryContentsColsSentense_17Ilp mt-4">{t("Advices.AdvisoryContentsColsSentense_17Ilp")}</div>
                          <div>
                            <div className="AdvisoryBoxContainer_2dhp5 AdvisoryWhiteBox_3C5r2">
                              <span className="AdvisoryWhiteBoxSentense_11tBc">{t("Advices.AdvisoryWhiteBoxSentense_11tBc")}</span>
                            </div>
                          </div>
                        </div>
                        <div className="AdvisoryContents_2dfls">
                          <div className="py-8">
                            <div className="AdvisoryContentsTitle2_2lyeX">{t("Advices.AdvisoryContentsTitle2_2lyeX_1")}</div>
                            <div className="AdvisoryLink_3Ioou AdvisoryBlockCentering_2D323 mt-4">
                              <a href="http://covid19.sante.gov.dz/numeros-utiles/" target="_blank" rel="noopener">
                                <span>{t("Advices.NumerosUtiles")}</span>
                                <svg
                                  width="16px"
                                  height="16px"
                                  aria-hidden="true"
                                  focusable="false"
                                  data-prefix="fas"
                                  data-icon="external-link-alt"
                                  role="img"
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 512 512"
                                  style={{ margin: "1px 5px 0px 5px" }}>
                                  <path
                                    fill="currentColor"
                                    d="M432,320H400a16,16,0,0,0-16,16V448H64V128H208a16,16,0,0,0,16-16V80a16,16,0,0,0-16-16H48A48,48,0,0,0,0,112V464a48,48,0,0,0,48,48H400a48,48,0,0,0,48-48V336A16,16,0,0,0,432,320ZM488,0h-128c-21.37,0-32.05,25.91-17,41l35.73,35.73L135,320.37a24,24,0,0,0,0,34L157.67,377a24,24,0,0,0,34,0L435.28,133.32,471,169c15,15,41,4.5,41-17V24A24,24,0,0,0,488,0Z"></path>
                                </svg>
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="AdvisoryContents_2dfls">
                          <div className="pt-8">
                            <div className="AdvisoryContentsTitle2_2lyeX">{t("Advices.AdvisoryContentsTitle2_2lyeX_2")}</div>
                            <span>{t("Advices.AdvisoryContentsTitle2_2lyeX_time")}</span>
                          </div>
                          <div className="mt-1">
                            <span className="AdvisoryContentsSubTitle_2lDKj">{t("Advices.AdvisoryContentsSubTitle_2lDKj")}</span>
                          </div>
                          <div className="AdvisoryTelephoneArea_2yORf AdvisoryBlockCentering_2D323 mt-1">
                            <a href="tel:3030" className="AdvisoryTelephone_1Eh56">
                              <img src="/img/flow/phone-24px.svg" aria-hidden="true" className="AdvisoryTelephoneIcon_2ECz_" />
                              3030
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="Advisory2_3jO-C">
                    <div className="Container_T0DQ4">
                      <div className="pa-4 AdvisoryBoxContainer_2BQJW">
                        <span>{t("Advices.AdvisoryBoxContainer_2BQJW")}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="only-sp">
              <div className="FlowCard_1k0-w">
                <h3 className="mb-4">{t("Advices.FlowCard_1k0-w_h3")}</h3>
                <div className="FlowCard_1k0-w">
                  <div className="container_2S6d9">
                    <p className="heading_3F8wr">
                      <span>
                        <span place="past" className="fzLarge_1nk3t">
                          {t("Advices.fzLarge_1nk3t")}
                        </span>
                        {t("Advices.fzLarge_1nk3t_2")}
                      </span>
                    </p>
                    <p className="type_KqX-F">
                      <strong className="source_-cnCA">{t("Advices.FlowTitle_c_l5x")}</strong>
                      <span className="behavior_1gZAq fzXLarge_1ZbrK">
                        {" "}
                        {t("Advices.FlowPerson_3iKvi_1")}{" "}
                        <em place="closeContact" className="underline_3C4ky">
                          {t("Advices.FlowPerson_3iKvi_2")}
                        </em>
                      </span>
                    </p>
                    <div className="rectContainer_IcqIt req_3vfF2">
                      <p className="symptom_3YiOf">{t("Advices.FlowSymptom_28_SY_1")}</p>
                      <p className="op_2MZ_t">{t("Advices.Or")}</p>
                      <p className="symptom_3YiOf">{t("Advices.FlowSymptom_28_SY_2")}</p>
                    </div>
                    <p className="type_KqX-F hr_3_lnV">
                      <strong className="source_-cnCA">{t("Advices.CannotBeApplied")}</strong>{" "}
                      <span className="behavior_1gZAq fzXLarge_1ZbrK">{t("Advices.CannotBeApplied")}</span>
                    </p>
                    <div className="rectContainer_IcqIt req_3vfF2">
                      <p className="symptom_3YiOf">{t("Advices.FlowSymptom_28_SY_2")}</p>
                      <p className="op_2MZ_t">{t("Advices.And")}</p>
                      <p className="symptom_3YiOf">
                        <span className="fzSmall_1god5">
                          {t("Advices.FlowSymptom_28_SY_3")}
                          <span place="temperature" className="break_3msBX fzRegular_2LYDe">
                            {t("Advices.FlowTextSm_hBW5Y_temperature")} <span place="tempNum">{t("Advices.FlowTextSm_hBW5Y_tempNum")}</span>
                          </span>
                        </span>
                      </p>
                    </div>
                    <a href="#consult" className="button_3UuHl clickable_Zch70">
                      <span className="text_2ydX7">{t("Advices.text_2ydX7")}</span>
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" className="icon_3w07k">
                        <path d="M128 0l-22.56 22.56L194.72 112H0v32h194.72l-89.28 89.44L128 256l128-128z" fill="#4d4d4d"></path>
                      </svg>
                    </a>
                  </div>
                </div>
                <div className="FlowCard_1k0-w">
                  <div className="container_1aQXv">
                    <p className="heading_1yoAj">
                      <span aria-hidden="true" className="icon_2_ze7">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">
                          <path
                            d="M128 0a25.6 25.6 0 11-25.6 25.6A25.6 25.6 0 01128 0zm115.2 89.6h-76.8V256h-25.6v-76.8h-25.6V256H89.6V89.6H12.8V64h230.4z"
                            fill="#4d4d4d"></path>
                        </svg>
                      </span>
                      <span className="fzMedium_HVE7G">{t("Advices.FlowRowRowThreeGeneralIcon_1d7xH")}</span>
                    </p>
                    <ul className="rectContainer_3fEl0 double_1FQQ2">
                      <li className="symptom_kr7b0">
                        <span>
                          <span>
                            {t("Advices.FlowRowConditionSmall_i3om-1")} <span place="cold">{t("Advices.FlowRowConditionLarge_15_WW-cold")}</span>
                          </span>
                        </span>
                      </li>
                      <li className="symptom_kr7b0">
                        <span className="fzSmall_zbGAe">
                          {t("Advices.FlowSymptom_28_SY_3")}
                          <span place="temperature" className="break_3ZMur fzRegular_39Ix9">
                            {t("Advices.FlowTextSm_hBW5Y_temperature")} <span place="tempNum">{t("Advices.FlowTextSm_hBW5Y_tempNum")}</span>
                          </span>
                        </span>
                      </li>
                      <li className="symptom_kr7b0">{t("Advices.FlowRowCondition_kaBsY_1")}</li>
                      <li className="symptom_kr7b0">{t("Advices.FlowRowCondition_kaBsY_2")}</li>
                    </ul>
                    <p className="duration_gz1al">
                      <span>
                        {t("Advices.FlowRowRowThreeGeneralIcon_1d7xH_span")} &nbsp;
                        <span place="duration" className="underline_2zHYq fzLarge_uS3GD">
                          <strong place="day" className="fzNumeric_1jq4l">
                            4
                          </strong>{" "}
                          {t("Advices.FlowRowEmphasisDay_2yVbW_day")}
                        </span>
                      </span>
                    </p>
                    <a href="#consult" className="button_37pfW clickable_fOLmc">
                      <span className="text_3KtUv">{t("Advices.text_2ydX7")}</span>
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" className="icon_2_ze7">
                        <path d="M128 0l-22.56 22.56L194.72 112H0v32h194.72l-89.28 89.44L128 256l128-128z" fill="#4d4d4d"></path>
                      </svg>
                    </a>
                  </div>
                </div>
                <div className="FlowCard_1k0-w">
                  <div className="container_2ogDB">
                    <div className="heading_3X8Yt multi_1lVQG">
                      <span className="item_1JzFy fzMedium_1xKgG">
                        <span className="icon_243O0">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" aria-hidden="true">
                            <path
                              d="M139.91 47.63a23.82 23.82 0 10-23.82-23.82 23.81 23.81 0 0023.82 23.82zM95.85 88.11L62.51 256h25L109 160.74l25 23.82V256h23.82v-89.3l-25-23.82 7.15-35.72a87.14 87.14 0 0065.49 29.77v-23.81a58.58 58.58 0 01-51.2-28.58l-11.97-19.05a24.56 24.56 0 00-20.24-11.91c-3.58 0-6 1.19-9.53 1.19L50.6 81v56h23.82V96.45l21.43-8.34"
                              fill="#4d4d4d"></path>
                          </svg>
                        </span>
                        {t("Advices.OldPeople")}
                      </span>
                      <span className="item_1JzFy fzMedium_1xKgG">
                        <span className="icon_243O0">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" aria-hidden="true">
                            <path
                              d="M191.75 255.62v-64H128A25.62 25.62 0 01102.5 166V90.3a26 26 0 0123.07-26.51 25.16 25.16 0 0115.17 3.33h.13c.13 0 .13.12.27.12a24.74 24.74 0 017.77 5.76l16.45 18.31a71.43 71.43 0 0051.89 23.43v25.61a108.61 108.61 0 01-63.76-25v44.18h38.29a25.62 25.62 0 0125.5 25.61v70.43zm-153-64a64 64 0 0151-62.74v26.5a38.4 38.4 0 1048.82 49.05H165a63.74 63.74 0 01-126.26-12.84zm63.75-166.5A25.5 25.5 0 11128 50.73a25.5 25.5 0 01-25.5-25.61z"
                              fill="#4d4d4d"></path>
                          </svg>
                        </span>
                        {t("Advices.IllPeople")}
                      </span>
                      <span className="item_1JzFy fzMedium_1xKgG">
                        <span className="icon_243O0">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" aria-hidden="true">
                            <path
                              d="M89.61 25.6a25.6 25.6 0 1125.6 25.6 25.51 25.51 0 01-25.6-25.41.6.6 0 010-.19zm89.59 115.19a42 42 0 00-25.6-38.39 38.4 38.4 0 10-76.8 0V192h25.6v64h38.39v-64h38.4z"
                              fill="#4d4d4d"></path>
                          </svg>
                        </span>
                        {t("Advices.Pregnant")}
                      </span>
                    </div>
                    <ul className="rectContainer_Y9EIc double_3gnpf">
                      <li className="symptom_18Hen">
                        <span>
                          <span>
                            {t("Advices.FlowRowConditionSmall_i3om-1")}
                            <span place="cold">{t("Advices.FlowRowConditionLarge_15_WW-cold")}</span>
                          </span>
                        </span>
                      </li>
                      <li className="symptom_18Hen">
                        <span className="fzSmall_2gyqR">
                          {t("Advices.FlowSymptom_28_SY_3")}
                          <span place="temperature" className="break_tPF1f fzRegular_j39Qs">
                            {t("Advices.FlowTextSm_hBW5Y_temperature")} <span place="tempNum">{t("Advices.FlowTextSm_hBW5Y_tempNum")}</span>
                          </span>
                        </span>
                      </li>
                      <li className="symptom_18Hen">{t("Advices.FlowRowCondition_kaBsY_1")}</li>
                      <li className="symptom_18Hen">{t("Advices.FlowRowCondition_kaBsY_2")}</li>
                    </ul>
                    <p className="duration_ZFJro">
                      <span>
                        {t("Advices.FlowRowRowThreeGeneralIcon_1d7xH_span")} &nbsp;
                        <span place="duration" className="underline_2Aisl fzLarge_1emn1">
                          <strong place="day" className="fzNumeric_WU3Wn">
                            2
                          </strong>{" "}
                          {t("Advices.Symptoms_day")}
                        </span>
                      </span>
                    </p>
                    <a href="#consult" className="button_2n2iY clickable_2BTCl">
                      <span className="text_2sPlT">{t("Advices.text_2ydX7")}</span>
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" className="icon_243O0">
                        <path d="M128 0l-22.56 22.56L194.72 112H0v32h194.72l-89.28 89.44L128 256l128-128z" fill="#4d4d4d"></path>
                      </svg>
                    </a>
                  </div>
                </div>
                <div className="FlowCard_1k0-w">
                  <div className="container_32GSl">
                    <p className="heading_3C0xZ">
                      <span className="icon_bz1e4">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" aria-hidden="true">
                          <path
                            d="M0 128a128 128 0 11128 128h-.13A127.94 127.94 0 010 128zm25.6 0a102.37 102.37 0 100-.06zm146.56 70.4a50.91 50.91 0 00-88.33 0H62.46a70.34 70.34 0 01131.08 0zM153.6 96a19.2 19.2 0 1119.2 19.2A19.18 19.18 0 01153.6 96zM64 96a19.21 19.21 0 1119.2 19.2A19.21 19.21 0 0164 96z"
                            fill="#4d4d4d"></path>
                        </svg>
                      </span>
                      <span className="fzMedium_1esI1">
                        {t("Advices.If")} {t("Advices.FlowPersonS_1J6AJ_2")} {t("Advices.Worried_2")}{" "}
                      </span>
                    </p>
                    <ul className="rectContainer_k2_Ux triple_P-5_c">
                      <li className="symptom_ZdmGQ">
                        {t("Advices.FlowSymptom_28_SY_1")} {t("Advices.Flow")}
                      </li>
                      <li className="symptom_ZdmGQ">{t("Advices.Cough")}</li>
                      <li className="symptom_ZdmGQ">{t("Advices.Infection")}</li>
                    </ul>
                    <div className="callcenter_wJAjo">
                      <p className="fzLarge_3_Xs4">{t("Advices.CallDoctor")}</p>
                      <p className="open_2LsyA">{t("Advices.open_2LsyA")}</p>
                    </div>
                    <a href="#consult" className="button_uFqao clickable_1yVc2">
                      <span className="text_2S6zg">
                        {t("Advices.If")} {t("Advices.FlowPersonS_1J6AJ_2")} {t("Advices.Doctor_2")}
                      </span>
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" className="icon_bz1e4">
                        <path d="M128 0l-22.56 22.56L194.72 112H0v32h194.72l-89.28 89.44L128 256l128-128z" fill="#4d4d4d"></path>
                      </svg>
                    </a>
                  </div>
                </div>
                <div className="FlowCard_1k0-w FlowCardGrayBg_3Vwju">
                  <div className="container_1qcfj">
                    <h4 id="consult" className="heading_2DabJ fzXLarge_2Yn_h">
                      {t("Advices.AdvisoryContentsTitle_2skvV")}
                      <small className="break_2gVuE fzRegular_2Vt7D mt5_2hVez">{t("Advices.AdvisoryContentsColsSentense_17Ilp")}</small>
                    </h4>
                    <p className="open_SsmI1 fzMedium_12XE7">
                      <span>{t("Advices.AdvisoryWhiteBoxSentense_11tBc")}</span>
                    </p>
                    <dl>
                      <div className="daytime_3f5BT">
                        <dt className="title_3_kLB fzMedium_12XE7">{t("Advices.fzMedium_12XE7")}</dt>
                        <dd className="link_1-DTK">
                          <a href="http://covid19.sante.gov.dz/numeros-utiles/" target="_blank" rel="noopener">
                            {t("Advices.NumerosUtiles")}
                            <svg
                              width="16px"
                              height="16px"
                              aria-hidden="true"
                              focusable="false"
                              data-prefix="fas"
                              data-icon="external-link-alt"
                              role="img"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 512 512"
                              style={{ margin: "1px 5px 0px 5px" }}>
                              <path
                                fill="currentColor"
                                d="M432,320H400a16,16,0,0,0-16,16V448H64V128H208a16,16,0,0,0,16-16V80a16,16,0,0,0-16-16H48A48,48,0,0,0,0,112V464a48,48,0,0,0,48,48H400a48,48,0,0,0,48-48V336A16,16,0,0,0,432,320ZM488,0h-128c-21.37,0-32.05,25.91-17,41l35.73,35.73L135,320.37a24,24,0,0,0,0,34L157.67,377a24,24,0,0,0,34,0L435.28,133.32,471,169c15,15,41,4.5,41-17V24A24,24,0,0,0,488,0Z"></path>
                            </svg>
                          </a>
                        </dd>
                      </div>
                      <div>
                        <dt>
                          <ul className="night_1x8Jv">
                            <li>
                              <span className="fzMedium_12XE7 break_2gVuE mb10_3fyFN">{t("Advices.fzMedium_12XE7_night")}</span>
                              {t("Advices.AdvisoryContentsTitle2_2lyeX_time")}
                            </li>
                            <li>
                              <span className="fzMedium_12XE7">{t("Advices.fzMedium_12XE7_weekend")}</span>
                            </li>
                          </ul>
                        </dt>
                        <dd>
                          <div className="phone_2fNSr fzNumeric_axxOA">
                            <span className="icon_3DWv8">
                              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" alt="Phone">
                                <path
                                  d="M51.49 110.79a215.4 215.4 0 0093.72 93.72l31.29-31.22a14.15 14.15 0 0114.44-3.41A162.38 162.38 0 00241.7 178a14.27 14.27 0 0114.3 14.14v49.64A14.28 14.28 0 01241.78 256C108.26 256 0 147.79 0 14.27A14.28 14.28 0 0114.22 0H64a14.28 14.28 0 0114.22 14.22A161.52 161.52 0 0086.32 65a14.27 14.27 0 01-3.61 14.5z"
                                  fill="#4d4d4d"></path>
                              </svg>
                            </span>
                            <a href="tel:3030">3030</a>
                          </div>
                        </dd>
                      </div>
                    </dl>
                  </div>
                </div>
                <div className="FlowCard_1k0-w">
                  <div className="container_wi05o according_1pIKc">
                    <div className="heading_qGATr">
                      {t("Advices.heading_qGATr")}
                      <span place="advisory" className="fzLarge_3LXho break_qRyCn">
                        {t("Advices.advisory")}
                      </span>
                    </div>
                    <p className="diag_1GB4l">
                      {t("Advices.If")} {t("Advices.FlowPersonS_1J6AJ_2")}
                      <span place="advice" className="fzXLLarge_2FpWZ break_qRyCn">
                        {t("Advices.advice")}
                      </span>
                      {t("Advices.advice_2")}
                    </p>
                    <p className="decision_DaNiY">
                      <span className="fzSmall_1kSKY">{t("Advices.fzSmall_1kSKY_1")}</span>
                      <span className="fzLarge_3LXho break_qRyCn">{t("Advices.fzSmall_1kSKY_1")}</span>
                    </p>
                    <div className="rectContainer_2rNi4 double_2T0Xf">
                      <a href="#not_required" className="rect_3zhDV result_3SGhs clickable_3etof">
                        <p>
                          <span>
                            {t("Advices.You")}
                            <span place="ifRequired" className="fzXLarge_2E5K6 break_qRyCn">
                              {t("Advices.ifRequired")}
                            </span>
                            {t("Advices.toBeCheckedOn")}
                          </span>
                        </p>
                        <div aria-hidden="true" className="arrow_3gixV">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">
                            <path d="M256 128l-22.56-22.56L144 194.72V0h-32v194.72l-89.44-89.28L0 128l128 128z" fill="#00a040"></path>
                          </svg>
                        </div>
                      </a>
                      <a href="#pcr" className="rect_3zhDV result_3SGhs clickable_3etof bgYellow_3xzCi">
                        <p>
                          <span>
                            {t("Advices.You")}
                            <span place="ifRequired" className="fzXLarge_2E5K6 break_qRyCn">
                              {t("Advices.ifRequired")}
                            </span>
                            {t("Advices.toBeCheckedOn")}
                          </span>
                        </p>
                        <div aria-hidden="true" className="arrow_3gixV">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">
                            <path
                              d="M255.81 125.14l-23.06-22-87.19 91.28L140.93 0 109 .76l4.63 194.43-91.43-87-22 23.06L131.05 256z"
                              fill="#4d4d4d"></path>
                          </svg>
                        </div>
                      </a>
                    </div>
                    <p id="pcr" className="diag_1GB4l hr_-ZUnH">
                      <span className="break_qRyCn">
                        <span className="fzXLLarge_2FpWZ">{t("Advices.PCR")}</span>*{" "}
                      </span>
                      <small className="note_1EXJW fzSmall_1kSKY break_qRyCn">{t("Advices.note_1EXJW")}</small>
                    </p>
                    <div className="rectContainer_2rNi4 double_2T0Xf">
                      <a href="#not_required" className="rect_3zhDV result_3SGhs clickable_3etof">
                        <p>
                          <span className="fzXLarge_2E5K6">{t("Advices.Negative")}</span>
                        </p>
                        <div aria-hidden="true" className="arrow_3gixV">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">
                            <path d="M256 128l-22.56-22.56L144 194.72V0h-32v194.72l-89.44-89.28L0 128l128 128z" fill="#00a040"></path>
                          </svg>
                        </div>
                      </a>
                      <a href="#hospitalized" className="rect_3zhDV result_3SGhs clickable_3etof bgYellow_3xzCi">
                        <p>
                          <span className="fzXLarge_2E5K6">{t("Advices.Positive")}</span>
                        </p>
                        <div aria-hidden="true" className="arrow_3gixV">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">
                            <path
                              d="M255.81 125.14l-23.06-22-87.19 91.28L140.93 0 109 .76l4.63 194.43-91.43-87-22 23.06L131.05 256z"
                              fill="#4d4d4d"></path>
                          </svg>
                        </div>
                      </a>
                    </div>
                    <p id="not_required" className="diag_1GB4l hr_-ZUnH">
                      {t("Advices.If")} {t("Advices.FlowPersonS_1J6AJ_2")}
                      <span place="advice" className="break_qRyCn fzXLLarge_2FpWZ">
                        {t("Advices.Advice_No")}
                      </span>
                      {t("Advices.advice_2")}
                    </p>
                    <div className="rectContainer_2rNi4 double_2T0Xf">
                      <div className="rect_3zhDV solution_3mORU">
                        <div aria-hidden="true" className="icon_inusm">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">
                            <path
                              d="M217.6 99.84V32h-38.4v33.28L128 19.2 0 134.4h38.4v102.4h64V160h51.2v76.8h64V134.4H256zm-115.2 9a25.6 25.6 0 0151.2 0z"
                              fill="#4d4d4d"></path>
                          </svg>
                        </div>
                        <p>{t("Advices.StayHome")}</p>
                      </div>
                      <div className="rect_3zhDV solution_3mORU">
                        <div aria-hidden="true" className="icon_inusm">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">
                            <path
                              d="M199.11 113.78V0H56.89v56.89H0V256h113.78v-56.89h28.44V256H256V113.78zM56.89 227.56H28.44v-28.45h28.45zm0-56.89H28.44v-28.45h28.45zm0-56.89H28.44V85.33h28.45zm56.89 56.89H85.33v-28.45h28.45zm0-56.89H85.33V85.33h28.45zm0-56.89H85.33V28.44h28.45zm56.89 113.78h-28.45v-28.45h28.45zm0-56.89h-28.45V85.33h28.45zm0-56.89h-28.45V28.44h28.45zm56.89 170.67h-28.45v-28.45h28.45zm0-56.89h-28.45v-28.45h28.45z"
                              fill="#4d4d4d"></path>
                          </svg>
                        </div>
                        <p>{t("Advices.ConsultADoctor")}</p>
                      </div>
                      <div className="rect_3zhDV consult_1m00f">
                        <p>
                          <span>
                            <span place="getWorse">{t("Advices.getWorse")}</span> {t("Advices.Call")}
                            <strong place="advisory" className="advisory_10rAK">
                              {t("Advices.AdvisoryContentsTitle_2skvV")}
                            </strong>
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="FlowCard_1k0-w">
                  <div id="hospitalized" className="container_1ABFV">
                    <p className="heading_2SU4A">
                      <span className="icon_3tNat">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" aria-hidden="true">
                          <path
                            d="M69.82 133.82a34.87 34.87 0 10-.09 0zM209.45 64h-93.09v81.45H23.27V40.73H0v174.54h23.27v-34.91h209.46v34.91H256V110.55A46.55 46.55 0 00209.45 64z"
                            fill="#4d4d4d"></path>
                        </svg>
                      </span>
                      <span className="fzMedium_11635">{t("Advices.Hospitilazed")}</span>
                    </p>
                    <p className="facility_26MME fzXLarge_15My9">{t("Advices.facility_26MME")}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Advices;
