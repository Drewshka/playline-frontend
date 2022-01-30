import React from "react";
import appStore from "../../assets/icons/ios-app@2x.png";
import googlePlay from "../../assets/icons/google-play@2x.png";
import "./Downloads.scss";

export const Downloads = () => {
  return (
    <section className="downloads">
      <div className="downloads_line" />
      <h4 className="downloads_para">DOWNLOAD THE APP</h4>
      <div className="downloads_container">
        <a href="https://www.apple.com/ca/app-store/">
          <figure className="downloads_container-figure">
            <img
              src={appStore}
              alt="apple app store icon"
              className="downloads_container-figure-img"
            />
          </figure>
        </a>
        <a href="https://play.google.com/store">
          <figure className="downloads_container-figure">
            <img
              src={googlePlay}
              alt="google play store icon"
              className="downloads_container-figure-img"
            />
          </figure>
        </a>
      </div>
    </section>
  );
};
