import React, { Component } from 'react';
import Comment from './Comment.js';
import CreateContent from './CreateContent.js';

export default class Acticle extends Component {
    constructor(props) {
        super(props);
        this.state = {
            item: [],
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

    convertHtml = (input) => {
        return {__html: input };
    }

    componentDidMount() {
        fetch(`http://localhost:4000/api/article/${ this.extractParams() }`)
        .then(res => res.json())
        .then(data => this.setState({ 
            item: data.contentFound,
        }));
    }

    render() {
        const { item } = this.state;
        
        if(item.length !== 0) {
            return (
                <div className='content'> 
                    {item.map(item =>
                        <div>
                            <div id='article' dangerouslySetInnerHTML={ this.convertHtml(item.content) }></div>
                            <Comment id={ this.extractParams() }/>
                        </div>
                    )}
                </div>
            )
        }
        else {
            return( 
                <CreateContent id={ this.extractParams() } /> 
            );
        }
        
    }
}