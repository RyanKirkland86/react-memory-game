import React from "react";
import "./style.css";

function CocktailCard(props) {
    return (
        <div className="img-container col-3 d-flex" id={props.id}>
            <img src={props.image} alt={props.name} />
        </div>
    )
}

export default CocktailCard;