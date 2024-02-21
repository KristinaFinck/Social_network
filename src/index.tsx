import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {App} from './App';
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
    messagesData: MessageType[]
};
 export let posts: PostType[] = [
    {id: 1, message: 'Hello', likesCount: 12},
    {id: 2, message: 'Good bye', likesCount: 11},
    {id: 3, message: 'It\'s my blog', likesCount: 11},
    {id: 4, message: 'I\'m crazy cool', likesCount: 11},
]

export  let dialogsData: DialogType[] = [
    {id: 1, name: 'Andrey'},
    {id: 2, name: 'Dimych'},
    {id: 3, name: 'Sveta'},
    {id: 4, name: 'Masha'},
    {id: 5, name: 'Valery'},
    {id: 6, name: 'Victor'},
    {id: 7, name: 'Igor'},
]

export let messagesData = [
    {message: "Hi"},
    {message: "Hello"},
    {message: "Good"},
]
root.render(
  <React.StrictMode>
    <App
        posts = {posts}
        dialogs={dialogsData}
        messagesData={messagesData}

    />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
