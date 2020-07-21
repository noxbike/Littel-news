import React, { Component } from 'react'

export default class Articles extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [],
        }
    }

    componentDidMount() {
        fetch("http://localhost:4000/api/articles/")
        .then(res => res.json())
        .then(data => this.setState({ items: data.article}));
    }
    render() {
        const { items } = this.state;
        return (
            <div className='news'>
                {this.props.location.pathname}
                <ul>
                    {
                        items.map(item =>
                            <li key={item.id}>
                                <p>{item.picture}</p>
                                <p>{item.title}</p>
                                <p>{item.body}</p>
                                <p>{item.category}</p>
                            </li>
                    )}
                </ul>
            </div>
        )
    }
}
