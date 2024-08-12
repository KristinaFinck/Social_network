import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {App} from './App';
import {state, StateType} from './redax/state'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
export type PostType = {
    id: number,
    message: string,
    likesCount: number
};

export type MyPostType = {
    posts: PostType[]
};

export type DialogType = {
    id: number,
    name: string
};
export type MessageType = {
    message: string
};
export type DialogsDataType = {
    dialogs: DialogType[],
    messages: MessageType[]
};



// Рендеринг приложения
root.render(
    <React.StrictMode>
        <App appState={state} />
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
