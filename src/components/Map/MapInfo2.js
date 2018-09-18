import React from "react";

const MapInfo2 = spot => {
   let address = spot.human_address
   let zipcode= spot.human_address.zip
   let convert =(obj) => {
        let string = JSON.stringify(obj)
        let newString = string.replace(/[`~!@#$%^&*()_|+\=÷¿?;:'",.<>\{\}\[\]\\\/]/gi, '');
        let mushString = newString.replace(/address|street|city|state/gi, "")
        return mushString.replace(/zip/gi, " Zipcode: ");
        
   }
  return (
    <div>
    Address: {convert(address)} <br />
    </div>
  );
};


export default MapInfo2;