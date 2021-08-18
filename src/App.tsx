import React, {useEffect, useState} from 'react';
import './App.css';
import './utils.css';
import Crypto from "./Component/Crypto/Crypto";
import Header from "./Component/Header/Header";


function App() {


    return (
        <div className="App">
            <Header/>
            <div className="">
                <Crypto/>
            </div>
        </div>
    );
}

export default App;
