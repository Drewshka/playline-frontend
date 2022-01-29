import React from "react";
// import notify from "../assets/icons/notify-me@2x.png";
// import moneyBag from "../assets/icons/money-bag@2x.png";
import notify from "../../assets/icons/notify-me@2x.png";
import moneyBag from "../../assets/icons/money-bag@2x.png";

export const Buttons = () => {
  return (
    <section className="buttons">
      <div>
        <a href="https://app.playline.com/">
          {/* <figure> */}
          <button>
            <img src={notify} alt="a bell icon" />
            <p>Notify Me</p>
          </button>
          {/* </figure> */}
        </a>
      </div>
      <div>
        <a href="https://app.playline.com/">
          {/* <figure> */}
          <button>
            <img src={moneyBag} alt="a bar of money icon" />
            <p>Deposit</p>
          </button>
          <div className="line" />
          {/* </figure> */}
        </a>
      </div>
    </section>
  );
};
