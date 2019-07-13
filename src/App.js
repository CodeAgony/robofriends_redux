import React, { Component } from 'react';
import CardList from './CardList';
import axios from 'axios';
import SearchBox from './SearchBox';

class App extends Component {
	constructor() {
		super();
		this.state = {
			robots: [],
			searchfield: ''
		};
	}

	async componentDidMount() {
		let res = await axios.get('https://jsonplaceholder.typicode.com/users');
		let data = res.data;
		this.setState({ robots: data });
	}

	onSearchChange = event => {
		this.setState({ searchfield: event.target.value });
	};

	render() {
		const { searchfield, robots } = this.state;

		const filteredRobots = robots.filter(robot => {
			return robot.name.toLowerCase().includes(searchfield.toLowerCase());
		});

		return (
			<div className='tc'>
				<h1>Robofriends</h1>
				<SearchBox searchChange={this.onSearchChange} />
				<CardList robots={filteredRobots} />
			</div>
		);
	}
}

export default App;
