import React from 'react';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';
import Toolbar from '../Navigation/Toolbar/Toolbar';

import classes from './Layout.module.css';

class Layout extends React.Component {
    state = {
        showSideDrawer: true
    }

    sideDrawerClosedHandler = () => {
        this.setState({ showSideDrawer: false });
    }

    render() {
        return (
            <>
                <Toolbar/>
                <SideDrawer open={ this.state.showSideDrawer } closed={ this.sideDrawerClosedHandler }/>
                <main className={ classes.Content }>{ this.props.children }</main>
            </>
        );
    }
}

export default Layout;
