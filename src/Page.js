import React from "react";

function Page(props) {
    return (
        <div>
            <h3>{props.title}</h3>
            <p>{props.text}</p>
            <img src={props.img}/>
        </div>
    )
}

export default Page;