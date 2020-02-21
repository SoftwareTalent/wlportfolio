import React, { Component } from 'react';
export default class TestimonialItem extends Component {
    render() {
        let item = this.props.item;
        return (
            <li>
                <blockquote>
                    <p>
                        {item.description}
                    </p>
                    <cite>{item.name}</cite>
                </blockquote>
            </li>
        );
    }
}
