import React from 'react';

 class Bike extends React.Component {

    render() {
        return (
            <div className={"col-md-3"} style={styles}>
                <h3>{this.props.name}</h3>
                <p>{this.props.description}</p>
                <img src={this.props.image.thumb} width={"100%"} />
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

// Basic styling for the component.
let styles = {
    minHeight: "500px"
};

export default Bike;
