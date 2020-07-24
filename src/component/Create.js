import React, { Component } from 'react'

export default class Create extends Component {
    constructor(props) {
        super(props);
        this.state = {
            picture: '',
            title: '',
            body: '',
            category: ''
        }
    }

    handleChangePicture = event => {
        this.setState({ picture: event.target.value });
    }

    handleChangeTitle = event => {
        this.setState({ title: event.target.value });
    }

    handleChangeBody = event => {
        this.setState({ body: event.target.value });
    }

    handleChangeCategory = event => {
        this.setState({ category: event.target.value });
    }

    handlePost = event => {
        fetch('http://localhost:4000/api/article/create', {
            method: 'POST',
            body: JSON.stringify({
                'picture': this.state.picture,
                'title': this.state.title,
                'body': this.state.body,
                'category': this.state.category
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
    }

    render() {
        return (
            <div>
                <div>my form</div>
                <form className='article-create' onSubmit={ this.handlePost }>
                    <input type='text' name='picture' id='picture' onChange={ this.handleChangePicture } placeholder='ajouter une photo' />
                    <input type='text' name='title' id='title' onChange={ this.handleChangeTitle } placeholder='ajouter un title' />
                    <textarea type='text' name='body' id='body' onChange={ this.handleChangeBody } placeholder='ajouter votre texte'></textarea>
                    <input type='text' name='category' id='category' onChange={ this.handleChangeCategory } placeholder='ajouter une category' />
                    <button type='submit'>Envoyer</button>
                </form>
            </div>
        )
    }
}
