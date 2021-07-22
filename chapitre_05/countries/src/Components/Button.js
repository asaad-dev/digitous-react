import React from 'react';

class Button extends React.Component {
    render() {
        return (
            <div>
                <button 
                    type="button" 
                    className="btn btn-primary">
                    {this.props.children}
                    {this.props.onClick}
                </button>
            </div>
        )
    }
}
export default Button;