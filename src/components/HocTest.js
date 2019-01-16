import React, { Component } from 'react';
import withToggle from './Hoc'

class HocTest extends Component {

    render() {
        return (
            <React.Fragment>
                <h1>Toggle W/ Hoc</h1>
                <h3 onMouseEnter={this.props.toggle} onMouseLeave={this.props.toggle}>Toggle</h3>
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
            </React.Fragment>
        )
    }
}

export default withToggle(HocTest)
 