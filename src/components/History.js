import React, { Component } from 'react';
import axios from 'axios';
import {BASE_URL, TRACK_IP, FETCH_VISITOR} from '../apis';
import {ToastsContainer, ToastsStore} from 'react-toasts';

class History extends Component {
    constructor(props) {
        super(props);
        this.state = {
            historyData: []
        };
        document.title = "Portfolio History";
    }
    
    componentDidMount() {
        const self = this;
        axios.get(`${BASE_URL}${FETCH_VISITOR}`)
            .then( response => { 
                self.setState({historyData: response.data.data});
            })
            .catch( response => {
                ToastsStore.error('Fetching was failed, please try to refresh again!');
            });;
    }

    onDelete = () => {
        const self = this;
        axios.delete(`${BASE_URL}${TRACK_IP}`)
            .then( response => { 
                self.setState({historyData: []});
            })
            .catch( response => {
                ToastsStore.error('Deleting was failed, please try again later!');
            });;
    }

    render() {
        const {historyData} = this.state;
        return (
            <div className="history">
              <div className="row history-header">
                <h1>History</h1>
                <button onClick={this.onDelete}>Delete</button>
              </div>
              <div className="row">
                <table>
                    <thead>
                        <tr>
                            <th>No</th>
                            <th>User</th>
                            <th>IP Address</th>
                            <th>Country</th>
                            <th>State</th>
                            <th>City</th>
                            <th>Visited on</th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                        historyData.map((data, index) => (
                            <tr key={index}>
                                <td>{historyData.length-index}</td>
                                <td>{data.name || ""}</td>
                                <td>{data.ip || ""}</td>
                                <td>{data.country || ""}</td>
                                <td>{data.state || ""}</td>
                                <td>{data.city || ""}</td>
                                <td>{data.visited_on || ""}</td>
                            </tr>
                        ))
                    }
                    </tbody>
                </table>
              </div>
              <ToastsContainer store={ToastsStore}/>
            </div>
        );
    }
}

export default History;