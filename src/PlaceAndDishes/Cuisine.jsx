import React from "react";
import { Cuisines } from "./LeftData";

const Cuisine = ({onChange, selectedCuisine}) => {
  // const testChecked = (e) => {
  //   console.log("event ===>", e.target.checked);
  // };

  return (
    <div>
      {Cuisines.map((cui) => (
        <form key={cui.id} className="changeCheckbox">
          <p>{cui.label}</p>
          <input 
            type="checkbox" 
            checked={selectedCuisine === cui.label.toLowerCase()} 
            onChange={(e) => onChange(cui.label.toLowerCase(), e.target.checked)}
          />
        </form>
      ))}
    </div>
  );
};
 
export default Cuisine;