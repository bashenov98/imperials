import React from 'react';
import {Route, Routes} from "react-router-dom";
import About from "./components/About/About";
import Mint from "./components/Mint/Mint";

const Router = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<About/>}/>
                <Route path="/mint" element={<Mint/>}/>
            </Routes>
        </div>
    );
};

export default Router;