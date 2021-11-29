import React from 'react';
import {Header} from './';
import PostCard from './PostCard';

const Layout = ({children}) => {
    return (
        <>
            <Header />
            {children}
        </>
    )
}

export default Layout
