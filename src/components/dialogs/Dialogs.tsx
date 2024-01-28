import React from 'react';
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";
import path from "path";

export const DialogItem = (props:any) => {
    let path = '/dialogs/' + props.id
   return (
    <div className={s.dialog}>
        <NavLink to={path}>{props.name}</NavLink>
    </div>
        )
}
export const Message = (props:any) => {
    return (
        <div className={s.dialog}>{props.message}</div>
    )
}
export const Dialogs = (props: any) => {

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem name = 'Andrey' id = '1' />
                <DialogItem name = 'Dimych' id = '2' />
                <DialogItem name = 'Sveta' id = '3' />
                <DialogItem name = 'Masha' id = '4' />
                <DialogItem name = 'Valery' id = '5' />
                <DialogItem name = 'Victor' id = '6' />
                <DialogItem name = 'Igor' id = '7' />

            </div>
            <div className= {s.messages}>
                <Message message = "Hi"/>
                <Message message = "Hello"/>
                <Message message = "Good"/>

            </div>
        </div>
    )
}