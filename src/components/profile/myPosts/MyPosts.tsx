import React, {useRef} from "react";
import s from './myPosts.module.css';
import {Post} from "./post/Post";
import {MyPostType} from "../../../Types";
import store from "../../../redax/state";


export const MyPosts = (props: MyPostType) => {

    let postElement = props.posts.map((p) => (<Post key={p.id} id={p.id} postMessage={p.postMessage} likesCount = {p.likesCount}/>))
    const newPostElement = useRef<HTMLTextAreaElement>(null);
  const onAddPost = () => {
      // let text = props.newPostText;  // Получаем текст из состояния
      // if (text.trim()) {  // Проверка на пустую строку
      //     props.addPost(text);  // Добавляем пост
      //     props.updateNewPostText('');  // Очищаем состояние, что приводит к очищению textarea
     props.dispatch({type: 'ADD-POST'})
      }

    let onPostChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        const text = event.target.value;
        props.dispatch({type: 'UPDATE-NEW-POST-TEXT', newText: text})
    }

    return (
        <div className={s.postsBlock}>
           <h3>My posts</h3>
            <div>
                <textarea ref = {newPostElement}
                          onChange={onPostChange}
                          value = {props.newPostText}
                />
            </div>
            <div>
                <button onClick={onAddPost}>Add post</button>
            </div>
            <div>
                <div className={s.posts}>
                    {postElement}
                </div>
            </div>
        </div>
    )
}