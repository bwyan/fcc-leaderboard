import React from 'react';

class Toggle extends React.Component {

	render() {
		return(
			<form onChange={this.props.setListType}>
				<label><input type='radio' name='list-type' value='recent' />Last 30 Days</label>
				<label><input type='radio' name='list-type' value='alltime' />All Time</label>
			</form>
		);
	}
}

export default Toggle;