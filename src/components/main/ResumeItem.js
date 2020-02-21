import React, { Component } from 'react';
export default class ResumeItem extends Component {
    render() {
        let item = this.props.item;
        return (
            <div className="row item">
                <div className="twelve columns">
                    <h3>{item.CompanyName}</h3>
                    <p className="info">
                        {item.specialization}
                        <span>&bull;</span>
                        <em className="date">{item.MonthOfStarting} {item.YearOfStarting}</em>
                        <em> - </em>
                        <em className="date">{item.MonthOfLeaving} {item.YearOfLeaving}</em>
                    </p>
                    { item.Achievements.map((achivement, index) => <p key={index} style={{marginBottom: '5px'}}> { achivement } </p>)}
                </div>
            </div>
        );
    }
}
