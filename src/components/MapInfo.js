import React from "react";

const MapInfo = spot => {
  return (
    <div>
  
      Location type: {spot.address} <br />
      Zip: {spot.location_1_zip}<br />
      Agency: {spot.agency}
    </div>
  );
};




export default MapInfo;