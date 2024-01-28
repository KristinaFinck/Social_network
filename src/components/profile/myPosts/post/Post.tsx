import React from 'react';
import s from "./post.module.css";

export const Post = (props: any) => {
    return (
        <div className={s.post}>
            <img alt='spirit' src='https://pm1.aminoapps.com/6583/90d784e833bbd3b576579ae600eb9944e5793da3_00.jpg'/>
            {props.message}
            <div>
            <span>like</span>
            </div>
        </div>

    )
}