import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class Articles extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [], 
            category: null,
        }
    }

    extractParams = () =>{
        var url = this.props.location.pathname;
        let decode = '';
        for(var i = 1; i < url.length; i++){
            decode += url[i];
        }

        return decode !== '' ? decode : null ;
    }

    componentDidMount() {
        fetch(`http://localhost:4000/api/articles/`)
        .then(res => res.json())
        .then(data => this.setState({ 
            items: data.article, 
            category: this.extractParams()
        }));
    }

    renderArticleByCategory = (categ) => {
        const { items } = this.state;
        return (
            <ul>
                {items.map(item => (categ ? categ == item.category : true) ?
                    <li key={item.id}>
                        <Link to={'/article/' + item.id}>
                            <p>{item.picture}</p>
                            <p>{item.title}</p>
                            <p>{item.body}</p>
                            <p>{item.category}</p>
                            <p>{item.createdAt}</p>
                        </Link>
                    </li> : null
                )}
            </ul>
        )
    }

    render() {
        const { category } = this.state;
        return (
            <div className='news'>
                {this.props.location.pathname}
                {this.renderArticleByCategory(category)}
            </div>
        )
    }
}