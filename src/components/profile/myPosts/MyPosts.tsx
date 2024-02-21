import React from "react";
import s from './myPosts.module.css';
import {Post} from "./post/Post";

export type MyPostType = {
    posts: PostType[]
};
export type PostType = {
    id: number,
    message: string,
    likesCount: number
};
export const MyPosts = (props: MyPostType) => {

    let postElement = props.posts.map((p) => (<Post id={p.id} message={p.message} likesCount = {p.likesCount}/>))

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
                    {postElement}
                </div>
            </div>
        </div>
    )
}