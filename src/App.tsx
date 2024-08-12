import React from 'react';
import './App.css';
import {Header} from "./components/header/Header";
import {Navbar} from "./components/navbar/Navbar";
import {Profile} from "./components/profile/Profile";
import {Dialogs} from "./components/dialogs/Dialogs";
import {BrowserRouter, Route, Switch as Routes} from "react-router-dom";
import {News} from "./components/news/News";
import {Music} from "./components/music/Music";
import {Settings} from "./components/settings/Settings";
import {MyPostType, PostType} from "./Types";
import {DialogType, MessageType} from "./Types";
import {StateType} from "./Types";

type AppType = {
    state: StateType
}

export const App = (props: AppType) => {

    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Navbar/>
                <div className='app-content-wrapper'>
                    <Routes>
                        <Route path='/dialogs'
                               render={() => <Dialogs
                                   state={props.state.dialogsPage}/>}/>
                        <Route path='/profile' render={() =>
                            <Profile state={props.state.profilePage}/>}/>
                        <Route path='/news' render={() => <News/>}/>
                        <Route path='/music' render={() => <Music/>}/>
                        <Route path='/settings' render={() => <Settings/>}/>
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
}


