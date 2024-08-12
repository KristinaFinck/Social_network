import React from 'react';
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";
import path from "path";
import {state} from '../../redax/state';
import {DialogsPageType, MessageType, DialogType, StateType} from "../../Types";


export const DialogItem = (props:DialogType) => {
    let path = '/dialogs/' + props.id
   return (
    <div className={s.dialog}>
        <NavLink to={path}>{props.name}</NavLink>
    </div>
        )
}
export const Message = (props:MessageType) => {
    return (
        <div className={s.dialog}>{props.message}</div>
    )
}
export const Dialogs = (props:{ state: DialogsPageType }) => {


    let dialogElement = props.state.dialogs.map(d => (<DialogItem id = {d.id} name = {d.name} />));
  let messageElement = props.state.messages.map( m => (<Message message = {m.message}/>));
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                { dialogElement }
                {/*<DialogItem id = {dialogsData[0].id} name = {dialogsData[0].name} />*/}
                {/*<DialogItem id = {dialogsData[1].id} name = {dialogsData[1].name} />*/}
                {/*<DialogItem id = {dialogsData[2].id} name = {dialogsData[2].name} />*/}
                {/*<DialogItem id = {dialogsData[3].id} name = {dialogsData[3].name} />*/}
                {/*<DialogItem id= {dialogsData[4].id} name = {dialogsData[4].name} />*/}
                {/*<DialogItem  id= {dialogsData[5].id} name = {dialogsData[5].name} />*/}
                {/*<DialogItem id = {dialogsData[6].id} name = {dialogsData[6].name} />*/}


            </div>
            <div className= {s.messages}>
                { messageElement }
                {/*<Message message = {messagesData[0].message}/>*/}
                {/*<Message message = {messagesData[1].message}/>*/}
                {/*<Message message = {messagesData[2].message}/>*/}

            </div>
        </div>
    )
}