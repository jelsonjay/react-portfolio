import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class About extends Component {
	render() {
		return (
			<Grid>
				<Cell col={12}>
					<h2 style={{ textAlign: 'center' }}>About</h2>
				</Cell>
			</Grid>
		);
	}
}

export default About;
