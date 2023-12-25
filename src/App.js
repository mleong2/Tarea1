import React, {useEffect, useState} from 'react';
import Router from "./routes/Router";
import {MakeupContext} from "./context/MakeupContext";
import {Footer} from "./components/Footer";
import {useMakeups} from "./hooks/useMakeups";
import ilia from "./img/ilia2.jpg";


function App() {

    const makeups = useMakeups();
    console.log(makeups)

    return (

        <MakeupContext.Provider value={{makeups}}>
            <Router></Router>

        </MakeupContext.Provider>
    );
}

export default App;
