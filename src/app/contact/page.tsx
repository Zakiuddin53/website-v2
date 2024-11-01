"use client"
import React, { useState, FormEvent } from "react";
import Head from "next/head";
import Script from "next/script";
import Image from 'next/image';
import Link from 'next/link';
import { toast } from 'react-hot-toast';
import { sendEmail } from "../actions/sendEmail";

function Contactus() {
 

  return <>
  
  <div className="section zubuz-section-padding2">
<div className="container">
  <div className="row">
    <div className="col-lg-6">
      <div className="zubuz-default-content m-right">
        <h2>Interested in growing your business?
Write to us!</h2>
        <p>
          Book an appointment with our team now! If you have any questions
          about growing your business, contact our team and schedule a call.
        </p> 
        <div className="zubuz-extara-mt">

          <div className="zubuz-iconbox-wrap-left d-block">
            <div className="zubuz-iconbox-data data-small">
              <span>Social Media:</span>
              <div className="zubuz-social-icon social-box">
                <ul>
                  <li>
                    <a href="https://twitter.com/" target="_blank">
                      <i className="fab fa-twitter" />
                    </a>
                  </li>
                  <li>
                    <a href="https://facebook.com/" target="_blank">
                      <i className="fab fa-facebook-f" />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.linkedin.com/" target="_blank">
                      <i className="fab fa-linkedin" />
                    </a>
                  </li>
                  <li>
                    <a href="https://github.com/" target="_blank">
                      <i className="fab fa-github" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="col-lg-6">
      <div className="zubuz-form-wrap">
        <h3>Fill the from below</h3>

        <form
        className="row zubuz-main-form"
        action={async (formData) => {
          const { data, error } = await sendEmail(formData);

          if (error) {
            toast.error(error);
            return;
          }

          toast.success("Email sent successfully!");
        }}
      >
<div className="row">
 <div className="col-lg-6">
    <div className="zubuz-main-form">
      <input
        className="h-14 px-4 rounded-lg border-black dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all"
        name="Name"
        type="text"
        required
        maxLength={500}
        placeholder="Your name"
      />
    </div>
 </div>
 <div className="col-lg-6">
    <div className="zubuz-main-form">
      <input
        name="senderEmail"
        type="email"
        required
        maxLength={500}
        placeholder="Your email"
      />
    </div>
 </div>
</div>
<div className="zubuz-main-form">
 <input
    name="subject"
    type="text"
    required
    maxLength={500}
    placeholder="Subject"
 />
</div>
<div className="zubuz-main-form">
 <textarea
    name="message"
    placeholder="Your message"
    required
    maxLength={5000}
 />
</div>
            <button id="zubuz-submit-btn" type="submit">
            <span>Send Message</span>
          </button>
      </form>
      </div>
    </div>
  </div>
</div>
</div>
<div className="section dark-bg zubuz-section-padding6">
<div className="container">
  <div className="row">
    <div className="col-lg-4 col-md-6">
      <a href="tel:123">
        <div className="zubuz-iconbox-wrap-left text-center-lg rt-mb-24">
          <div className="zubuz-iconbox-icon">
            <Image src="/assets/images/icon/call2.svg" alt=""
                      width={150}
                      height={186} />
          </div>
          <div className="zubuz-iconbox-data light">
            <h3>Call us directly</h3>
            <p>
              +088-234-6532-789
              <br />
              +088-456-3217-005
            </p>
          </div>
        </div>
      </a>
    </div>
    <div className="col-lg-4 col-md-6">
      <a href="mailto:name@email.com">
        <div className="zubuz-iconbox-wrap-left text-center-lg rt-mb-24">
          <div className="zubuz-iconbox-icon">
            <Image src="/assets/images/icon/email3.svg" alt=""
                      width={150}
                      height={186}
             />
          </div>
          <div className="zubuz-iconbox-data light">
            <h3>Email us</h3>
            <p>
              example@gmail.com
              <br />
              example@gmail.com
            </p>
          </div>
        </div>
      </a>
    </div>
    <div className="col-lg-4 col-md-6">
      <div className="zubuz-iconbox-wrap-left text-center-lg rt-mb-24">
        <div className="zubuz-iconbox-icon">
          <Image src="/assets/images/icon/map2.svg" alt="" 
                    width={150}
                    height={186}
          />
        </div>
        <div className="zubuz-iconbox-data light">
          <h3>Our office address</h3>
          <p>
            4132 Thornridge City,
            <br /> New York.
          </p>
        </div>
      </div>
    </div>
  </div>
</div>
</div>
<>


</>
<Script src="/assets/js/jquery-3.6.0.min.js"></Script>
<Script src="/assets/js/bootstrap.bundle.min.js"></Script>
<Script src="/assets/js/menu/menu.js"></Script>
<Script src="/assets/js/isotope.pkgd.min.js"></Script>
<Script src="/assets/js/jquery.magnific-popup.min.js"></Script>
<Script src="/assets/js/slick.js"></Script>
<Script src="/assets/js/countdown.js"></Script>
<Script src="/assets/js/wow.min.js"></Script>
<Script src="/assets/js/faq.js"></Script>
<Script src="/assets/js/app.js"></Script>
  </>;
}

export default Contactus;
