import React from 'react';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';
import Toolbar from '../Navigation/Toolbar/Toolbar';

import classes from './Layout.module.css';

const Layout = props => (
    <>
        <Toolbar/>
        <SideDrawer/>
        <main className={ classes.Content }>{ props.children }</main>
    </>
);

export default Layout;