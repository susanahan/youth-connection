import React from "react";

const MapInfo2 = spot => {
    let objToString =(obj)=> {
        return obj.split("");

    }
  return (
    <div>
    Address: {(spot.human_address)} <br />
      ZipCode: {spot.location_1_zip}
    </div>
  );
};


export default MapInfo2;