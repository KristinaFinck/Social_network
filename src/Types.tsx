import {updateNewPostText} from "./redax/state";

export type StateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
    sideBar: FriendsType
}
export type ProfilePageType = {
    posts: PostType[]
    newPostText: string
}
export type DialogsPageType = {
    dialogs: DialogType[]
    messages: MessageType[]
}
export type DialogType = {
    id: number,
    name: string,
    avatar?: string
};
export type MessageType = {
    message: string
}
export type  ProfileType = {
    profilePage: ProfilePageType;
    addPost: (postMessage: string) => void
    updateNewPostText: (newText:string) => void
}
export type FriendsType = {
    friends: FriendType[]
}
export type FriendType = {
    id: number
    name: string
    avatar: string; // URL или путь к изображению
}
export type MyPostType = {
    posts: PostType[]
    newPostText: string;
    addPost: (postMessage: string) => void
    updateNewPostText: (newPostText:string) => void
};
export type PostType = {
    id: number,
    postMessage: string,
    likesCount: number
};
