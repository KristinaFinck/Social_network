import React from 'react';
import {render, screen} from '@testing-library/react';
import {App} from './App';
import {PostType, MyPostType} from "./Types";
import {dialogsData, messagesData, posts} from "./index";

test('renders learn react link', () => {
    render(<App posts={posts}
                dialogs={dialogsData}
                messagesData={messagesData}/>);
    const linkElement = screen.getByText(/learn react/i);
    expect(linkElement).toBeInTheDocument();
});
