import React from "react";
import styles from "./Header.css";

const Header = () => (
    <div >

        <div className="text-center headingOne text-light ">
            <div className="jumbotron jumbotron-fluid bg-transparent pushTop">
                <h1>Clicky Game</h1>
                <h4>Click on an image to score, but if you click on an image twice, you lose!</h4>
            </div>
        </div>

    </div>
);

export default Header;