import React, { Component } from 'react';

class NotFound extends Component {   
    constructor(props) {
        super(props);
        document.title = "Not Found";
    }
    render() {
        return (
        <div className="not-found">
            Not Found
        </div>
        );
    }
}

export default NotFound;