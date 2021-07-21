import React from 'react';

const css = {
    fontSize: "80rem",
    color: "black",
}

class Box extends React.Component {
    render() {
        return (
            <div className="box col-sm-3 col-6">
                <span 
                    className="material-icons" 
                        style={{
                            color: 
                                this.props.color === undefined 
                                    ? "blue"
                                    : this.props.color,
                            fontSize: 100,
                        }}
                >
                    {this.props.icon}
                </span>
                <p>{this.props.value} {this.props.unit}</p>
            </div>
        );
    }
}

export default Box;