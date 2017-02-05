import React, {Component} from 'react';
import axios from 'axios';
import Leaderboard from './Leaderboard';
import Toggle from './Toggle';
import './App.scss';

class App extends Component {
  constructor(props) {
  	super(props);

  	this.state = {
  		campers: [],
      listType: 'recent'
  	}
    this.setListType = this.setListType.bind(this);
    this.getCampers = this.getCampers.bind(this);
  }

  setListType(event) {
    console.log(event.target.value);
    const lt = event.target.value;
    this.setState({listType: lt});
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
    this.getCampers(this.state.listType);
  }

  componentDidUpdate() {
    this.getCampers(this.state.listType);
  }

  render() {

    return (
      <div className="App">
        <h1>Camper Leaderboard</h1>
        <Toggle listType={this.state.listType} setListType={this.setListType}/>
        <Leaderboard campers={this.state.campers}/>
      </div>
    )
  }
}

export default App;
