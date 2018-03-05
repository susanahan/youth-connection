import React from "react";

const MapInfo2 = spot => {
   let address = spot.human_address
   let zipcode= spot.human_address.zip
   let convert =(obj) => {
        let string = JSON.stringify(obj)
        return string.replace(/[`~!@#$%^&*()_|+\=÷¿?;:'",.<>\{\}\[\]\\\/]/gi, '');
        
   }
  return (
    <div>
    Address: {convert(address)} <br />
      ZipCode: {zipcode}
    </div>
  );
};


export default MapInfo2;