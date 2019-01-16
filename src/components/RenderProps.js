import React, { Component } from 'react';

class RenderProps extends Component {
    state = {
        show: false,
        close: 'not close'
    }
    toggle = () => {
        this.setState({ show: !this.state.show })
    }
    render() {
        return (
            <div>
                {this.props.render({ bool: this.state.show, toggle: this.toggle })}
            </div>
        )
    }
}

export default class ToggleImage extends Component {
    render() {
        return (
            <div>
                <RenderProps render={({ bool, toggle }) => (
                    <div>
                        <p onClick={toggle}>Show/Hide</p>
                        {bool ?
                            <p >Im Here</p>
                            :
                            <p>Im Not Here</p>
                        }
                    </div>
                )} />
                <hr />
                <RenderProps render={({ bool, toggle }) => (
                    <div>
                        <button onClick={toggle}>Show</button>
                        {bool ?
                            <div>
                                <br />
                                <p>Close</p>
                                <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Gowy-icaro-prado.jpg/1200px-Gowy-icaro-prado.jpg' alt='' style={{ width: '200px' }} />
                                <br />
                            </div>
                            :
                            <div>
                                <br />
                                <img src='http://www.21stbirthdaypartyideas.net/wp-content/uploads/2014/10/21st-Birthday-Party-Ideas-Games-You-Can-Play.jpg' alt='' style={{ width: '200px' }} />
                                <p>Not Close</p>
                                <br />
                            </div>}
                    </div>
                )} />
            </div>
        )
    }
}
