import React, {startTransition} from 'react';
import {render, screen} from '@testing-library/react';
import {App} from './App';
import {PostType, MyPostType} from "./Types";
import {addPost, state, updateNewPostText} from './redax/state'


test.skip('renders learn react link', () => {
    render(<App state={state} addPost={addPost} updateNewPostText={updateNewPostText}/>);
    const linkElement = screen.getByText(/learn react/i);
    expect(linkElement).toBeInTheDocument();
});
