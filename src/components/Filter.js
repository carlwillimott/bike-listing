import React from 'react';

class Filter extends React.Component {

    render() {
        return (
            <div>
                <h2>Filter</h2>
                <p>Select an option from the list to show bikes of this class first.</p>
                <select>
                    {this.getOptions()}
                </select>
            </div>
        )
    }

    getOptions() {
        return this.props.classes.map((item) => {
            return (
                <option
                    value={item}>
                    {item}
                </option>
            )
        });
    }

}

Filter.PropTypes = {
    classes: React.PropTypes.array.isRequired
};

export default Filter;
