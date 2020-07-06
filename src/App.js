import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import Menu from './components/menu';
import { Link } from 'react-router-dom';

class App extends Component {
	render() {
		return (
			<div className='demo-big-content'>
				<Layout>
					<Header
						className='header-color'
						title={
							<Link style={{ textDecoration: 'none', color: 'white' }} to='/'>
								Jelson J
							</Link>
						}
						scroll
					>
						<Navigation>
							<Link to='/'>Home</Link>
							<Link to='/aboutme'>About</Link>
							<Link to='/portfolio'>Portfolio</Link>
							<Link to='/resume'>Resume</Link>
							<Link to='/contact'>Contact</Link>
						</Navigation>
					</Header>
					<Drawer title='Portfolio'>
						<Navigation>
							<Link to='/'>Home</Link>
							<Link to='/aboutme'>About</Link>
							<Link to='/portfolio'>Portfolio</Link>
							<Link to='/resume'>Resume</Link>
							<Link to='/contact'>Contact</Link>
						</Navigation>
					</Drawer>
					<Content>
						<div className='page-content' />
						<Menu />
					</Content>
				</Layout>
			</div>
		);
	}
}

export default App;
