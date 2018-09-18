import React from "react";



 const JobsMarker = ({ spot, selected, onRatClick }) => (
  <img
    className={selected ? "spot selected" : "spot"}
    alt=""
    src='https://png.icons8.com/office/30/000000/us-dollar.png'
    onClick={() => onRatClick(spot)}

  />
);

export default JobsMarker;