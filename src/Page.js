import React, {useState} from "react";
import Modal from "./modal/Modal";
import './page.css';

function Page(props) {

    const [modal, setModal] = useState(false)

    return (
        <div className="card">
            <img src={props.img}/>
            <hr/>
            <p>{props.title}</p>
            {/*<p>{props.description}</p>*/}
            <button onClick={() => {setModal(true)}}>Подробное описание!</button>
            <Modal text={props.description} active={modal} setActive={setModal}/>
        </div>
    )
}

export default Page;