import React from 'react';
import Bike from './Bike';

class BikeList extends React.Component {

    render() {
        return (
            <div>{this.displayBikes(this.props.bikes)}</div>
        )
    }

    displayBikes(bikes) {
        return bikes.map((item, i) => {
            return (
                <Bike
                    key={i}
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

BikeList.PropTypes = {
    bikes: React.PropTypes.object.isRequired,
}

export default BikeList;
