import React, { Component } from 'react'
import { commande, ordre } from './object';

export default class CreateContent extends Component {

  constructor(props) {
    super(props);
    this.state = {
      tableau: []
    }
  }

  seed = (obj) => {
    let tab = this.state.tableau;
    let form = Object.create(obj);
    form.id = this.state.tableau.length;
    tab.push(form);
    this.setState({ tableau: tab });
  }

  handleChange = (event) => {
    let tab = this.state.tableau;
    let cle = event.target.className;
    for(let value in tab[ event.target.id ]) {
      if(cle === 'fontSize' && value === cle){
        tab[ event.target.id ][ value ] = event.target.value + 'em';
      }
      else if(value === cle){
         tab[ event.target.id ][ value ] = event.target.value;
      }
    }
    this.setState({ tableau: tab });
  }

  formulaire = (input) => {
    let result = [];
    let tyPe = '';
    result.push(<label>{input['label']}</label>);
      for(let i = 0; i < ordre.length; i++) {
        for(let value in input){
          if(value === ordre[i]){
            if(value === 'color'){
              tyPe = 'color';
            }
            else if (value === 'fontSize' || value === 'width' || value === 'height'){
              tyPe = 'number';
            }
            else{
              tyPe = 'text';
            }
            result.push(<div><label>{value}</label>: <input type={tyPe} onChange={ this.handleChange } id={input['id']} className={value} placeholder={input[value]} /></div>);
        }
      }
    }
    return result;
  }

  affichage = (input) => {
    let result = `<${input['balise']} src=${input['source']} width=${input['width']} height=${input['height']} href=${input['href']} style="color:${input['color']}; font-size:${input['fontSize']}; font-family:${input['fontFamily']}">${input['text']}</${input['balise']}>`
    return {__html: result};
  }

  render(){
    return (
      <div>
          
          <div id='interface'>
              {this.state.tableau.map(input => 
                 <div>{this.formulaire(input)}</div>
              )}
          </div>
          
          <div className='commande'>
                {commande.map(item => 
                  <button onClick={() => this.seed(item) }>{item.label}</button>
                )}
          </div>
  
          <div id='affichage'>
              {this.state.tableau.map(input =>
                <div dangerouslySetInnerHTML={ this.affichage(input) }></div>
              )}
          </div>

      </div>
    );
  }
}