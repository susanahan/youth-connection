import React from "react";



 const AsMarker = ({ spot, selected, onRatClick2 }) => (
  <img
    className={selected ? "spot selected" : "spot"}
    alt=""
    src='https://png.icons8.com/color/30/000000/school-backpack.png'
    onClick={() => onRatClick2(spot)}

  />
);

export default AsMarker;