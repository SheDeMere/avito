import React from 'react';
import Photos from "./Photos";
import ModalWindow from "./ModalWindow";
import { Route } from "react-router-dom";
function Main(props) {
    return (
        <div>
            <Photos />
            <Route path="/:id?">
            <ModalWindow />
            </Route>
        </div>
    );
}

export default Main;