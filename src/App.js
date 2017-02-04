import React, {Component} from 'react';
import axios from 'axios';
import Leaderboard from './Leaderboard';
import './App.scss';

class App extends Component {
  constructor(props) {
  	super(props);

  	this.state = {
  		campers: []
  	}
  }

  componentWillMount() {
    axios.get('https://fcctop100.herokuapp.com/api/fccusers/top/recent')
    	.then(res => {
    		const campers = res.data;
    		this.setState({campers});
    	})
  }

  render() {

    return (
      <div className="App">
        <code>hello world</code>
        <Leaderboard campers={this.state.campers}/>
      </div>
    )
  }
}

export default App;
