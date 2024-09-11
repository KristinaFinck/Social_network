import React from 'react';
import './App.css';
import {Header} from "./components/header/Header";
import {Navbar} from "./components/sideBar/navbar/Navbar";
import {Profile} from "./components/profile/Profile";
import {Dialogs} from "./components/dialogs/Dialogs";
import {BrowserRouter, Route, Switch as Routes} from "react-router-dom";
import {News} from "./components/news/News";
import {Music} from "./components/music/Music";
import {Settings} from "./components/settings/Settings";
import {ActionsTypes, MyPostType, PostType, ProfilePageType, ProfileType, StoreType} from "./Types";
import {DialogType, MessageType} from "./Types";
import {StateType} from "./Types";
import {SideBar} from "./components/sideBar/SideBar";


type AppType = {
    state: StateType
    dispatch: (action:ActionsTypes) => void
}

export const App = (props: AppType) => {

    return (

        <div className="app-wrapper">
            <Header/>
            <SideBar/>
            <div className='app-content-wrapper'>
                <Routes>
                    <Route path='/dialogs'
                           render={() => <Dialogs
                               state={props.state.dialogsPage}/>}/>
                    <Route path='/profile'
                           render={() =>
                               <Profile
                                   profilePage={props.state.profilePage}
                                   dispatch={props.dispatch}
                               />}/>
                    <Route path='/news' render={() => <News/>}/>
                    <Route path='/music' render={() => <Music/>}/>
                    <Route path='/settings' render={() => <Settings/>}/>
                </Routes>
            </div>
        </div>

    );
}


