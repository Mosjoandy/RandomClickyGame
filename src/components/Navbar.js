import React from "react";

const Navbar = props => (

    <ul className="nav text-center bg-dark text-light pt-3 pb-3 sticky-top">

    <li className="nav-item col-md-4">
        <a className="nav-link text-light " href="#"><h2 className="font-weight-bold">Clicky Game</h2></a>
    </li>

    <li className="nav-item col-md-4">
        <h2 className="mt-2">Click any image to begin!</h2>
    </li>

    <li className="nav-item col-md-4">
        <h2 className="mt-2">
        Score: {props.score} | Top Score: {props.highscore}
        </h2>
    </li>

    </ul>

)

export default Navbar;