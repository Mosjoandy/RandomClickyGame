import React from "react";
import styles from "./Card.css"

const Card = props => (

    <span onClick={() => props.cardClick(props.id)}>
        <img alt={props.id} src={props.img} />
    </span>
)

export default Card;