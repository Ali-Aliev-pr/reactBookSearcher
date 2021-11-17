import React from "react";
import './page.css';

function Page(props) {

    return (
        <div className="card">
            {/*<p>{props.text}</p>*/}
            <img src={props.img}/>
            <hr/>
            <p>{props.title}</p>
        </div>
    )
}

export default Page;