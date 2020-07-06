import React, { Component } from 'react';
import {
	Tabs,
	Tab,
	Grid,
	Cell,
	Card,
	CardTitle,
	CardText,
	CardActions,
	Button,
	CardMenu,
	IconButton
} from 'react-mdl';

class Portfolio extends Component {
	constructor(props) {
		super(props);
		this.state = { activeTab: 0 };
	}

	toggleCategories() {
		if (this.state.activeTab === 0) {
			return (
				<div className='portfolio-grid'>
					{/*JavaScript one*/}
					<Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
						<CardTitle
							style={{
								color: 'orange',
								height: '176px',
								background: 'url("../img/js.png") center / cover'
							}}
						>
							JavaScript
						</CardTitle>
						<CardText>
							Lorem Ipsum is simply dummy text of the printing and typesetting
							industry. Lorem Ipsum has been the industry's standard dummy
						</CardText>
						<CardActions border>
							<Button>GitHub</Button>
							<Button>Live</Button>
							<Button>Codepen</Button>
						</CardActions>
						<CardMenu style={{ color: '#fff' }}>
							<IconButton name='share' />
						</CardMenu>
					</Card>
					{/*JavaScript two*/}
					<Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
						<CardTitle
							style={{
								color: 'orange',
								height: '176px',
								background: 'url("../img/js.png") center / cover'
							}}
						>
							JavaScript
						</CardTitle>
						<CardText>
							Lorem Ipsum is simply dummy text of the printing and typesetting
							industry. Lorem Ipsum has been the industry's standard dummy
						</CardText>
						<CardActions border>
							<Button>GitHub</Button>
							<Button>Live</Button>
							<Button>Codepen</Button>
						</CardActions>
						<CardMenu style={{ color: '#fff' }}>
							<IconButton name='share' />
						</CardMenu>
					</Card>
					{/*JavaScript three*/}
					<Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
						<CardTitle
							style={{
								color: 'orange',
								height: '176px',
								background: 'url("../img/js.png") center / cover'
							}}
						>
							JavaScript
						</CardTitle>
						<CardText>
							Lorem Ipsum is simply dummy text of the printing and typesetting
							industry. Lorem Ipsum has been the industry's standard dummy
						</CardText>
						<CardActions border>
							<Button>GitHub</Button>
							<Button>Live</Button>
							<Button>Codepen</Button>
						</CardActions>
						<CardMenu style={{ color: '#fff' }}>
							<IconButton name='share' />
						</CardMenu>
					</Card>
				</div>
			);
		} else if (this.state.activeTab === 1) {
			return (
				<div className='portfolio-grid'>
					{/*Gatsby one*/}
					<Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
						<CardTitle
							style={{
								color: 'orange',
								height: '176px',
								background: 'url("../img/gatsby.png") center / cover'
							}}
						>
							Gatsby
						</CardTitle>
						<CardText>
							Lorem Ipsum is simply dummy text of the printing and typesetting
							industry. Lorem Ipsum has been the industry's standard dummy
						</CardText>
						<CardActions border>
							<Button>GitHub</Button>
							<Button>Live</Button>
							<Button>Codepen</Button>
						</CardActions>
						<CardMenu style={{ color: '#fff' }}>
							<IconButton name='share' />
						</CardMenu>
					</Card>
					{/*Gatsby two*/}
					<Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
						<CardTitle
							style={{
								color: 'orange',
								height: '176px',
								background: 'url("../img/gatsby.png") center / cover'
							}}
						>
							Gatsby
						</CardTitle>
						<CardText>
							Lorem Ipsum is simply dummy text of the printing and typesetting
							industry. Lorem Ipsum has been the industry's standard dummy
						</CardText>
						<CardActions border>
							<Button>GitHub</Button>
							<Button>Live</Button>
							<Button>Codepen</Button>
						</CardActions>
						<CardMenu style={{ color: '#fff' }}>
							<IconButton name='share' />
						</CardMenu>
					</Card>
					{/*Gatsby three*/}
					<Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
						<CardTitle
							style={{
								color: 'orange',
								height: '176px',
								background: 'url("../img/gatsby.png") center / cover'
							}}
						>
							Gatsby
						</CardTitle>
						<CardText>
							Lorem Ipsum is simply dummy text of the printing and typesetting
							industry. Lorem Ipsum has been the industry's standard dummy
						</CardText>
						<CardActions border>
							<Button>GitHub</Button>
							<Button>Live</Button>
							<Button>Codepen</Button>
						</CardActions>
						<CardMenu style={{ color: '#fff' }}>
							<IconButton name='share' />
						</CardMenu>
					</Card>
				</div>
			);
		} else if (this.state.activeTab === 2) {
			return (
				<div className='portfolio-grid'>
					{/*React one*/}
					<Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
						<CardTitle
							style={{
								color: 'orange',
								height: '176px',
								background: 'url("../img/react.png") center / cover'
							}}
						>
							React
						</CardTitle>
						<CardText>
							Lorem Ipsum is simply dummy text of the printing and typesetting
							industry. Lorem Ipsum has been the industry's standard dummy
						</CardText>
						<CardActions border>
							<Button>GitHub</Button>
							<Button>Live</Button>
							<Button>Codepen</Button>
						</CardActions>
						<CardMenu style={{ color: '#fff' }}>
							<IconButton name='share' />
						</CardMenu>
					</Card>

					{/*React two*/}
					<Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
						<CardTitle
							style={{
								color: 'orange',
								height: '176px',
								background: 'url("../img/react.png") center / cover'
							}}
						>
							React
						</CardTitle>
						<CardText>
							Lorem Ipsum is simply dummy text of the printing and typesetting
							industry. Lorem Ipsum has been the industry's standard dummy
						</CardText>
						<CardActions border>
							<Button>GitHub</Button>
							<Button>Live</Button>
							<Button>Codepen</Button>
						</CardActions>
						<CardMenu style={{ color: '#fff' }}>
							<IconButton name='share' />
						</CardMenu>
					</Card>

					{/*React three*/}
					<Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
						<CardTitle
							style={{
								color: 'orange',
								height: '176px',
								background: 'url("../img/react.png") center / cover'
							}}
						>
							React
						</CardTitle>
						<CardText>
							Lorem Ipsum is simply dummy text of the printing and typesetting
							industry. Lorem Ipsum has been the industry's standard dummy
						</CardText>
						<CardActions border>
							<Button>GitHub</Button>
							<Button>Live</Button>
							<Button>Codepen</Button>
						</CardActions>
						<CardMenu style={{ color: '#fff' }}>
							<IconButton name='share' />
						</CardMenu>
					</Card>
				</div>
			);
		} else if (this.state.activeTab === 3) {
			return (
				<div className='portfolio-grid'>
					{/*Vue one*/}
					<Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
						<CardTitle
							style={{
								color: 'orange',
								height: '176px',
								background: 'url("../img/vuejs.png") center / cover'
							}}
						>
							Vue
						</CardTitle>
						<CardText>
							Lorem Ipsum is simply dummy text of the printing and typesetting
							industry. Lorem Ipsum has been the industry's standard dummy
						</CardText>
						<CardActions border>
							<Button>GitHub</Button>
							<Button>Live</Button>
							<Button>Codepen</Button>
						</CardActions>
						<CardMenu style={{ color: '#fff' }}>
							<IconButton name='share' />
						</CardMenu>
					</Card>

					{/*Vue two*/}
					<Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
						<CardTitle
							style={{
								color: 'orange',
								height: '176px',
								background: 'url("../img/vuejs.png") center / cover'
							}}
						>
							Vue
						</CardTitle>
						<CardText>
							Lorem Ipsum is simply dummy text of the printing and typesetting
							industry. Lorem Ipsum has been the industry's standard dummy
						</CardText>
						<CardActions border>
							<Button>GitHub</Button>
							<Button>Live</Button>
							<Button>Codepen</Button>
						</CardActions>
						<CardMenu style={{ color: '#fff' }}>
							<IconButton name='share' />
						</CardMenu>
					</Card>

					{/*Vue three*/}
					<Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
						<CardTitle
							style={{
								color: 'orange',
								height: '176px',
								background: 'url("../img/vuejs.png") center / cover'
							}}
						>
							Vue
						</CardTitle>
						<CardText>
							Lorem Ipsum is simply dummy text of the printing and typesetting
							industry. Lorem Ipsum has been the industry's standard dummy
						</CardText>
						<CardActions border>
							<Button>GitHub</Button>
							<Button>Live</Button>
							<Button>Codepen</Button>
						</CardActions>
						<CardMenu style={{ color: '#fff' }}>
							<IconButton name='share' />
						</CardMenu>
					</Card>

					{/*Vue four*/}
					<Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
						<CardTitle
							style={{
								color: 'orange',
								height: '176px',
								background: 'url("../img/vuejs.png") center / cover'
							}}
						>
							Vue
						</CardTitle>
						<CardText>
							Lorem Ipsum is simply dummy text of the printing and typesetting
							industry. Lorem Ipsum has been the industry's standard dummy
						</CardText>
						<CardActions border>
							<Button>GitHub</Button>
							<Button>Live</Button>
							<Button>Codepen</Button>
						</CardActions>
						<CardMenu style={{ color: '#fff' }}>
							<IconButton name='share' />
						</CardMenu>
					</Card>
				</div>
			);
		} else if (this.state.activeTab === 4) {
			return (
				<div className='portfolio-grid'>
					{/*Node one*/}
					<Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
						<CardTitle
							style={{
								color: 'orange',
								height: '176px',
								background: 'url("../img/node-js.png") center / cover'
							}}
						>
							Node
						</CardTitle>
						<CardText>
							Lorem Ipsum is simply dummy text of the printing and typesetting
							industry. Lorem Ipsum has been the industry's standard dummy
						</CardText>
						<CardActions border>
							<Button>GitHub</Button>
							<Button>Live</Button>
							<Button>Codepen</Button>
						</CardActions>
						<CardMenu style={{ color: '#fff' }}>
							<IconButton name='share' />
						</CardMenu>
					</Card>

					{/*Node two*/}
					<Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
						<CardTitle
							style={{
								color: 'orange',
								height: '176px',
								background: 'url("../img/node-js.png") center / cover'
							}}
						>
							Node
						</CardTitle>
						<CardText>
							Lorem Ipsum is simply dummy text of the printing and typesetting
							industry. Lorem Ipsum has been the industry's standard dummy
						</CardText>
						<CardActions border>
							<Button>GitHub</Button>
							<Button>Live</Button>
							<Button>Codepen</Button>
						</CardActions>
						<CardMenu style={{ color: '#fff' }}>
							<IconButton name='share' />
						</CardMenu>
					</Card>

					{/*Node three*/}
					<Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
						<CardTitle
							style={{
								color: 'orange',
								height: '176px',
								background: 'url("../img/node-js.png") center / cover'
							}}
						>
							Node
						</CardTitle>
						<CardText>
							Lorem Ipsum is simply dummy text of the printing and typesetting
							industry. Lorem Ipsum has been the industry's standard dummy
						</CardText>
						<CardActions border>
							<Button>GitHub</Button>
							<Button>Live</Button>
							<Button>Codepen</Button>
						</CardActions>
						<CardMenu style={{ color: '#fff' }}>
							<IconButton name='share' />
						</CardMenu>
					</Card>
				</div>
			);
		} else if (this.state.activeTab === 5) {
			return (
				<div className='portfolio-grid'>
					{/*Mongodb one*/}
					<Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
						<CardTitle
							style={{
								color: 'orange',
								height: '176px',
								background: 'url("../img/mongodb.png") center / cover'
							}}
						>
							MangoDB
						</CardTitle>
						<CardText>
							Lorem Ipsum is simply dummy text of the printing and typesetting
							industry. Lorem Ipsum has been the industry's standard dummy
						</CardText>
						<CardActions border>
							<Button>GitHub</Button>
							<Button>Live</Button>
							<Button>Codepen</Button>
						</CardActions>
						<CardMenu style={{ color: '#fff' }}>
							<IconButton name='share' />
						</CardMenu>
					</Card>

					{/*Mongodb two*/}
					<Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
						<CardTitle
							style={{
								color: 'orange',
								height: '176px',
								background: 'url("../img/mongodb.png") center / cover'
							}}
						>
							MangoDB
						</CardTitle>
						<CardText>
							Lorem Ipsum is simply dummy text of the printing and typesetting
							industry. Lorem Ipsum has been the industry's standard dummy
						</CardText>
						<CardActions border>
							<Button>GitHub</Button>
							<Button>Live</Button>
							<Button>Codepen</Button>
						</CardActions>
						<CardMenu style={{ color: '#fff' }}>
							<IconButton name='share' />
						</CardMenu>
					</Card>

					{/*Mongodb three*/}
					<Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
						<CardTitle
							style={{
								color: 'orange',
								height: '176px',
								background: 'url("../img/mongodb.png") center / cover'
							}}
						>
							MangoDB
						</CardTitle>
						<CardText>
							Lorem Ipsum is simply dummy text of the printing and typesetting
							industry. Lorem Ipsum has been the industry's standard dummy
						</CardText>
						<CardActions border>
							<Button>GitHub</Button>
							<Button>Live</Button>
							<Button>Codepen</Button>
						</CardActions>
						<CardMenu style={{ color: '#fff' }}>
							<IconButton name='share' />
						</CardMenu>
					</Card>
				</div>
			);
		}
	}

	render() {
		return (
			<div className='content-tab'>
				<Tabs
					activeTab={this.state.activeTab}
					onChange={tabId => this.setState({ activeTab: tabId })}
					ripple
				>
					<Tab>JavaScript</Tab>
					<Tab>Gatsby</Tab>
					<Tab>React.js</Tab>
					<Tab>Vue.js</Tab>
					<Tab>Node.js</Tab>
					<Tab>MongoDB</Tab>
				</Tabs>

				<Grid>
					<Cell col='12'>
						<div className='content'>{this.toggleCategories()}</div>
					</Cell>
				</Grid>
			</div>
		);
	}
}

export default Portfolio;
