import React from "react";
import Head from "next/head";
import Link from "next/link";

const Portfolio = () => {
  return (
    <>

      {/* End breadcrumb */}
      <div className="section zubuz-section-padding3">
        <div className="container">
          <div className="zubuz-section-title center">
            <h2>Some of our successful work</h2>
          </div>
          <div className="zubuz-portfolio-menu">
            <ul
              id="watch-filter-gallery"
              className="option-set clear-both"
              data-option-key="filter"
            >
              <li className="active" data-option-value="*">
                All
              </li>
            </ul>
          </div>
          <div className="zubuz-portfolio-column" id="zubuz-two-column">
            <a
              href="https://ezyforms.io/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="collection-grid-item zubuz-portfolio-wrap branding ui">
                <div className="zubuz-portfolio-thumb">
                  <img src="/assets/images/portfolio/ezyform.png" alt="" />
                  <div className="zubuz-portfolio-data">
                    <h3>Business Automation Tool</h3>
                  </div>
                </div>
              </div>
            </a>
            <a
              href="https://app.pt7.io/auth/login"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="collection-grid-item zubuz-portfolio-wrap branding ui">
                <div className="zubuz-portfolio-thumb">
                  <img src="/assets/images/portfolio/patient7.png" alt="" />
                  <div className="zubuz-portfolio-data">
                    <h3>SAAS EMR Solution</h3>
                  </div>
                </div>
              </div>
            </a>
            <a
              href="https://www.sopay.ai/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="collection-grid-item zubuz-portfolio-wrap branding ui">
                <div className="zubuz-portfolio-thumb">
                  <img src="/assets/images/portfolio/sopay.png" alt="" />
                  <div className="zubuz-portfolio-data">
                    <h3>Crypto Wallet</h3>
                  </div>
                </div>
              </div>
            </a>
            <a
             
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="collection-grid-item zubuz-portfolio-wrap branding ui">
                <div className="zubuz-portfolio-thumb">
                  <img src="/assets/images/portfolio/22.png" alt="" />
                  <div className="zubuz-portfolio-data">
                    <h3>Nft Generator</h3>
                  </div>
                </div>
              </div>
            </a>
            <a
             
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="collection-grid-item zubuz-portfolio-wrap branding ui">
                <div className="zubuz-portfolio-thumb">
                  <img src="/assets/images/portfolio/image.png" alt="" />
                  <div className="zubuz-portfolio-data">
                    <h3>Linkedin Automation Tool</h3>
                  </div>
                </div>
              </div>
            </a>

          </div>
        </div>
      </div>
      {/* end section */}
    </>
  );
};

export default Portfolio;
