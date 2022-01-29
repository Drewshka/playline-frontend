// import React from "react";
// // import photos from "../assets/headshots";

// // export const PlayerCard = ({name, points}) => {

// export default function PlayerCard({ name, points }) {
//   const imageURL = `../assets/headshots/${name}.png`;

//   console.log(imageURL);

//   return (
//     <div className="playerCard">
//       <figure>
//         <img className="playerIcon" src={imageURL} alt="headshot" />
//       </figure>
//       <div className="playerInfo">
//         <h3>{name}</h3>
//         <div className="pointBackdrop">
//           <p className="points">{points}</p>
//         </div>
//         <p>pts</p>
//       </div>
//     </div>
//   );
// }

import React from "react";

export const PlayerCard = ({ name, points, i }) => {
  const image = require(`../assets/headshots/${name}.png`);
  console.log(name);

  return (
    <div className="playerCard">
      <figure>
        <img className="playerIcon" src={image} alt="headshots" />
      </figure>
      <div className="playerInfo">
        <h3>{name}</h3>
        <div className="pointBackdrop">
          <p className="points">{points}</p>
        </div>
        <p>pts</p>
      </div>
    </div>
  );
};
