import React from 'react';
import s from '/Users/kristinafinck/It-Incubator/Social network/social_network/src/components/profile/myPosts/post/post.module.css';
import {MyPostType, PostType} from "../../../../Types";


export const Post = (props: PostType) => {
    return (
        <div className={s.post}>
            <img alt='spirit' src='https://pm1.aminoapps.com/6583/90d784e833bbd3b576579ae600eb9944e5793da3_00.jpg'/>
            {props.postMessage}
            <div>
            <span>like</span>
            </div>
        </div>

    )
}