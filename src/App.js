import React, { Component} from 'react';
import './App.css';

class App extends Component{
    
  constructor(props){
    super(props);
    this.state = {
      frase:'Vamos ver qual a sua sorte!'
    };

    this.quebraBiscoito = this.quebraBiscoito.bind(this);

    this.frases = ['Siga os bons e aprenda com eles.', 'O bom-senso vale mais do que muito conhecimento.', 
    'O riso é a menor distância entre duas pessoas.', 
    'Deixe de lado as preocupações e seja feliz.',
    'Realize o óbvio, pense no improvável e conquiste o impossível.',
    'Acredite em milagres, mas não dependa deles.',
    'A maior barreira para o sucesso é o medo do fracasso.'];
  }

  quebraBiscoito(){
    let state = this.state;
    let numeroAleatorio = Math.floor(Math.random() * this.frases.length);
    state.frase = '"' + this.frases[numeroAleatorio] + '"';
    this.setState(state)

  }
  
  
  render(){
      return(
        <div className="container">
          <img src={require('./assets/biscoito.png')} className="img" /> 
          <Botao nome="Abrir Biscoito" acaoBtn={this.quebraBiscoito} />
          <h3 className="frase" >{this.state.frase}</h3>       
        </div>
      );
    }
}

class Botao extends Component{
  render(){
    return(
      <div>
          <button onClick={this.props.acaoBtn} className="btn">Abrir Biscoito!</button>
      </div>
    );
  }
}


export default App;