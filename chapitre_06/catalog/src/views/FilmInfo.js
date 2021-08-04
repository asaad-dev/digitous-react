import React from 'react';
import Link from 'react-router-dom'

class FilmInfo extends React.Component {
   render() {
       return (
           <div>
                <h2>{ this.props.match.params.title}</h2>
                <h3>{ this.props.match.params.director }</h3>
                <h5>{ this.props.match.params.stars }</h5>
                <p>{ this.props.match.params.description }</p>
           </div>
       )
   }
}

export default FilmInfo;