import React, { useState, useEffect } from "react";
import { Button } from "./Button";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
            24h Report
            <img class="logo" src="/images/sos_icon.png" alt="logo"></img>
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                Trang chủ
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/news" className="nav-links" onClick={closeMobileMenu}>
                Tin tức
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/sendReport"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Báo cáo
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/installApp"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Cài đặt ứng dụng
              </Link>
            </li>
            <li>
              <Link
                to="/sign-in"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Đăng nhập
              </Link>
            </li>

            <li>
              <Link
                to="/sign-up"
                className="nav-links-mobile"
                onClick={closeMobileMenu}
              >
                ĐĂNG KÍ
              </Link>
            </li>
          </ul>

          {button && <Button buttonStyle="btn--outline">ĐĂNG KÍ</Button>}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
