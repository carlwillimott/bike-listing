import React from 'react';
import {fetchBikes} from '../actions/index';
import SortBikes from '../containers/SortBikes';
import SortedBikeList from '../containers/SortedBikeList';

class App extends React.Component {

    constructor() {
        super();
        this.state = {
            bikes: null,
            classes: null
        };
    }

    render() {
        if (this.state.bikes) {
            return (
                <div>
                    <SortBikes
                        classes={this.state.classes}
                    />
                    <SortedBikeList
                        bikes={this.state.bikes}
                    />
                </div>
            )
        }
        return <div>Loading Bikes...</div>
    }

    // This comes before render in the react lifecycle, which allows us to
    // run any AJAX requests before displaying the component.
    componentDidMount() {
        let result = fetchBikes();
        result.subscribe((found) => {
            this.setState({
                bikes: found.items,
                classes: this.getClasses(found.items)
            });
        });
    }

    // Helper function to get an array of classes which we can pass into the
    // sort component later.
    getClasses(bikes) {
        let classes = [];
        bikes.map((item) => {
            item.class.map((inner) => {
                if (classes.indexOf(inner) === -1) {
                    classes.push(inner);
                }
            })
        });
        return classes;
    }

};

export default App;
