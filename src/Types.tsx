export type StoreType = {
    _state: StateType
    _callSubscriber: () => void
    subscribe: (callback: () => void) => void
    getState: () => StateType
    dispatch: (action: ActionsTypes) => void
}
export type ActionsTypes = AddPostActionType | UpdateNewPostActionType
export type StateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
    sideBar: FriendsType
}
export type AddPostActionType = {
    type: 'ADD-POST'
}

export type UpdateNewPostActionType = {
    type: 'UPDATE-NEW-POST-TEXT'
    newText: string
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
   dispatch: (action:ActionsTypes) => void
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
    dispatch: (action: ActionsTypes) => void
};
export type PostType = {
    id: number,
    postMessage: string,
    likesCount: number
};
