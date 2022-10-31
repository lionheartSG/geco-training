import "../components/MainPage.css"
import React from "react"
import NaviBar from "./NaviBar"

const MainPage = () => {
  return (
    <div className="main-page">
      <div className="hero-banner">
      <NaviBar />
        <div className="banner-left"></div>
        <div className="banner-right">
          <h6>Give Education</h6>
          <h1>Give a child the gift of Education</h1>
          <h5>Each donation is an essential help for everyone's life</h5>
          <button>DONATION NOW</button>
        </div>
      </div>
      <div className="about-aelpa">
        <div className="banner-left">
          <div id="satisfied-donors">
            <div>
              <h1>45K</h1>
              <hr />
              <h5>Satisfied donors</h5>
            </div>
          </div>
        </div>
        <div className="banner-right">
          <h6>ABOUT AELPA</h6>
          <h2>Aelpa Make an education charity donation today</h2>
          <p>Growing up in poverty, children face many challenges: hunger and health problems, limited access to education and medical services. Growing up in poverty children face many </p>
          <hr />
          <div className="about-us">
            <img src="../../about-7.png" alt="" />
            <p>20,000 poor children education and empowered</p>
          </div>

          <div className="about-us">
            <img src="../../about-8.png" alt="" />
            <p>42,000 children lifted from poverty</p>
          </div>

          <div className="about-us">
            <img src="../../about-9.png" alt="" />
            <p>9,000 children healthy and nourished</p>
          </div>
          <hr />

          <div className="about-us">
            <img src="../../about-6.png" alt="" />
            <p>Make an education charity donation today and give a child the opportunity for a brighter future.</p>
          </div>
        </div>
      </div>
      <div className="about-feature">
        <div className="about-feature-cards">
          <img src="../../feature-1.png" alt="" />
          <h3>We Donate</h3>
          <p>Vivamus in magna aclorm tellus fringilla eleifend sit</p>
        </div>
        <div className="about-feature-cards">
          <img src="../../feature-2.png" alt="" />
          <h3>Monthly Gift</h3>
          <p>Vivamus in magna aclorm tellus fringilla eleifend sit</p>
        </div>
        <div className="about-feature-cards">
          <img src="../../feature-3.png" alt="" />
          <h3>Gift Catalog</h3>
          <p>Vivamus in magna aclorm tellus fringilla eleifend sit</p>
        </div>
        <div className="about-feature-cards">
          <img src="../../feature-4.png" alt="" />
          <h3>We Educate</h3>
          <p>Vivamus in magna aclorm tellus fringilla eleifend sit</p>
        </div>
      </div>
      <div className="feature-causes">
        <h6>FEATURE CAUSES</h6>
        <h2>Most of the Poor rural Children our futures companies</h2>
        <div className="feature-causes-cards">
          <div className="feature-causes-card">
            <img src="../../cause-10.jpg" alt="" />
            <div className="feature-causes-button" style={{ backgroundColor: "orangered" }}>
              Education
            </div>
            <h4>A more tailored and cost effective donor journey</h4>
            <p>Lot of fund lorem Ipsum is simply dummy of the printing and typesetting industry</p>
          </div>
          <div className="feature-causes-card">
            <img src="../../cause-9.jpg" alt="" />
            <div className="feature-causes-button" style={{ backgroundColor: "orangered" }}>
              Donation
            </div>
            <h4>Give Education for homeless Poor Children</h4>
            <p>Lot of fund lorem Ipsum is simply dummy of the printing and typesetting industry</p>
          </div>
          <div className="feature-causes-card">
            <img src="../../cause-8.jpg" alt="" />
            <div className="feature-causes-button" style={{ backgroundColor: "orangered" }}>
              Programs
            </div>
            <h4>A more tailored and cost effective donor journey</h4>
            <p>Lot of fund lorem Ipsum is simply dummy of the printing and typesetting industry</p>
          </div>
          <div className="feature-causes-card">
            <img src="../../cause-7.jpg" alt="" />
            <div className="feature-causes-button" style={{ backgroundColor: "orangered" }}>
              Food
            </div>
            <h4>Street 100 million children homelessness</h4>
            <p>Lot of fund lorem Ipsum is simply dummy of the printing and typesetting industry</p>
          </div>
        </div>
        <div id="shape-group">
          <div id="circle"></div>
          <div id="circle"></div>
          <div id="square"></div>
        </div>
      </div>
    </div>
  )
}

export default MainPage
