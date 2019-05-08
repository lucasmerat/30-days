import React from "react";
import "./style.css";
// import categories from "./categories.json";

function CategoryCard(props) {
  return (
    
    <div onClick={() => props.handleClick(props.id)} className="card">
      <div className="img-container">
        <img alt={props.name} src="https://spng.pngfly.com/20180601/elo/kisspng-check-mark-clip-art-true-sign-5b115b4133e421.2059374415278641292126.jpg" />
        <h4>{props.catgoryName}  </h4>
        
      </div>
     
    </div>
  );
}

export default CategoryCard;


