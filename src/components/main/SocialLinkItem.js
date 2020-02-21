import React, { Component } from 'react';
export default class SocialLinkItem extends Component {
    render() {
        let item = this.props.item;
        return (
            <li key={item.name}>
                <a href={item.url} target="_blank"><i className={item.className}></i></a>
            </li>
        );
    }
}
