import React, { Component } from 'react'

export default class Articles extends Component {
    render() {
        return (
            <div className='news'>
                {this.props.location.pathname}
            </div>
        )
    }
}
