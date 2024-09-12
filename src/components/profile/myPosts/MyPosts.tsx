
import React, {useRef} from "react";
import s from './myPosts.module.css';
import {Post} from "./post/Post";
import {AddPostActionType, MyPostType, UpdateNewPostActionType} from "../../../Types";

let addPostActionCreator = (): AddPostActionType => {
    return {type: 'ADD-POST'};
}

let updateNewPostTextActionCreator = (newText: string): UpdateNewPostActionType => {
    return {type: 'UPDATE-NEW-POST-TEXT', newText};
}

export const MyPosts = (props: MyPostType) => {

    let postElement = props.posts.map((p) => (
        <Post key={p.id} id={p.id} postMessage={p.postMessage} likesCount={p.likesCount} />
    ));

    const newPostElement = useRef<HTMLTextAreaElement>(null);

    let onPostChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        const text = event.target.value;
        let action = updateNewPostTextActionCreator(text);
        props.dispatch(action);
    };

    const onAddPost = () => {
        props.dispatch(addPostActionCreator());
    };

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <textarea
                    ref={newPostElement}
                    onChange={onPostChange}
                    value={props.newPostText}
                />
            </div>
            <div>
                <button onClick={onAddPost}>Add post</button>
            </div>
            <div className={s.posts}>
                {postElement}
            </div>
        </div>
    );
};

