import React from 'react';
import s from "./post.module.css";

export const Post = (props: { message: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined; }) => {
    return (
        <div className={s.item}>
            <img alt='spirit' src='https://pm1.aminoapps.com/6583/90d784e833bbd3b576579ae600eb9944e5793da3_00.jpg'/>
            {props.message}
            <div>
            <span>like</span>
            </div>
        </div>

    )
}