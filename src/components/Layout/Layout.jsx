import React from 'react';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';
import Toolbar from '../Navigation/Toolbar/Toolbar';

import classes from './Layout.module.css';

class Layout extends React.Component {
    state = {
        showSideDrawer: false
    }

    sideDrawerClosedHandler = () => {
        this.setState({ showSideDrawer: false });
    }

    sideDrawerToggleHandler = () => {
        this.setState(prevState => ({ showSideDrawer: !prevState.showSideDrawer }))
    }

    render() {
        return (
            <>
                <Toolbar drawerToggleClicked={ this.sideDrawerToggleHandler }/>
                <SideDrawer open={ this.state.showSideDrawer } closed={ this.sideDrawerClosedHandler }/>
                <main className={ classes.Content }>{ this.props.children }</main>
            </>
        );
    }
}

export default Layout;
