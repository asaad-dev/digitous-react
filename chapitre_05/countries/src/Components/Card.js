import React from 'react';

class Card extends React.Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-6 offset-3">
                        <img  className="img-fluid" src={this.props.flag} alt={this.props.name} />
                    </div>
                </div>

                <div className="row">
                    <div className="col-6 offset-3">
                        <p>Capital: {this.props.capital}</p>
                    </div>
                </div>

                <div className="row">
                    <div className="col-6 offset-3">
                        <p>Population: {this.props.population}</p>
                    </div>
                </div>

                <div className="row">
                    <div className="col-6 offset-3">
                        <p>region: {this.props.region}</p>
                    </div>
                </div>
            </div>
        )
    }
}
export default Card;