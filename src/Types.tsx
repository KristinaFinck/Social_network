
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
export type PostType = {
    id: number,
    message: string,
    likesCount: number
};

export type MyPostType = {
    posts: PostType[]
};
export type DialogType = {
    id: number,
    name: string
};
export type MessageType = {
    message: string
}
export type  ProfileType = {
    posts: PostType[]
}
export type FriendsType = {
    friends: FriendType[]
}
export type FriendType = {
    id: number
    name: string
    avatar: string; // URL или путь к изображению
}
