import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';

class Resume extends Component {
	render() {
		return (
			<Grid>
				<Cell col={4}>
					<h2 style={{ paddingTop: '2rem' }}>Jelson J</h2>
					<h4 style={{ color: 'orange' }}>Web Programmer</h4>
					<hr style={{ borderTop: '5px solid orange', width: '100%' }} />
					<p>
						Lorem Ipsum is simply dummy text of the printing and typesetting
						industry. Lorem Ipsum has been the industry's standard dummy text
						ever since the 1500s, when an unknown printer took a galley of type
						and scrambled it to make a type specimen book. It has survived not
						only five centuries, but also the leap into electronic typesetting,
						remaining essentially unchanged.
					</p>
					<hr style={{ borderTop: '5px solid orange', width: '100%' }} />
					<h5>Address</h5>
					<p>258 Strett Park London</p>
					<h5>Telephone:</h5>
					<p>+44 7895 258 123</p>
					<h5>Email</h5>
					<p>example25@gmail.com</p>
					<h2>Web</h2>
					<p>jelsonjay.com</p>
					<hr style={{ borderTop: '5px solid orange', width: '100%' }} />
				</Cell>
				<Cell className='resume' col={8}>
					<h2>Education</h2>
					<Education
						startYear={2009}
						endYear={2012}
						schoolName={'Prymary School'}
						schoolDescr={
							'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the  when an unknown printer took a galley  type and scrambled it to make a type specimen book It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged'
						}
					/>
					<Education
						startYear={2009}
						endYear={2012}
						schoolName={'College of Technology'}
						schoolDescr={
							'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the  when an unknown printer took a galley  type and scrambled it to make a type specimen book It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged'
						}
					/>
					<Education
						startYear={2009}
						endYear={2012}
						schoolName={'University of Technology'}
						schoolDescr={
							'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the  when an unknown printer took a galley  type and scrambled it to make a type specimen book It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged'
						}
					/>
					<hr style={{ borderTop: '5px solid orange', width: '100%' }} />
					<h2>Work Experience</h2>
					<Experience
						startYear={2017}
						endYear={2019}
						jobName={'Junior Web Developer'}
						jobDescr={
							'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the  when an unknown printer took a galley  type and scrambled it to make a type specimen book It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged'
						}
					/>
					<Experience
						startYear={2019}
						endYear={2020}
						jobName={'Senior Web Developer'}
						jobDescr={
							'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the  when an unknown printer took a galley  type and scrambled it to make a type specimen book It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged'
						}
					/>
					<hr style={{ borderTop: '5px solid orange', width: '100%' }} />
					<h2>Skills-Set</h2>
					<Skills skill='HTML5' progress={55} />
					<Skills skill='CSS' progress={65} />
					<Skills skill='JavasCript' progress={75} />
					<Skills skill='React.js' progress={45} />
					<Skills skill='Vue.js' progress={55} />
					<Skills skill='Gatsby.js' progress={60} />
					<Skills skill='Node.js' progress={45} />
					<Skills skill='MongoDB' progress={75} />
				</Cell>
			</Grid>
		);
	}
}

export default Resume;
