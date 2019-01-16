import React, { Component } from 'react';
import Nested2 from './Nested2'

class Nested extends Component {
    render() {
        return (
            <>
                <h1>Nested 2</h1>
                <Nested2 />
            </>
        )
    }
}

export default Nested;