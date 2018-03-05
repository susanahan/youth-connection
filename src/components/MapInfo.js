import React from "react";

const MapInfo = spot => {
  return (
    <div>
      Agency: {spot.agency}<br />
      Address: {spot.address} <br />
      Zip: {spot.location_1_zip}
    </div>
  );
};




export default MapInfo;