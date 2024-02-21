import React from 'react';
import {MyPosts} from "./myPosts/MyPosts";
import {ProfileInfo} from "./profileInfo/ProfileInfo";
import {MyPostType, PostType} from '../../Types';

export type  ProfileType = {
    posts: PostType[]
}

export const Profile = (props: ProfileType) => {

    return (
        <div>
        <ProfileInfo />
            <MyPosts posts = {props.posts} />

        </div>
    )
}