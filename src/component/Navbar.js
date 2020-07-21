import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class Navbar extends Component {
    render() {
        return (
            <div className='navbar'>
                <ul>
                    <li><Link to='/'>News</Link></li>
                    <li><Link to='/K-pop'>K-pop</Link></li>
                    <li><Link to='/Sport'>Sport</Link></li>
                    <li><Link to='/Technologie'>Technologie</Link></li>
                    <li><Link to='/Science'>Science</Link></li>
                    <li><Link to='/create'>Create Article</Link></li>
                </ul>
            </div>
        )
    }
}
