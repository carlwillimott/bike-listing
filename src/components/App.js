import React from 'react';
import {fetchBikes} from '../actions/index';
import Bike from './Bike';
import Filter from './Filter';

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
                    <Filter classes={this.state.classes} />
                    {this.displayBikes(this.state.bikes)}
                </div>
            )
        }
        return <div>Loading Bikes...</div>
    }

    componentDidMount() {
        let result = fetchBikes();
        result.subscribe((found) => {
            this.setState({
                bikes: found.items,
                classes: this.getClasses(found.items)
            });
        });
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
