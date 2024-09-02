
import './index.css';
import reportWebVitals from './reportWebVitals';

import store from './redax/state'
import {StateType} from "./Types";
import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import {App} from "./App";

const root = document.getElementById('root');
export let rerenderEntireTree = (state: StateType) => {
    ReactDOM.render(
            <BrowserRouter>
                <App state={store.getState()}
                     addPost={store.addPost.bind(store)}
                     updateNewPostText = {store.updateNewPostText.bind(store)}
                />
            </BrowserRouter>, root
    );
}

// Инициализируем первое рендеринг приложения
rerenderEntireTree(store.getState());
// Подписываем функцию рендера на изменения состояния
store.subscribe(() => rerenderEntireTree(store.getState()));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
