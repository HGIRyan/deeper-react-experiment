import React, { Component } from 'react';
import withToggle from './Hoc'

class ToggleWHoc extends Component {

    render() {
        return (
            <div>
                <h1>Toggle W/ Hoc</h1>
                <button onClick={this.props.toggle}>Toggle</button>
                {this.props.bool ?
                    <h5>True</h5>
                    :
                    <h6>Not True</h6>
                }
                <button onClick={this.props.toggle}>Toggle</button>
                {this.props.bool ?
                    <h5>True</h5>
                    :
                    <h6>Not True</h6>
                }
            </div>
        )
    }
}

export default withToggle(ToggleWHoc)