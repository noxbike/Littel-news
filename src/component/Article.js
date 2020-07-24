import React, { Component } from 'react';
import Comment from './Comment.js';

export default class Acticle extends Component {
    constructor(props) {
        super(props);
        this.state = {
            item: []
        }
    }

    extractParams = () =>{
        var url = this.props.location.pathname;
        let decode = '';
        for(var i = 9; i < url.length; i++){
            decode += url[i];
        }
        return decode;
    }

    componentDidMount() {
        fetch(`http://localhost:4000/api/article/${ this.extractParams() }`)
        .then(res => res.json())
        .then(data => this.setState({ item: data.articleFound }));
    }

    render() {
        const { item } = this.state;
        return (
            <div>
                <div className='article'>
                    <li key={ item.id }>
                        <p>{ item.picture }</p>
                        <p>{ item.title }</p>
                        <p>{ item.body }</p>
                        <p>{ item.category }</p>
                        <p>{ item.createdAt }</p>
                    </li>
                </div>

                <Comment id={ this.extractParams() }/>
            </div>
        )
    }
}
