import React from "react";
import notify from "../../assets/icons/notify-me@2x.png";
import moneyBag from "../../assets/icons/money-bag@2x.png";
import "./Buttons.scss";

export const Buttons = () => {
  return (
    <section className="buttons">
      <div>
        <a className="buttons_link" href="https://app.playline.com/">
          {/* <figure> */}
          <button className="buttons_notify">
            <img
              className="buttons_notify-icon"
              src={notify}
              alt="a bell icon"
            />
            <p>Notify Me</p>
          </button>
          {/* </figure> */}
        </a>
      </div>
      <div>
        <a className="buttons_link" href="https://app.playline.com/">
          {/* <figure> */}
          <button className="buttons_deposit">
            <img
              className="buttons_deposit-icon"
              src={moneyBag}
              alt="a bar of money icon"
            />
            <p>Deposit</p>
          </button>
          <div className="line" />
          {/* </figure> */}
        </a>
      </div>
    </section>
  );
};
