import React from 'react';

class Toggle extends React.Component {

	render() {
		return(
			<form onChange={this.props.setListType} className="toggle">
				<input type='radio' name='list-type' value='recent' id='recent' defaultChecked/><label htmlFor='recent'><span>Last 30 Days</span></label>
				<input type='radio' name='list-type' value='alltime' id='alltime'/><label htmlFor='alltime'><span>All Time</span></label>
			</form>
		);
	}
}

export default Toggle;