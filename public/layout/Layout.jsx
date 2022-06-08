import React from 'react';
import ActionBar from '../components/Navigation/ActionBar';

function Layout({ children }) {
    return (<>
        <ActionBar/>
        <main>{children}</main>
    </>);
}

export default Layout;
