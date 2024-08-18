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
import {MyPostType, PostType, ProfilePageType, ProfileType} from "./Types";
import {DialogType, MessageType} from "./Types";
import {StateType} from "./Types";
import {SideBar} from "./components/sideBar/SideBar";
import {addPost, updateNewPostText} from "./redax/state";

type AppType = {
    state: StateType
    addPost: (postMessage: string) => void
    updateNewPostText: (newText:string) => void
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
                                updateNewPostText={props.updateNewPostText}
                                addPost = {props.addPost}

                            />}/>
                        <Route path='/news' render={() => <News/>}/>
                        <Route path='/music' render={() => <Music/>}/>
                        <Route path='/settings' render={() => <Settings/>}/>
                    </Routes>
                </div>
            </div>

    );
}


