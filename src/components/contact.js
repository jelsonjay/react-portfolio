import React, { Component } from 'react';
import { Grid, Cell, ListItem, List, ListItemContent } from 'react-mdl';

class Contact extends Component {
	render() {
		return (
			<div className='contact'>
				<Grid className='contact-grid'>
					<Cell col={6}>
						<h2>Jelson J</h2>
						<img className='img' src='./img/bg.png' alt='Avatar' />
						<p className='text'>
							Lorem Ipsum is simply dummy text of the printing and typesetting
							industry. Lorem Ipsum has been the industry's standard dummy
						</p>
					</Cell>
					<Cell col={6}>
						<h2>Contact</h2>
						<hr />
						<div className='contact-list'>
							<List>
								<ListItem>
									<ListItemContent
										style={{ fontSize: '25', fontFamily: 'Roboto' }}
									>
										<i className='fa fa-envelope-square' aria-hidden></i>
										example@gmail.com
									</ListItemContent>
								</ListItem>

								<ListItem>
									<ListItemContent
										style={{ fontSize: '25', fontFamily: 'Roboto' }}
									>
										<i className='fa fa-phone-square' aria-hidden></i>
										+258 356 257 25
									</ListItemContent>
								</ListItem>

								<ListItem>
									<ListItemContent
										style={{ fontSize: '25', fontFamily: 'Roboto' }}
									>
										<i className='fa fa-skype' aria-hidden></i>
										example-skype
									</ListItemContent>
								</ListItem>
								<ListItem>
									<ListItemContent
										style={{ fontSize: '25', fontFamily: 'Roboto' }}
									>
										<i className='fa fa-twitter-square' aria-hidden></i>
										twitter.com/example-14
									</ListItemContent>
								</ListItem>
							</List>
						</div>
					</Cell>
				</Grid>
			</div>
		);
	}
}

export default Contact;
