import React, {startTransition} from 'react';
import {render, screen} from '@testing-library/react';
import {App} from './App';
import {PostType, MyPostType} from "./Types";
import {addPost, state} from './redax/state'


test.skip('renders learn react link', () => {
    render(<App state={state} addPost={addPost} />);
    const linkElement = screen.getByText(/learn react/i);
    expect(linkElement).toBeInTheDocument();
});
