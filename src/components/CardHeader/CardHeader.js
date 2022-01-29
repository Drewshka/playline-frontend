import React from "react";
// import {LineElement} from "./LineElement";

export const CardHeader = () => {
  return (
    <section className="cardHeader">
      <h2>Your Playline is Set!</h2>
      <h3>Come back @ 7:30pm to track it live!</h3>
      {/* <LineElement /> */}
      <div className="line" />
      <p>
        Pro Tip: you can manage your Playline's until they go live in the
        Upcoming area
      </p>
    </section>
  );
};
