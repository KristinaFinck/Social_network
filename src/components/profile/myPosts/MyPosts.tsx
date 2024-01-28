import React from "react";
import s from './myPosts.module.css';
import {Post} from "./post/Post";

export const MyPosts = () => {
    return (
        <div className={s.postsBlock}>
           <h3>My posts</h3>
            <div>
                <textarea></textarea>
            </div>
            <div>
                <button>Add post</button>
            </div>
            <div>
                <div className={s.posts}>
                    <Post message='Hello' />
                    <Post message='Its my blog' />
                    <Post message='First m'/>
                    <Post message='good'/>
                </div>
            </div>
        </div>
    )
}