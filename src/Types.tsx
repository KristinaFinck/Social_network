import React from 'react';
export type PostType = {
    id: number,
    message: string,
    likesCount: number
};

export type MyPostType = {
    posts: PostType[]
};
