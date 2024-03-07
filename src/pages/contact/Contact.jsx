import React, { useEffect, useState } from "react";
import "./Contact.css";
import { mobileValidate } from "../../utils/helpers";
import { Link } from "react-router-dom";
import { RiWhatsappFill } from "react-icons/ri";

import { FaAddressCard } from "react-icons/fa6";
import { MdEmail, MdOutlineMail } from "react-icons/md";
import { PageHero } from "../../components";
import { FaPhoneAlt } from "react-icons/fa";

const Contact = () => {
  const [number, setnumber] = useState("");
  const [email, setemail] = useState("");
  const [subject, setsubject] = useState("");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <PageHero title="Contact" />

      <div className="ContactUsPage_main">
        <div className="ContactUsPage_inner">
          <div className="ContactUsPage_form">
            <div className="ContactUsPage_details_inner">
              <h1>CONTACT US</h1>
              <div
                className="underline"
                style={{
                  marginLeft: "0px",
                  marginBottom: "0px",
                  marginTop: "0px",
                }}></div>
            </div>
            <div>
              <form className="c_form">
                <div className="c_form_inner">
                  <h4 className="c-lbl">Name</h4>
                  <input type="text" placeholder="" className="c-txt" />
                </div>
                <div className="c_form_inner">
                  <h4 className="c-lbl">Number</h4>
                  <input
                    type="text"
                    placeholder=""
                    name="field-name"
                    value={number}
                    maxLength={10}
                    className="c-txt"
                  />
                </div>
                <div className="c_form_inner">
                  <h4 className="c-lbl">Email</h4>
                  <input
                    type="text"
                    placeholder=""
                    value={email}
                    className="c-txt"
                  />
                </div>
                <div className="c_form_inner">
                  <h4 className="c-lbl">Subject</h4>
                  <input type="text" placeholder="" className="c-txt" />
                  <h4 className="c-lbl">Description</h4>
                  <textarea
                    placeholder="Please leave message here..."
                    //   value={description}
                    className="c-msg-txt"
                    //   onChange={(e) => setdescription(e.target.value)}
                  ></textarea>
                </div>
              </form>
            </div>
            <div>
              <button className="btn">SUBMIT</button>
            </div>
          </div>
          <div className="ContactUsPage_details">
            <div
              className="ContactUsPage_details_inner drop-in"
              style={{ gap: "1.5rem" }}>
              <h1>QUICK CONTACT</h1>
              <div
                className="underline"
                style={{
                  marginLeft: "0px",
                  marginBottom: "0px",
                  marginTop: "0px",
                }}></div>
            </div>
            <div className="ContactUsPage_details_inner drop-in-2">
              <div className="ContactUsPage_phoneno">
                <h4
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.5rem",
                  }}>
                  <div
                    style={{
                      background: "black",
                      padding: "5px",
                      display: "flex",
                      borderRadius: "30px",
                    }}>
                    <FaPhoneAlt style={{ color: "white", fontSize: "10px" }} />
                  </div>
                  PHONE
                </h4>
                <div className="react_icons_contactpg">
                  <Link to="tel:+91 9898400911">+91 98984 00911</Link>
                </div>
              </div>
              <div className="ContactUsPage_email">
                <h4
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.5rem",
                  }}>
                  <div
                    style={{
                      background: "black",
                      padding: "5px",
                      display: "flex",
                      borderRadius: "30px",
                    }}>
                    <MdEmail style={{ color: "white", fontSize: "10px" }} />
                  </div>
                  EMAIL
                </h4>
                <div className="react_icons_contactpg">
                  <Link to="mailto:surajindustries11@gmail.com">
                    Surajindustries11@gmail.com
                  </Link>
                </div>
              </div>
              <div className="ContactUsPage_email">
                <h4
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.5rem",
                  }}>
                  <RiWhatsappFill />
                  WHATSAPP
                </h4>
                <div className="react_icons_contactpg">
                  {/* <FaSquareWhatsapp /> */}
                  <Link
                    to="http://api.whatsapp.com/send?phone=9898400911&text=Let%27s%20Get%20in%20Touch"
                    target="_blank">
                    +91 98984 00911
                  </Link>
                </div>
              </div>

              <div className="ContactUsPage_office">
                <h4
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.5rem",
                  }}>
                  <FaAddressCard />
                  OFFICE{" "}
                </h4>
                {/* <h4>OFFICE</h4> */}
                <p
                  className="react_icons_contactpg"
                  style={{
                    alignItems: "start",
                    textTransform: "capitalize",
                    textAlign: "justify",
                    letterSpacing: "1.5px",
                  }}>
                  {/* <FaAddressCard /> */}
                  Suraj industries
                  <br /> Plot no. 19, Survey no.36
                  <br /> Near Paras Industries Falcon Road <br />
                  Vavdi Industrial Area, Rajkot, Gujarat, India
                </p>
              </div>
            </div>
          </div>
          {/*  */}
        </div>
        <div className="ContactUsPage_map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14772.650338570998!2d70.78469050479377!3d22.233909238093705!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3959ca963c2b424f%3A0xc930410455b5fbcb!2sVavdi%2C%20Rajkot%2C%20Gujarat%20360004!5e0!3m2!1sen!2sin!4v1709814050816!5m2!1sen!2sin"
            width="90%"
            height="300"
            frameborder="0"
            scrolling="no"
            marginheight="0"
            marginwidth="0"
            allowFullScreen
            className="ContactUsPage_map_inner"></iframe>{" "}
        </div>
      </div>
    </>
  );
};

export default Contact;
