import React from "react";
import Image from "next/image";
import "./Hero.css";

export default function Hero() {
  return (
    <div className="zubuz-hero-section">
      <div className="container">
        <div className="zubuz-hero-content center">
          <h1>
            Innovate, Integrate, Elevate <br /> Your IT Solution Partner
            <span className="zubuz-title-shape">
              <Image
                src="/assets/images/v3/shape-v3-01.png"
                alt=""
                width={350}
                height={350}
              />
            </span>
          </h1>
          <p>Ready to take your business to the next level?</p>
          <div className="zubuz-extara-mt">
            <div className="zubuz-subscribe-three">
              <form action="#">
                <input type="email" placeholder="Enter your e-mail address" />
                <button
                  className="zubuz-default-btn zubuz-subscription-btn three"
                  id="zubuz-subscription-btn"
                  type="submit"
                >
                  <span>Get started</span>
                </button>
                <div className="zubuz-input-email">
                  <Image
                    src="/assets/images/icon/email2.svg"
                    alt=""
                    width={24}
                    height={24}
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="zubuz-border-btoom">
          <div className="zubuz-hero-thumb3">
            <Image
              src="/assets/images/v3/thumb-v3-01.png"
              alt=""
              width={600}
              height={400}
            />
            <div className="zubuz-hero-thumb-card1">
              <Image
                src="/assets/images/v3/card-v3-1.png"
                alt=""
                width={200}
                height={150}
              />
            </div>
            <div className="zubuz-hero-thumb-card2">
              <Image
                src="/assets/images/v3/card-v3-2.png"
                alt=""
                width={200}
                height={150}
              />
            </div>
            <div className="zubuz-hero-thumb-card3">
              <Image
                src="/assets/images/v3/card-v3-3.png"
                alt=""
                width={200}
                height={150}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
