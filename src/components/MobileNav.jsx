import React from 'react';

const MobileNav = () => {
  return (
    <div className="mobile-header-active mobile-header-wrapper-style perfect-scrollbar">
      <div className="mobile-header-wrapper-inner">
        <div className="mobile-header-top">
          <div className="user-account">
            <img src="assets/imgs/avatar/ava_1.png" alt="jobhub" />
            <div className="content">
              <h6 className="user-name">Howdy, <span className="text-brand">AliThemes</span></h6>
              <p className="font-xs text-muted">You have 2 new messages</p>
            </div>
          </div>
          <div className="burger-icon burger-icon-white">
            <span className="burger-icon-top"></span>
            <span className="burger-icon-mid"></span>
            <span className="burger-icon-bottom"></span>
          </div>
        </div>
        <div className="mobile-header-content-area">
          <div className="perfect-scroll">
            <div className="mobile-search mobile-header-border mb-30">
              <form action="#">
                <input type="text" placeholder="Search for items…" />
                <i className="fi-rr-search"></i>
              </form>
            </div>
            <div className="mobile-menu-wrap mobile-header-border">
              {/* Mobile menu content here */}
            </div>
            <div className="mobile-account">
              <h6 className="mb-10">Your Account</h6>
              <ul className="mobile-menu font-heading">
                <li><a href="#">Profile</a></li>
                {/* Other account options */}
              </ul>
            </div>
            <div className="mobile-social-icon mb-50">
              <h6 className="mb-25">Follow Us</h6>
              {/* Social icons here */}
            </div>
            <div className="site-copyright">Copyright 2022 © JobHub. <br />Designed by AliThemes.</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileNav;
