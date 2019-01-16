import React, { Component } from 'react';
import Nested from './Nested'

export const NameContext = React.createContext()

class Context extends Component {
    state = {
        myName: 'Ryan'
    }
    changeName = () => {
        if(this.state.myName === 'Ryan'){
            this.setState({myName: 'The Cooler Ryan'})
        }else {
            this.setState({myName: 'Ryan'})
        }
    }
    render() {
        return (
            <>
                <NameContext.Provider value={{myName: this.state.myName, changeName: this.changeName}}>
                    <h1>Context API Test</h1>
                    <Nested />
                </NameContext.Provider>
            </>
        )
    }
}

export default Context;