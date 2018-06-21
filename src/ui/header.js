import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react';
import { hashHistory } from 'react-router'
export default class AppHeader extends Component {
    constructor(props) {
        super(props);
        this.state = {
            active: 'home'
        }
        this.handleItemClick = this.handleItemClick.bind(this);
    }
    handleItemClick(e, { name }){
        this.setState({ activeItem: name })
        hashHistory.push(`/${name}`)
    }
    render() {
        const { activeItem } = this.state;
        return (
            <Menu pointing secondary>
          <Menu.Item name='home' active={activeItem === 'home'} onClick={this.handleItemClick} />
          <Menu.Item
            name='suppliers'
            active={activeItem === 'suppliers'}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name='brands'
            active={activeItem === 'brands'}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name='products'
            active={activeItem === 'products'}
            onClick={this.handleItemClick}
          />
          <Menu.Menu position='right'>
            <Menu.Item
              name='logout'
              active={activeItem === 'logout'}
              onClick={this.handleItemClick}
            />
          </Menu.Menu>
        </Menu>
        )
    }
} 