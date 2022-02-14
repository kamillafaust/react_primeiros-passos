import React, { Component } from 'react';
import './estilo.css';

class ListaDeCategorias extends React.Component {
  
  constructor(){
    super();
    this.state = {categorias: []}
    this._novasCategorias = this._novasCategorias.bind(this);
  } 

  componentDidMount(){
    this.props.categorias.inscrever(this._novasCategorias);
  }

  componentWillUnmount(){
    this.props.categorias.desinscrever(this._novasCategorias);
  }


  _novasCategorias(categorias){
    this.setState({...this.setState, categorias});
  }

  _handlerEventoInput(evento) {
    if (evento.key == 'Enter') {
     // console.log(1);
      let nomeCategoria = evento.target.value;
      this.props.adicionarCategoria(nomeCategoria);
    }
  }

  render() {
    return (
      <section className="lista-categorias">
        <ul className="lista-categorias_lista">
          {this.state.categorias.map((categoria, index) => {
            return (
              <li className="lista-categorias_item" key={index}>
                {categoria}
              </li>
            );
          })}
        </ul>
        <input
          type="text"
          className="lista-categorias_input"
          placeholder="Adicionar Categoria"
          onKeyUp={this._handlerEventoInput.bind(this)}
        />
      </section>
    );
  }
}

export default ListaDeCategorias;
