import React from "react";
import { categoryList } from "./LeftData";

const Category = ({ onFilter }) => {
    return (  
        categoryList.map((choose) => {
            return (
                <div className="Category" key={choose.id}>
                    <button onClick={() => onFilter(choose.value)}>
                        {choose.label}
                    </button>
                </div>
            )
        })
    );
}
 
export default Category;