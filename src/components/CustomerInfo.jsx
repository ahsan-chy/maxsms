import { useState } from "react";
import styles from "./customerInfo.module.css";
import { BsArrowRightSquare as ArrowButton } from "react-icons/bs";

const CustomerInfo = () => {
  const setupData = [
    {
      id: 0,
      title: "SMS",
      subTitle: "Number",
      status: "",
      lastDate: "Last Date/Time Invite Sent",
    },
    {
      id: 1,
      title: "Email",
      subTitle: "Email",
      status: "",
      lastDate: "Last Date/Time Invite Sent",
    },
    {
      id: 2,
      title: "Whatsapp",
      subTitle: "Number",
      status: "",
      lastDate: "Last Date/Time Invite Sent",
    },
  ];
  const [subTitle, setSubTitle] = useState("");
  const [language, setLanguage] = useState("");
  const [promotion, setPromotion] = useState("");
  const [troubleShoot, setTroubleShoot] = useState("");
  const [isAccordionOpen, setIsAccordionOpen] = useState(true);
  const [selectedDetailCommunication, setSelectedDetailCommunication] = useState(setupData[0].id);
  const [selectedCommunication, setSelectedCommunication] = useState(setupData[0].id);

  const handleDetailRadioChange = (id) => {
    setSelectedDetailCommunication(id);
  };

  const handleRadioChange = (id) => {
    setSelectedCommunication(id);
  };

  const hideAccordion = () => {
    setIsAccordionOpen(!isAccordionOpen);
  };

  return (
    <div className={styles.root}>
      <div className={styles.wrapper}>
        {/* First Section */}
        <div className={styles.customerInfo}>
          <h3 className={styles.title}>Customer Information</h3>

          <div className={styles.boxWrapper}>
            <div className={styles.box}>
              <h3 className={styles.subTitle}>Name: </h3>
            </div>
            <div className={styles.box}>
              <h3 className={styles.subTitle}>Order ID: </h3>
            </div>
            <div className={`${styles.selectOption} ${styles.languageSelect}`}>
              <select
                name="language"
                onChange={(e) => setLanguage(e.target.value)}
                defaultValue={"language"}>
                <option value="language" disabled>
                  Language
                </option>
                <option value="0">Spanish</option>
                <option value="0">English</option>
              </select>
            </div>
            <div className={styles.box}>
              <h3 className={styles.subTitle}></h3>
            </div>
          </div>
        </div>

        <div className={styles.divider} />

        {/* Second Section */}
        <div className={styles.setup}>
          <div className={styles.headWrapper}>
            <span className={styles.accordion} onClick={hideAccordion}>
              <ArrowButton />
            </span>
            <h3 className={styles.setupTitle}>SETUP</h3>
          </div>
          <div className={`${styles.accordionContent} ${isAccordionOpen ? styles.show : ""}`}>
            <div className={styles.contentWrapper}>
              <h3 className={`${styles.setupSubTitle} ${styles.firstTitle}`}>
                Preferred Communication
              </h3>
              <h3 className={`${styles.setupSubTitle} ${styles.secondTitle}`}>Status</h3>
              <h3 className={`${styles.setupSubTitle} ${styles.thirdTitle}`}>Last Invite Date</h3>
              {setupData.map((data, index) => (
                <div className={styles.OptionWrapper} key={index}>
                  <input
                    type="radio"
                    id={`communication-${data.id}`}
                    name="detail-communication"
                    checked={selectedDetailCommunication === data.id}
                    onChange={() => handleDetailRadioChange(data.id)}
                  />

                  <div className={`${styles.inlineBox} ${styles.sms}`}>
                    <h3 className={styles.subTitle} htmlFor="sms">
                      {data.title}:{" "}
                    </h3>
                  </div>
                  {selectedDetailCommunication === data.id && (
                    <>
                      <div>
                        {/* <h3 className={styles.subTitle}>{data.subTitle}: </h3> */}
                        <input
                          type="text"
                          value={subTitle}
                          onChange={(e) => setSubTitle(e.target.value)}
                          placeholder={data.subTitle}
                          className={`${styles.selectTitle}`}
                        />
                      </div>

                      <div className={`${styles.inlineBox} ${styles.status}`}>
                        <h3 className={styles.subTitle}> {data.status} </h3>
                      </div>
                      <div className={`${styles.inlineBox} ${styles.invite}`}>
                        <h3 className={styles.subTitle}>Invite </h3>
                      </div>
                      <div className={`${styles.inlineBox} ${styles.lastDate} `}>
                        <h3 className={styles.subTitle}>{data.lastDate} </h3>
                      </div>
                    </>
                  )}
                </div>
              ))}

              <br />
            </div>
            <button>SAVE</button>
          </div>
        </div>

        <div className={styles.divider} />
        {/* Third Section */}
        <div className={styles.sendSms}>
          <div className={`${styles.col} `}>
            <h3 className={styles.title}>Send Message</h3>
            <div className={styles.selectOption}>
              <select
                name="promotion"
                onChange={(e) => setPromotion(e.target.value)}
                defaultValue={"promotion"}>
                <option value="promotion" disabled>
                  Promotions
                </option>
                <option value="1">option 1</option>
                <option value="2">option 2</option>
              </select>
            </div>
            <div className={styles.selectOption}>
              <select
                name="troubleShoot"
                onChange={(e) => setTroubleShoot(e.target.value)}
                defaultValue={"troubleShoot"}>
                <option value="troubleShoot" disabled>
                  TroubleShoot
                </option>
                <option value="1">TroubleShoot 1</option>
                <option value="2">TroubleShoot 2</option>
              </select>
            </div>
          </div>
          <div className={`${styles.col} `}>
            <textarea
              id="customMessage"
              name="customMessage"
              className={styles.customMessage}
              rows="8"
              cols="40"
              placeholder="Custom Message"></textarea>
          </div>
          <div className={`${styles.col} `}>
            <div className={`${styles.optionWrapperBox} `}>
              {setupData.map((data, index) => (
                <div className={styles.OptionWrapper} key={index}>
                  <input
                    type="radio"
                    id={`communication-${data.id}`}
                    name="communication"
                    checked={selectedCommunication === data.id}
                    onChange={() => handleRadioChange(data.id)}
                  />

                  <div className={`${styles.inlineBox} ${styles.sms}`}>
                    <h3 className={styles.subTitle} htmlFor="sms">
                      {data.title}:{" "}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className={`${styles.col} ${styles.submitCol} `}>
            <button>SEND</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerInfo;
