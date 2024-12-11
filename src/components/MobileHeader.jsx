// MobileHeader.js
import React from "react";
import MobileMenu from "./MobileMenu";
import MobileAccount from "./MobileAccount";
import MobileSocialIcon from "./MobileSocialIcon";

const MobileHeader = () => {
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
            <MobileMenu />
            <MobileAccount />
            <MobileSocialIcon />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileHeader;
