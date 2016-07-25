import React from 'react';

class Sort extends React.Component {

    render() {
        return (
            <div>
                <h2>Sort</h2>
                <p>Select an option from the list to show bikes of this class first.</p>
                <select
                    onChange={(event) => this.props.onSortChange(event.target.value)}
                    value={this.props.selected}>
                    <option
                        key={"none"}
                        value={"none"}>
                        {"- Select -"}
                    </option>
                    {this.getOptions()}
                </select>
            </div>
        )
    }

    getOptions() {
        return this.props.classes.map((item, i) => {
            return (
                <option
                    key={i}
                    value={item}>
                    {item}
                </option>
            )
        });
    }

}

Sort.PropTypes = {
    classes: React.PropTypes.array.isRequired,
    onSortChange: React.PropTypes.func.isRequired,
    selected: React.PropTypes.string.isRequired
};

export default Sort;
