import React from "react";
import { Cuisines } from "./LeftData";

const Cuisine = ({onChange}) => {
  // const testChecked = (e) => {
  //   console.log("event ===>", e.target.checked);
  // };

  return (
    <div>
      {Cuisines.map((cui) => (
        <div key={cui.id} className="changeCheckbox">
          <p>{cui.label}</p>
          <input type="checkbox" onChange={(e) => onChange(cui.label.toLowerCase(), e.target.checked)}
          />
        </div>
      ))}
    </div>
  );
};
 
export default Cuisine;