import React from "react";
import "./style.css";

function Navbar(props) {
    return (
        <div className="row sticky-top d-flex align-items-center w-100 p-3" id="topbar">
            <div className="col-4">
                <h3 className="text-center">Cocktail Memory Game!</h3>
            </div>
            <div className="col-4">
                <h4 className="text-center"> {props.message} </h4>
            </div>
            <div className="col-4">
                <h4 className="text-center">Score: {props.score} | High Score: {props.highScore}</h4>
            </div>
        </div>
    )
}

export default Navbar;