import React from 'react';
import {MyPosts} from "./myPosts/MyPosts";
import {ProfileInfo} from "./profileInfo/ProfileInfo";
import {MyPostType, PostType, ProfilePageType} from '../../Types';



export const Profile = (props:{state:ProfilePageType}) => {

    return (
        <div>
        <ProfileInfo />
            <MyPosts posts = {props.state.posts} />

        </div>
    )
}