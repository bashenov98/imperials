import React from 'react';
import {Route, Routes} from "react-router-dom";
import About from "./components/About/About";
import Mint from "./components/Mint/Mint";
import Game from "./components/Game/Game";
import Staking from "./components/Staking/Staking";

const Router = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<About/>}/>
                <Route path="/mint" element={<Mint/>}/>
                <Route path="/game" element={<Game/>}/>
                <Route path="/staking" element={<Staking/>}/>
            </Routes>
        </div>
    );
};

export default Router;