import React from 'react';

class Button extends React.Component {
    
    render() {
        return (
            <div>
                <button 
                    className="btn btn-outline-primary"
                    onClick={this.props.onClick}
                    name={this.props.children}
                    >                    
                    {this.props.children}
                </button>
            </div>
        );
    }

}

export default Button;