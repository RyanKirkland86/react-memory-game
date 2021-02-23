import React from "react";
import "./style.css";

function CocktailCard(props) {
    return (
        <div className="col-3 d-flex" key={props.id}>
            <img className="img-fluid mx-auto" src={props.image} alt={props.name} />
        </div>
    )
}

export default CocktailCard;