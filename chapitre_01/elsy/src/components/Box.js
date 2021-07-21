import React from 'react';

const css = {
    fontSize: "80rem",
    color: "black",
}

class Box extends React.Component {
    renderSlider = () => {
        if(this.props.unit !== "L") {
            return (
                <input 
                min={this.props.min} 
                max={this.props.max} 
                value={this.props.value}
                onChange={this.props.onChange}
                type="range" 
            />
            );
        }

        return null;
    };

    render() {
        return (
            <div className="box col-sm-3 col-6">
                <span 
                    className="material-icons" 
                        style={{
                            color: this.props.color,
                            fontSize: 100,
                        }}
                    >
                    {this.props.icon}
                </span>
                <p>
                    {Math.round(this.props.value * 100) / 100} {this.props.unit}
                </p>
                {this.renderSlider()}
            </div>
        );
    }
}

export default Box;