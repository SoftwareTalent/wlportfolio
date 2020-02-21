import React, { Component } from 'react';
export default class EducationItem extends Component {
    render() {
        let item = this.props.item;
        return (
            <div className="row item">
                <div className="twelve columns">
                    <h3>{item.UniversityName}</h3>
                        <p className="info">
                            {item.specialization}
                            <span>&bull;</span> <em className="date">{item.MonthOfPassing} {item.YearOfPassing}</em></p>
                        <p>
                        {item.Achievements}
                    </p>
                </div>
            </div>
        );
    }
}
