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
                    <input type='text' name='content' id='content' onChange={ this.handleChangeContent} />
                    <button type='submit'>Envoyer</button>
                </form>
            </div>
        )
    }
}
