import React from 'react';

 class Bike extends React.Component {

    render() {
        return (
            <div>
                <h3>{this.props.name}</h3>
                <p>{this.props.description}</p>
                <img src={this.props.image.thumb} />
                <ul>{this.displayClasses(this.props.class)}</ul>
            </div>
        )
    }

    displayClasses(classes) {
        return classes.map((item, i) => {
            return (
                <li key={i}>{item}</li>
            )
        });
    }

};

Bike.PropTypes = {
    id: React.PropTypes.number.isRequired,
    name: React.PropTypes.string.isRequired,
    description: React.PropTypes.string.isRequired,
    image: React.PropTypes.object.isRequired,
    class: React.PropTypes.array.isRequired
};

export default Bike;
