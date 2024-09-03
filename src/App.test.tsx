import React, {startTransition} from 'react';
import {render, screen} from '@testing-library/react';
import {App} from './App';
import {PostType, MyPostType} from "./Types";
import store from './redax/state'


test.skip('renders learn react link', () => {
    render(<App state={store._state} addPost={store.addPost} updateNewPostText={store.updateNewPostText}/>);
    const linkElement = screen.getByText(/learn react/i);
    expect(linkElement).toBeInTheDocument();
});
