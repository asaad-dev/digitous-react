import React from 'react';
import { Link } from 'react-router-dom';

class Navbar extends React.Component {
    render() {
        return (
             <nav>
                 <ul>
                     <li><Link to="/">Home</Link></li>
                     <li><Link to="/weekly">This weekly</Link></li>
                     <li><Link to="/weekly-battle">This week Battle</Link></li>
                     <li><Link to="/popular">Popular</Link></li>
                     <li><Link to="/popular-battle">Popular Battle</Link></li>
                     <li><Link to="/favorites">My favorites</Link></li>
                 </ul>
             </nav>
        );
    }
}

export default Navbar;