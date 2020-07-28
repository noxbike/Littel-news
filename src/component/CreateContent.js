import React, { Component } from 'react'

export default class CreateContent extends Component {
    constructor(props) {
        super(props);
        this.state= {
            content: ''
        }
    }

    handleChangeContent = event => {
        this.setState({ content: event.target.value });
        document.getElementById('test-visual').innerHTML = event.target.value;
    }

    handlePost = () => {
        fetch(`http://localhost:4000/api/article/${ this.props.id }/create/`, {
            method: 'POST',
            body: JSON.stringify({
                'content': this.state.content,
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
    }

    render() {
        return (
            <div>
                <form className='create-content' onSubmit={ this.handlePost }>
                    <textarea type='text' name='content' id='content' cols='80' onChange={ this.handleChangeContent} />
                    <button type='submit'>Envoyer</button>
                </form>
                <div id='test-visual'>

                </div>
            </div>
        )
    }
}
