import React, { Component } from 'react';
import Main from './components/main';
import History from './components/History';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import NotFound from './components/NotFound';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      resumeData: {}
    };
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Route exact path="/"><NotFound /></Route>
          <Route exact path="/:name" 
            render={({match}) => {
              const name = match.params.name;
              return <Main name={name}/>;
            }} />
          <Route path="/admin/history"><History /></Route>
        </div>
      </Router>
    );
  }
}

export default App;