import React from 'react';

class Leaderboard extends React.Component {
	render() {
		return(
			<div>
				<ul>
					{this.props.campers.map(camper =>
						<li key={camper.username}>{camper.username}</li>
					)}
				</ul>
			</div>
		);
	}
}

export default Leaderboard;