import React, { Component } from 'react';
// import Nested from './Nested'
import { NameContext } from './Context'


class Nested2 extends Component {
    render() {
        return (
            <>
                <h1>Nested 2</h1>
                <NameContext.Consumer >
                    {
                        (value) => {
                            return (
                                <div>
                                    <h1>My Name Is {value.myName}</h1>
                                    <button onClick={value.changeName}>Yes</button>
                                </div>
                            )
                        }
                    }
                </NameContext.Consumer>
            </>
        )
    }
}

export default Nested2;