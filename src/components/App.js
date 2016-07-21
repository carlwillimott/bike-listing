import React from 'react';
import {fetchBikes} from '../actions/index';
import Bike from './Bike';

const dummy = {
	"id": 1,
	"name": "Litening C:68",
	"description": "The bike for the professionals - thanks to our high-end C:68 Carbon frame and race optimized geometry.",
	"image": {
		"thumb": "https://jujhar.com/images/bikes/780300_overview.png",
		"large": "https://jujhar.com/images/bikes/780300_light.jpg"
	},
	"class": ["endurance", "race"]
};

class App extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			bikes: null
		};
	}

	render() {
		if (this.state.bikes) {
			return <div>{this.displayBikes(this.state.bikes)}</div>
		}
		return <div>Loading Bikes...</div>
	}

	componentDidMount() {
		let result = fetchBikes();
		result.subscribe((found) => this.setState({bikes: found.items}));
	}

	displayBikes(bikes) {
		return bikes.map((item) => {
			return (
				<Bike
					id={item.id}
					name={item.name}
					description={item.description}
					image={item.image}
					class={item.class}
				/>
			);
		})
	}

};

export default App;
