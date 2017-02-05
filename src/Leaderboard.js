import React from 'react';

class Leaderboard extends React.Component {
	render() {
		return(
			<div>
				<table>
					<tbody>
						{this.props.campers.map(camper =>
							<tr key={camper.username}>
								<td className="cell-rank">{this.props.campers.indexOf(camper) + 1}</td>
								<td className="cell-avatar"><img src={camper.img} alt="Avatar" className="avatar" /></td>
								<td className="cell-username">{camper.username}</td>
								<td className={(this.props.listType === "recent") ? "cell-points bold" : "cell-points"}>{camper.recent}</td>
								<td className={(this.props.listType === "alltime") ? "cell-points bold" : "cell-points"}>{camper.alltime}</td>
							</tr>
						)}
					</tbody>
				</table>
			</div>
		);
	}
}

export default Leaderboard;