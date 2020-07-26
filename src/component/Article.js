import React, { Component } from 'react';
import Comment from './Comment.js';
import CreateContent from './CreateContent.js';

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

    convert = () => {
        var { item } = this.state;
        var input = item.content;
        if(input){
            document.getElementById('article').innerHTML = input;
        }
    }

    componentDidMount() {
        fetch(`http://localhost:4000/api/article/${ this.extractParams() }`)
        .then(res => res.json())
        .then(data => this.setState({ item: data.contentFound[0] }));
    }

    render() {
        const { item} = this.state;
        if(item !== null) {
            return (
                <div className='content'>
                    <div id='article'>
                        {this.convert()}
                    </div>
                    <Comment id={ this.extractParams() }/>
                </div>
            )
        }
        else {
            return (
                <CreateContent id={ this.extractParams() } />
            )
        }
    }
}
