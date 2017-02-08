import React from 'react';

class Leaderboard extends React.Component {
	render() {
		return(
			<div>
				<table>
					<colgroup>
						<col className="col-rank" />
						<col className="col-avatar" />
						<col className="col-username" />
						<col className="col-points" />
						<col className="col-points" />
					</colgroup>
					<tbody>
						{this.props.campers.map(camper =>
							<tr key={camper.username}>
								<td className="cell-rank">{this.props.campers.indexOf(camper) + 1}</td>
								<td className="cell-avatar"><a href={`https://www.freecodecamp.com/${camper.username}`} target="_blank"><img src={camper.img} alt="Avatar" className="avatar" /></a></td>
								<td className="cell-username"><a href={`https://www.freecodecamp.com/${camper.username}`} target="_blank">{camper.username}</a></td>
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