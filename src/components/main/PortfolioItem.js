import React, { Component } from 'react';
export default class PorfolioItem extends Component {
    render() {
        let item = this.props.item;
        return (
            <div className="columns c">
                <div className="item-wrap">
                    <a href="#modal-01">
                        <img src={`${item.imgurl}`} className="item-img" alt={`${item.imgurl}`}/>
                        <div className="overlay">
                        <div className="portfolio-item-meta">
                            <h5>{item.name}</h5>
                            <p>{item.description}</p>
                        </div>
                        </div>
                    </a>
                </div>
            </div>
        );
    }
}
