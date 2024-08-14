
export type StateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
    sideBar: FriendsType
}
export type ProfilePageType = {
    posts: PostType[]
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
    posts: PostType[]
    addPost: (postMessage: string) => void
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
    addPost: (postMessage: string) => void
};
export type PostType = {
    id: number,
    postMessage: string,
    likesCount: number
};
