import React, { Component } from 'react'

export default class Comment extends Component {
    constructor(props) {
        super(props);
        this.state = {
            comment: [],
            pseudo: '',
            body: '',
        }
    }

    handleChangePseudo = event => {
        this.setState({ pseudo: event.target.value });
    }

    handleChangeBody = event => {
        this.setState({ body: event.target.value });
    }

    componentDidMount() {
        fetch(`http://localhost:4000/api/article/${ this.props.id }/comment/`)
        .then(res => res.json())
        .then(data => this.setState({ comment: data.commentFound }));
    }

    handlePost = event => {
        fetch(`http://localhost:4000/api/article/${ this.props.id }/comment/create/`, {
            method: 'POST',
            body: JSON.stringify({
                'pseudo': this.state.pseudo,
                'body': this.state.body,
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
    }

    render() {
        const { comment } = this.state;
        return (
            <div>
                <div>Mes commentaires sont ici</div>
                <form className='formCom' onSubmit={ this.handlePost }>
                    <input type='text' name='pseudo' id='pseudo' onChange={ this.handleChangePseudo } placeholder='Votre Pseudo' />
                    <textarea type='text' name='body' id='body' onChange={ this.handleChangeBody } placeholder='ajouter votre Commentaire'></textarea>
                    <button type='submit'>Envoyer</button>
                </form>
                {
                    comment.map(item => 
                        <div key={ item.id }>
                            <h3>{ item.pseudo }</h3>
                            <p>{ item.body }</p>
                        </div>
                    )
                }
            </div>
        )
    }
}
