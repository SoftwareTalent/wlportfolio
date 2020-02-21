import React, { Component } from 'react';
export default class SkillItem extends Component {
    render() {
        const {item, color} = this.props;
        return (
            <li>
                <span className="bar-expand" style={{width: `${item.skilllevel}%`}}>
                    <span className="bar-fill" style={{backgroundColor:`${color}`}}/>
                </span>
                <em>{item.skillname}</em>
            </li>
        );
    }
}
