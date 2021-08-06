import React from 'react';

class Card extends React.Component {
    render() {
        const movie = this.props.movies.find((movie) => movie.id.toString() === this.props.match.params.movies.id)
        return (
             <div className="card">
                <img src="https://www.pngall.com/wp-content/uploads/1/Film-High-Quality-PNG.png" alt=""/>
                <h3>{movie.title}</h3>
                <h5>{movie.year}</h5>
                <p>{movie.description}</p>
             </div>
        );
    }
}

export default Card;