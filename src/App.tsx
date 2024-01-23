import React from 'react';
import './App.css';
import {Header} from "./components/header/Header";
import {Navbar} from "./components/navbar/Navbar";
import {Profile} from "./components/profile/Profile";
import {Dialogs} from "./components/dialogs/Dialogs";
import {BrowserRouter, Route, Switch as Routes} from "react-router-dom";

const App = () => {
    return (
        <BrowserRouter>
        <div className="app-wrapper">
            <Header/>
            <Navbar/>
            <div className='app-content-wrapper'>
                <Routes>
                <Route path='/dialogs' render = {() => <Dialogs />} />
                <Route path='/profile' render = {() => <Profile />} />
                </Routes>
            </div>
        </div>
        </BrowserRouter>
    );
}

export default App;
