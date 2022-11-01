import "./Footer.css"
import React from "react"

export const Footer = ({backgroundColor, fontColor, linkColor}) => {
  return (
    <>
      <footer className="footer" style={{backgroundColor: backgroundColor, color: fontColor, }}>
        <div className="footer__addr">
          <h1 className="footer__logo">Abdul Rafi</h1>
          <h2>6546 0000</h2>
          <address>
            Republic of Singapore
            <a className="footer__btn" href="mailto:example@gmail.com">
              Email Me
            </a>
          </address>
        </div>
        <ul className="footer__nav">
          <li className="nav__item">
            <h2 className="nav__title">Media</h2>
            <ul className="nav__ul">
              <li>
                <a href="#" style={{color: linkColor}}>Online</a>
              </li>
              <li>
                <a href="#" style={{color: linkColor}}>Print</a>
              </li>
              <li>
                <a href="#" style={{color: linkColor}}>Alternative Ads</a>
              </li>
            </ul>
          </li>
          <li className="nav__item nav__item--extra">
            <h2 className="nav__title">Technology</h2>

            <ul className="nav__ul nav__ul--extra">
              <li>
                <a href="#" style={{color: linkColor}}>Hardware Design</a>
              </li>
              <li>
                <a href="#" style={{color: linkColor}}>Software Design</a>
              </li>
              <li>
                <a href="#" style={{color: linkColor}}>Digital Signage</a>
              </li>
              <li>
                <a href="#" style={{color: linkColor}}>Automation</a>
              </li>
              <li>
                <a href="#" style={{color: linkColor}}>Artificial Intelligence</a>
              </li>
              <li>
                <a href="#" style={{color: linkColor}}>IoT</a>
              </li>
            </ul>
          </li>

          <li className="nav__item">
            <h2 className="nav__title">Legal</h2>

            <ul className="nav__ul">
              <li>
                <a href="#" style={{color: linkColor}}>Privacy Policy</a>
              </li>

              <li>
                <a href="#" style={{color: linkColor}}>Terms of Use</a>
              </li>

              <li>
                <a href="#" style={{color: linkColor}}>Sitemap</a>
              </li>
            </ul>
          </li>
        </ul>
        <div className="legal">
          <p>&copy; 2022</p>
          <div className="legal__links">
            <span>
              To Do List made with <span className="heart">♥</span> by Abdul Rafi
            </span>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
