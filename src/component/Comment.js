import React, { Component } from 'react'

export default class Comment extends Component {
    constructor(props) {
        super(props);
        this.state = {
            comment: [],
            post: `http://localhost:4000/api/article/${this.props.id}/comment/create/`
        }
    }

    componentDidMount() {
        fetch(`http://localhost:4000/api/article/${this.props.id}/comment/`)
        .then(res => res.json())
        .then(data => this.setState({ comment: data.commentFound }));
    }

    render() {
        const { post, comment } = this.state;
        return (
            <div>
                <div>Mes commentaires sont ici</div>
                <form method='post' action={post}>
                    <input type='text' name='pseudo' id='pseudo' placeholder='Votre Pseudo' />
                    <textarea type='text' name='body' id='body' placeholder='ajouter votre Commentaire'></textarea>
                    <button type='submit'>Envoyer</button>
                </form>
                {
                    comment.map(item => 
                        <div key={item.id}>
                            <h3>{item.pseudo}</h3>
                            <p>{item.body}</p>
                        </div>
                    )
                }
            </div>
        )
    }
}
