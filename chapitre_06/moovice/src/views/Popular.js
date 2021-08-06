import React from 'react';
import Card from './components/Card';

class Popular extends React.Component {
    constructor() {
        super();

        this.state = {
            movies: [],
            https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key={9320ab93521ec312f8778f8e1cf4fa97},
        };
    }

    render() {
        return (
             <div>
                <h1>Popular</h1>
                <Card />
             </div>
        );
    }
}

export default Popular;