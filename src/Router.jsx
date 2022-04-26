import React from 'react';
import {Route, Routes} from "react-router-dom";
import About from "./components/About/About";

const Router = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<About/>}/>
            </Routes>
        </div>
    );
};

export default Router;