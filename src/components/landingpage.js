import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
//import Hero from '../components/hero';

class Landing extends Component {
	render() {
		return (
			<div style={{ width: '100%', margin: 'auto' }}>
				<div style={{ textAlign: 'center' }}>
					<img className='home-img' src='./img/bg.png' alt='Avatar' />
				</div>

				<Grid className='page-grid'>
					<Cell col={12}>
						<div className='wrap bg-img'>
							<h1>Web Developer</h1>
							<hr />
							<p>
								HTML5|CSS3|JavaScript|Vue.js|Node.js|React.js|Gatsby|MangoDB
							</p>
							<div className='icons'>
								{/*GitHub*/}
								<a
									href='http://github.com'
									rel='noopener noreferrer'
									target='_black'
								>
									<i className='fa fa-github-square' arial-hidden='ture' />
								</a>
								{/*Codepen*/}
								<a
									href='http://codepen.io'
									rel='noopener noreferrer'
									target='_black'
								>
									<i className='fa fa-codepen' arial-hidden='ture' />
								</a>
								{/*Google*/}
								<a
									href='http://google.com'
									rel='noopener noreferrer'
									target='_black'
								>
									<i className='fa fa-google' arial-hidden='ture' />
								</a>
								{/*Linkedin*/}
								<a
									href='http://likedin.com'
									rel='noopener noreferrer'
									target='_black'
								>
									<i className='fa fa-linkedin-square' arial-hidden='ture' />
								</a>
							</div>
						</div>
					</Cell>
				</Grid>
			</div>
		);
	}
}

export default Landing;
