import React from "react";
import s from './myPosts.module.css';
import {Post} from "./post/Post";

export const MyPosts = () => {
    return (
        <div>
            My posts
            <div>
                <textarea></textarea>
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