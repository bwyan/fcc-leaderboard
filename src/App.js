import React, {Component} from 'react';
import axios from 'axios';
import Leaderboard from './Leaderboard';
import './App.scss';

class App extends Component {
  constructor(props) {
  	super(props);

  	this.state = {
  		campers: [],
      listType: 'recent'
  	}

    //this.getTopCampers.bind(this);
  }

  getCampers(listType) {
    const lt = (listType === 'alltime') ? 'alltime' : 'recent';

    axios.get(`https://fcctop100.herokuapp.com/api/fccusers/top/${lt}`)
      .then(res => {
        const campers = res.data;
        this.setState({campers});
    })
  }

  componentWillMount() {
    this.getCampers(this.props.listType);
  }

  render() {

    return (
      <div className="App">
        <h1>Camper Leaderboard</h1>
        <Leaderboard campers={this.state.campers}/>
      </div>
    )
  }
}

export default App;
