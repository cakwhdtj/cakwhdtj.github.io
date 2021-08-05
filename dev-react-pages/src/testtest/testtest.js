import React, { Component } from 'react';

class Hihihi extends Component {
    render() {
        return (
            <header className="Hihihi">
                <h1>{this.props.annyong}</h1>
                {this.props.hello}
            </header>
        );
    }
}

export default Hihihi;