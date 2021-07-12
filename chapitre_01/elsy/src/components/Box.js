import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";


const boxStyle = {
    fontSize: 100,
    color: 'black'
}
class Box extends React.Component {
    render() {
        return (
            <div className="box col-sm-3 col-6">
                <span className="material-icons">{this.props.icon} {this.props.color} {this.props.value} {this.props.unit}</span>
            </div>
        );
    }
}

export default Box;