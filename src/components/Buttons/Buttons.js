import React from "react";
import bellIcon from "../../assets/icons/notify-me@2x.png";
import moneyBagIcon from "../../assets/icons/money-bag@2x.png";
import "./Buttons.scss";

export const Buttons = () => {
  return (
    <section className="buttons">
      <div>
        <a className="buttons_link" href="https://app.playline.com/">
          <button className="buttons_notify">
            <img
              className="buttons_notify-icon"
              src={bellIcon}
              alt="a bell icon"
            />
            <p className="buttons_notify-para">Notify Me</p>
          </button>
        </a>
      </div>
      <div>
        <a className="buttons_link" href="https://app.playline.com/">
          <button className="buttons_deposit">
            <img
              className="buttons_deposit-icon"
              src={moneyBagIcon}
              alt="a bar of money icon"
            />
            <p className="buttons_deposit-para">Deposit</p>
          </button>
          <div className="line" />
        </a>
      </div>
    </section>
  );
};
