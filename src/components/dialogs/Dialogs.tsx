import React from 'react';
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";
import path from "path";
import {state} from '../../redax/state';
import {DialogsPageType, MessageType, DialogType, StateType} from "../../Types";


export const DialogItem = (props: DialogType) => {
    let path = '/dialogs/' + props.id
    return (
        <div className={s.dialog}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}
export const Message = (props: MessageType) => {
    return (
        <div className={s.message}>{props.message}</div>
    )
}
// export const Dialogs = (props: { state: DialogsPageType }) => {
//     // Перебор массива диалогов и создание списка элементов
//     let dialogElement = props.state.dialogs.map(d => (<DialogItem
//         key={d.id}
//         id={d.id}
//         name={d.name}
//         avatar={d.avatar}/>));
//     // Перебор массива сообщений и создание списка элементов
//     let messageElement = props.state.messages.map(m => (<Message key={m.message} message={m.message}/>));


//  cделаем так, чтобы аватарка, имя пользователя и сообщение было в одном диве
export const Dialogs = (props: { state: DialogsPageType }) => {
    // Комбинирование диалогов и сообщений в одном блоке
    let combinedElements = props.state.dialogs.map((dialog, index) => (
        <div key={dialog.id} className={s.dialogWithMessage}>
            <DialogItem id={dialog.id} name={dialog.name} avatar={dialog.avatar} />
            {props.state.messages[index] && (
                <Message message={props.state.messages[index].message} />
            )}
        </div>
    ));
    return (
        // <div className={s.dialogs}>
        //     <div className={s.dialogsItems}>
        //         {dialogElement}
        //
        //
        //     </div>
        //     <div className={s.messages}>
        //
        //           {messageElement}


         //   </div>
       // </div>
        <div className={s.dialogs}>
            {combinedElements}
        </div>
    )
}