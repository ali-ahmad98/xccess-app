import React from "react";
import styles from "../contactus.module.css";
import building from "../../../Assets/Xccess Ofc Location Image for Contact Page.jpg";
import linkedin from "../../../Assets/linkedin.png";
import facebookLogo from "../../../Assets/facebook.png";
import twitter from "../../../Assets/twitter.png";
import instagram from "../../../Assets/instagram.png";
import youtube from "../../../Assets/youtube.png";
import GoogleMapReact from "google-map-react";
import classes from "../contactus.module.css";
const ContactUsGrid = () => {
  return (
    <div className={styles.gridContainer}>
      <div style={{ justifySelf: "center" }} className={styles.gridItem1}>
        <p className={styles.contactHeading}>Contact Us</p>
        <span>XCCESS, LLC</span>
        <br />
        <span className="mt-4 d-inline-block">
          14502 Greenview Dr Suite #300a <br />
          Laurel, MD 20708
        </span>
        <br />
        <br />
        <br />


        <span className={`ml-4 d-inline-block ${styles.contactText}`}>
          {" "}
          Telephone: 1.877.695.6953
        </span>
        <br />
        <span style={{ marginTop: '4px' }} className={`ml-4 d-inline-block ${styles.contactText}`}>
          Email: X@Xccess.com
        </span>
        <br />
        <br />

        {/* <div className={styles.mapDiv}>
          <GoogleMapReact
            bootstrapURLKeys={{
              key: `AIzaSyCj4vfgru_3TL-snIcBR-k-HY5wCo-e0f4`,
            }}
            defaultCenter={{
              lat: 39.08939215376807,
              lng: -76.84373405450958,
            }}
            defaultZoom={11}
          ></GoogleMapReact>
        </div> */}
      </div>
      {/* Grid 2 */}
      <div >
        <div className={classes.imgSecondGrid}>

        </div>
        <br />

        <div className={styles.gridItemSocialIcons}>
          <div className={styles.logoDiv}>
            <a href="https://www.facebook.com/RemoteXccess" target="_blank">
              <img src={facebookLogo} width="100%" alt="logo" />{" "}
            </a>
          </div>
          <div className={styles.logoDiv}>
            <a href="#">
              <img src={linkedin} width="100%" alt="logo" />
            </a>
          </div>
          <div className={styles.logoDiv}>
            <a href="https://www.twitter.com/RemoteXccess" target="_blank">
              <img src={twitter} width="100%" alt="logo" />
            </a>
          </div>
          <div className={styles.logoDiv}>
            <a href="https://www.instagram.com/Xccess" target="_blank">
              <img src={instagram} width="100%" alt="logo" />
            </a>
          </div>
          <div className={styles.logoDiv}>
            <a href="#">
              <img src={youtube} width="100%" alt="logo" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUsGrid;
