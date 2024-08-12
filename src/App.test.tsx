import React, {startTransition} from 'react';
import {render, screen} from '@testing-library/react';
import {App} from './App';
import {PostType, MyPostType} from "./Types";
import {state} from './redax/state'


test.todo('renders learn react link', () => {
    render(<App appState={state} />);
    const linkElement = screen.getByText(/learn react/i);
    expect(linkElement).toBeInTheDocument();
});
