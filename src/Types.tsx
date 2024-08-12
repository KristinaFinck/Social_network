
export type StateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
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