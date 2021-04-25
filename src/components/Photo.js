import React from 'react';
import {Link} from "react-router-dom";
import ModalWindow from "./ModalWindow";


function Photo(props) {

    const handleModal = () => {
        return <ModalWindow  />
    }
    return (
        <div className="photo">
            <Link to={`/${props.photo.id}`}>
            <img src={props.photo.url}
                onClick={handleModal}
            />
            </Link>
        </div>
    );
}

export default Photo;