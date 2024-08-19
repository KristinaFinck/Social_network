
import './index.css';
import reportWebVitals from './reportWebVitals';

import {addPost, state, subscribe, updateNewPostText} from './redax/state'
import {StateType} from "./Types";
import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import {App} from "./App";

const root = document.getElementById('root');
export let rerenderEntireTree = (state: StateType) => {
    ReactDOM.render(
            <BrowserRouter>
                <App state={state}
                     addPost={addPost}
                     updateNewPostText = {updateNewPostText}
                />
            </BrowserRouter>, root
    );
}
// Подписываем функцию рендера на изменения состояния
subscribe(rerenderEntireTree);
// Инициализируем первое рендеринг приложения
rerenderEntireTree(state);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
