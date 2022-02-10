import React, { Component } from 'react';
import './estilo.css';

class ListaDeCategorias extends React.Component {
  
  _handlerEventoInput(evento) {
    if (evento.key == 'Enter') {
      let nomeCategoria = evento.target.value;
      this.props.adicionarCategoria(nomeCategoria);
    }
  }

  render() {
    return (
      <section className="lista-categorias">
        <ul className="lista-categorias_lista">
          {this.props.categorias.map((categoria, index) => {
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
