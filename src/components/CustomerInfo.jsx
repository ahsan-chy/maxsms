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
              <select>
                <option value="0">Language</option>
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
                      <div className={`${styles.inlineBox} ${styles.number}`}>
                        <h3 className={styles.subTitle}>{data.subTitle}: </h3>
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
              <select>
                <option value="0">Promotions</option>
                <option value="0">Promotions</option>
                <option value="0">Promotions</option>
              </select>
            </div>
            <div className={styles.selectOption}>
              <select>
                <option value="1">TroubleShoot</option>
                <option value="1">TroubleShoot</option>
                <option value="1">TroubleShoot</option>
              </select>
            </div>
          </div>
          <div className={`${styles.col} `}>
            <textarea
              id="customMessage"
              name="customMessage"
              className={styles.customMessage}
              rows="8"
              cols="40">
              Custom Message
            </textarea>
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
