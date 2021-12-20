import React from "react";

function InfoCard(props){
    return(
        <div>
            <li key={props.key}>
              <img src={props.img} alt="" />
              <p>{props.title}</p>
            </li>
        </div>
    )
}

export default InfoCard;