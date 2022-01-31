import React from "react";
import "./CardHeader.scss";

export const CardHeader = () => {
  return (
    <section className="cardHeader">
      <h2 className="cardHeader_headerMain">YOUR PLAYLINE IS SET!</h2>
      <h3 className="cardHeader_headerSub">
        COME BACK @ 7:30PM TO TRACK IT LIVE!
      </h3>
      <div className="cardHeader_line" />
      <p className="cardHeader_para">
        Pro Tip: you can manage your Playline's until they go live in the
        Upcoming area
      </p>
    </section>
  );
};
