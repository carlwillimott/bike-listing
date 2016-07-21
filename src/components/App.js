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

const App = () => (
	<div>
	{fetchBikes()}
		<Bike
			id={dummy.id}
			name={dummy.name}
			description={dummy.description}
			image={dummy.image}
			class={dummy.class}
		/>
	</div>
);

export default App;
