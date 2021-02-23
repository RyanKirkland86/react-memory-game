import React from "react";
import "./style.css";

function Header(props) {
    return (
        <div className="row d-flex align-items-center w-100 p-3" id="header">
            <div className="col-12">
                <h1 className="text-center">Cocktail Memory Game!</h1>
            </div>
            <div className="col-12">
                <p className="text-center">Click on an image to earn points, but don't click on it any more than once!</p>
            </div>
        </div>
    )
}

export default Header;