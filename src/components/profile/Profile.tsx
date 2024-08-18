import React from 'react';
import {MyPosts} from "./myPosts/MyPosts";
import {ProfileInfo} from "./profileInfo/ProfileInfo";
import {MyPostType, PostType, ProfilePageType, ProfileType} from '../../Types';
import {addPost, updateNewPostText} from "../../redax/state";


export const Profile = (props: ProfileType) => {


    return (
        <div>
            <ProfileInfo/>
            <MyPosts
                posts={props.profilePage.posts}
                newPostText={props.profilePage.newPostText}
                     updateNewPostText = {updateNewPostText}
                     addPost={addPost}/>

        </div>
    )
};