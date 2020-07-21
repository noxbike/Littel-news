import React, { Component } from 'react'
const post = 'http://localhost:4000/api/article/create';

export default class Create extends Component {
    render() {
        return (
            <div>
                <div>my form</div>
                <form method='post' action={post}>
                    <input type='text' name='picture' id='picture' placeholder='ajouter une photo' />
                    <input type='text' name='title' id='title' placeholder='ajouter un title' />
                    <textarea type='text' name='body' id='body' placeholder='ajouter votre texte'></textarea>
                    <input type='text' name='category' id='category' placeholder='ajouter une category' />
                    <button type='submit'>Envoyer</button>
                </form>
            </div>
        )
    }
}
