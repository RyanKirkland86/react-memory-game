import React from "react";
import "./style.css";

function CocktailCard(props) {
    return (
        <div className="col-3 d-flex" key={props.id}>
            <img className="img-fluid mx-auto" src={props.image} alt={props.name} data-id={props.id} onClick={props.handleClick} />
        </div>
    )
}

export default CocktailCard;