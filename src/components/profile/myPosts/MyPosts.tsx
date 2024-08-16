import React, {useRef} from "react";
import s from './myPosts.module.css';
import {Post} from "./post/Post";
import {MyPostType} from "../../../Types";
import {addPost} from "../../../redax/state";


export const MyPosts = (props: MyPostType) => {

    let postElement = props.posts.map((p) => (<Post id={p.id} postMessage={p.postMessage} likesCount = {p.likesCount}/>))
    const newPostElement = useRef<HTMLTextAreaElement>(null);
  const onAddPost = () => {
      // Получаем значение из textarea
        const newPostMessage = newPostElement.current?.value || '';
      // Вызываем функцию добавления поста, передавая текст
        props.addPost(newPostMessage);
      // Очищаем текстовое поле после добавления поста, если ref не null
      if (newPostElement.current) {
          newPostElement.current.value = '';  // Это удалит текст из textarea
  }}
    return (
        <div className={s.postsBlock}>
           <h3>My posts</h3>
            <div>
                <textarea ref = {newPostElement}></textarea>
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