import React from "react";

export default function Products() {
  return (
<div className="section zubuz-section-padding3 ">
  <div className="container">
    <div className="zubuz-section-title left">
      <h2 style={{ fontSize: '50px' }}>Products</h2>
    </div>
    <div className="row">
    <div className="col-xl-4 col-md-6">
 <div className="zubuz-testimonial-wrap center">
    <a href="https://www.sopay.ai/" target="_blank" rel="noopener noreferrer">
      <img src="/assets/images/v1/sopay.png" alt="Description of the image" className="cover-image" />
    </a>
    <div className="zubuz-iconbox-data">
      <h3>Sopay</h3>
      <p>
        New Gen Crypto Wallet
      </p>
    </div>
 </div>
</div>


<div className="col-xl-4 col-md-6">
 <div className="zubuz-testimonial-wrap center">
    <a href="https://ezyforms.io/" target="_blank" rel="noopener noreferrer">
      <img src="/assets/images/v1/ezyform.png" alt="Description of the image" className="cover-image" />
    </a>
    <div className="zubuz-iconbox-data">
      <h3>EzyForms</h3>
      <p>
      Business Automation Tool
      </p>
    </div>
 </div>
</div>
<div className="col-xl-4 col-md-6">
 <div className="zubuz-testimonial-wrap center">
    <a href="https://app.pt7.io/auth/login" target="_blank" rel="noopener noreferrer">
      <img src="/assets/images/v1/patient7.png" alt="Description of the image" className="cover-image" />
    </a>
    <div className="zubuz-iconbox-data">
      <h3>Patient7</h3>
      <p>
SAAS Management Software
      </p>
    </div>
 </div>
</div>
    </div>
  </div>
</div>

  )};