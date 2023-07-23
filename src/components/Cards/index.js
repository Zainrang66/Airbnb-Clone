import React from "react";
import "./styles.css";
import Card from "./card";
import { list2 } from "../../assets/cards-list";

function Cards(){
    return (
    <div className="cards-flex">
        {list2.map((card, i) => (
            <Card card={card} key={i} />
        ))}
    </div>
    );
}

export default Cards;