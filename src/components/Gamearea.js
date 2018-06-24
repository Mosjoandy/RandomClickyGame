import React from "react";
import styles from "./Gamearea.css"
import Card from "./Card";

const Gamearea = props => (
    <div className="container mainGame">
        <div className="row">
            <div className="col-md-12">
                <div>{props.children}</div>
            </div>
        </div>
    </div>
);

export default Gamearea;