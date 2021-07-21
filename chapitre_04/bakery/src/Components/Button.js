import React from 'react';

class Add extends React.Component {
    render() {
        return (
            <div>
                <button 
                    type="submit" 
                    className="btn btn-outline-primary">
                    {this.props.isSelected}
                    {this.props.onClick}
                    {this.props.children}
                </button>
            </div>
        )
    }

}

export default Add;