import React from "react";
import styles from "../subscription.module.css";
import gridImage1 from "../../../Assets/XCCESS Video Conf Image.jpg";
import gridImage2 from "../../../Assets/XCCESS APP WITH GUY.jpg";
import character from "../../../Assets/character.png";
import classes from "../subscription.module.css";

const SubscriptionGrid = () => {
  return (
    <div className={styles.grid}>
      <div className={styles.gridItems}>
        <div style={{ height: "auto" }}>
          <img
            className={`${styles.border} ${styles.boxSizing}`}
            src={gridImage1}
            width="100%"
            height="116%"
            alt=""
          />
        </div>
        <div style={{ height: "auto" }} className={`${styles.borderBottom}`}>
          <div className={styles.gridItemsGrid}>
            <span className={styles.freeText}>FREE</span>
          </div>
        </div>
        <div style={{ height: "auto" }} className={` position-relative`}>
          <div className={`${styles.textCenter}`}>
            {" "}
            <span className={`${styles.benefitsText} ${classes.marginTop24}`}>
              BENEFITS:
            </span>
          </div>
          <ul
            style={{
              padding: "0",
              paddingLeft: "10px",
            }}
            className={`${styles.listStyle} ${styles.unorderedList}`}
          >
            <li>
              Unlimited Live Video Conferencing <br />
              <pre style={{ fontSize: "12px" }}>(Up to 75 Participants)</pre>
            </li>
            <li>Invite Prospects</li>
            <li>Give Presentation and Close DEAL</li>
            <li>Consult or Conduct Training</li>
            <li>Live Video Chat with Friends & Family</li>
            <li>Livestream on social media (YouTube)</li>
            <li>End-to-End Encryption Available</li>
          </ul>
          <div className={`${classes.textCenter} `}>
            <span
              className={`${classes.launchText} ${classes.positionRelativeLaunch}`}
            >
              <a
                style={{
                  textDecoration: "none",
                  color: "black",
                  cursor: "pointer",
                }}
                href="https://free.xccess.com/"
                target="__blank"
              >
                REGISTER
              </a>
            </span>
          </div>
        </div>
      </div>
      <div className={styles.gridItems}>
        <div className={`${classes.heading2ndItem} `}>
          <span
            className={`${classes.goldTextClass} ${classes.fontSize24} ${classes.fontBold}`}
          >
            GOLD
          </span>{" "}
          <span className={classes.fontSize18}>Secure Cloud Storage Plan</span>
        </div>
        <div className={`${classes.padding} ${classes.removeBorder}`}>
          <div className={`${classes.heading2ndItemNoBorder}`}>
            <div className={classes.priceDiv}>
              <span className={classes.launchText}>Buy Now</span>
              <span className={`${classes.priceText}`}>$99.00 </span>
              <span className={classes.preText}>per year</span>
            </div>
          </div>
          <div className={`${styles.textCenter}`}>
            {" "}
            <span className={`${styles.benefitsText}`}>BENEFITS:</span>
          </div>
          <ul
            style={{ margin: 0, padding: 0 }}
            className={`${styles.listStyle} ${styles.unorderedList}`}
          >
            <li style={{ marginTop: "7px" }}>
              5 GIGS of Cloud Storage to record meetings
            </li>
            <li style={{ marginTop: "7px" }}>
              50 FREE Prelaunch XCCESS (XCS) Tokens.
            </li>
          </ul>
        </div>
        <div className={`${classes.textCenter} ${classes.removeBorder}`}>
          <span
            style={{
              fontSize: "11px",
              display: "inline-block",
              marginBottom: 11,
              marginTop: 4,
            }}
          >
            No Business Opportunity
          </span>
        </div>
        <div className={classes.heading2ndItem}>
          <span>
            <span
              style={{ fontSize: "19px" }}
              className={`${classes.goldTextClass} ${classes.fontBold}`}
            >
              GOLD
            </span>{" "}
            Cloud Storage + Business Opp Plan
          </span>
        </div>

        <div style={{ padding: "20px 15px" }}>
          <div className={classes.priceDiv}>
            <span className={classes.launchText}>Buy Now</span>
            <span className={`${classes.priceText}`}>$299.00 </span>
            <span className={classes.preText}>per year</span>
          </div>
          <div style={{ marginTop: "15px" }} className={`${styles.textCenter}`}>
            {" "}
            <span className={`${styles.benefitsText}`}>BENEFITS:</span>
          </div>
          <ul
            style={{ margin: 0, padding: 0, marginTop: "10px" }}
            className={`${styles.listStyle} ${styles.unorderedList}`}
          >
            <li style={{ marginTop: "7px" }}>
              <span className={classes.fontBold}>30 GIGS</span> of Cloud Storage
              to record meetings
            </li>
            <li style={{ marginTop: "7px" }}>
              <span className={classes.fontBold}>
                <span style={{ textDecoration: "underline" }}> 150 </span>FREE
              </span>{" "}
              Prelaunch <span className={classes.fontBold}>XCCESS (XCS)</span>{" "}
              Tokens
            </li>
          </ul>
        </div>

        <div style={{ padding: "25px 15px" }}>
          <div className={classes.priceDiv}>
            <span className={classes.launchText}>Buy Now</span>
            <span className={`${classes.priceText}`}>$999.00 </span>
            <span className={classes.preText}>per year</span>
          </div>
          <div style={{ marginTop: "15px" }} className={`${styles.textCenter}`}>
            {" "}
            <span className={`${styles.benefitsText}`}>BENEFITS:</span>
          </div>
          <ul
            style={{ margin: 0, padding: 0, marginTop: "10px" }}
            className={`${styles.listStyle} ${styles.unorderedList}`}
          >
            <li style={{ marginTop: "7px" }}>
              <span className={classes.fontBold}>60 GIGS</span> of Cloud Storage
              to record meetings
            </li>
            <li style={{ marginTop: "7px" }}>
              <span className={classes.fontBold}>
                <span style={{ textDecoration: "underline" }}> 500 </span>FREE
              </span>{" "}
              Prelaunch <span className={classes.fontBold}>XCCESS (XCS)</span>{" "}
              Tokens
            </li>
          </ul>
        </div>
      </div>
      <div className={`${styles.gridItems} ${styles.gridItembusiness2}`}>
        <div style={{ height: "32.5%" }}>
          <img
            className={`${styles.border} ${styles.boxSizing}`}
            src={gridImage2}
            width="100%"
            height="100%"
            alt=""
          />
        </div>
        <div className={classes.heading2ndItem}>
          <div className={classes.textCenter}>
            {" "}
            <span style={{ fontSize: "20px" }}>Business Opportunity</span>
          </div>
        </div>
        <div style={{ height: "auto" }}>
          <ul
            style={{ margin: 0, padding: 0, position: "relative" }}
            className={`${styles.listStyle} ${styles.unorderedList}`}
          >
            <li>
              Leverage our live video conferencing platform to promote XCCESS.
            </li>
            <li>Earn Generous Commission</li>
            <li>Earn Residual Renewal Revenues</li>
            <li>Crypto-Currency Blockchain training</li>
            <li>
              X ChatBot Support
              <div style={{ position: "absolute", left: "42%", top: "80%" }}>
                <img src={character} width="50px" alt="" />
              </div>
            </li>
          </ul>
          <h2 className="text-center h2Reset">
            Get 10% OFF <br /> w/Discount Code
          </h2>

          <div
            style={{ display: "block" }}
            className={`${classes.priceDiv} ${classes.textCenter}`}
          >
            <span className={classes.launchText}>Buy Now </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubscriptionGrid;
