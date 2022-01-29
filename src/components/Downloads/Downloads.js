import React from "react";
import appStore from "../../assets/icons/ios-app@2x.png";
import googlePlay from "../../assets/icons/google-play@2x.png";

export const Downloads = () => {
  return (
    <section className="downloads">
      <p>Download the App</p>
      <div>
        <a href="https://www.apple.com/ca/app-store/">
          <figure>
            <img src={appStore} alt="apple app store icon" />
          </figure>
        </a>
        <a href="https://play.google.com/store">
          <figure>
            <img src={googlePlay} alt="google play store icon" />
          </figure>
        </a>
      </div>
    </section>
  );
};
