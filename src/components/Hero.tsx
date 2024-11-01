import React from "react";

export default function Hero() {
  return (
    <div
      className="zubuz-hero-section"
      style={{ backgroundImage: "url(assets/images/v1/hero-shape1.png)" }}
    >
      <div className="container">
        <div className="zubuz-hero-content center position-relative">
          <h2>
            Innovate, Integrate, Elevate <br /> Your IT Solution Partner
          </h2>
          <p>
          Ready to take your business to the next level?
          </p>
          <div className="zubuz-hero-btn-wrap center">
            <a className="zubuz-default-btn" href="contact-us.html">
              {" "}
              <span>Start Your Free Trial</span>{" "}
            </a>
            {/* <a
              className="video-init zubuz-hero-video"
              href="https://www.youtube.com/watch?v=SixdAQtWJQ8"
            >
              <img src="assets/images/v1/play-btn.png" alt="" />
              Watch A Demo
            </a> */}
          </div>
          <div className="zubuz-hero-shape">
            <img src="assets/images/v1/shape.png" alt="" />
          </div>
        </div>
        <div className="zubuz-hero-bottom">
          <div className="zubuz-hero-thumb wow fadeInUpX">
            <img src="assets/images/v1/hero-mocup1.png" alt="" />
          </div>
          <div className="zubuz-hero-card card1 wow zoomIn">
            <img src="assets/images/v1/h-card1.png" alt="" />
          </div>
          <div className="zubuz-hero-card card2 wow zoomIn">
            <img src="assets/images/v1/h-card2.png" alt="" />
          </div>
          <div className="zubuz-hero-card card3 wow zoomIn">
            <img src="assets/images/v1/h-card4.png" alt="" />
          </div>
          <div className="zubuz-hero-card card4 wow zoomIn">
            <img src="assets/images/v1/h-card3.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
