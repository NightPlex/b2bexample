import React, { Component } from 'react';
import './../../scss/component-specific/Navigation.scss';
import Columns from 'react-bulma-components/lib/components/columns';
import Navbar from 'react-bulma-components/lib/components/navbar';

import Menu from './Menu/Menu';
import Logo from './Logo/Logo';
import IconBar from './IconBar/IconBar';

class Navigation extends Component {
  render() {
    return (
        <div>
            <Columns breakpoint="mobile">
                <Columns.Column>
                    <Logo />
                </Columns.Column>
                <Columns.Column className="nav-desktop-menu">
                    <Menu />
                </Columns.Column>
                <Columns.Column>
                    <IconBar />
                </Columns.Column>
                <Columns.Column>
                </Columns.Column>
            </Columns>      
        </div>
    );
  }
}

export default Navigation;