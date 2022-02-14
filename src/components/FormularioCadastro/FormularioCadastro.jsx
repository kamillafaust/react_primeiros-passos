import React, { Component } from 'react';
import './estilo.css';

class FormularioCadastro extends Component {
  constructor(props) {
    super(props);
    this.titulo = '';
    this.texto = '';
    this.categoria = 'Sem Categoria';
    this.state = {categorias: []};
  }

  componentDidMount(){
    this.props.categorias.inscrever(this._novasCategorias.bind(this));
  }

  _novasCategorias(categorias){
    this.setState({...this.setState, categorias});
  }

  _handlerMudancaCategoria(evento) {
    evento.stopPropagation();
    this.categoria = evento.target.value;
  }

  _handlerMudancaTitulo(evento) {
    evento.stopPropagation();
    this.titulo = evento.target.value;
  }

  _handlerMudancaTexto(evento) {
    evento.stopPropagation();
    this.texto = evento.target.value;
  }

  _criarNota(evento) {
    evento.preventDefault(); //para não recarregar a página
    evento.stopPropagation(); //não disparar o evento do pai
    this.props.criarUmaNota(this.titulo, this.texto, this.categoria);
  }

  render() {
    return (
      <form className="form-cadastro" onSubmit={this._criarNota.bind(this)}>
        <select onChange={this._handlerMudancaCategoria.bind(this)} className="form-cadastro_input">
          <option>Sem Categoria</option>

          {this.state.categorias.map((categoria, index) => {
            return <option key={index}>{categoria}</option>;
          })}
        </select>
        <input
          type="text"
          placeholder="Título"
          className="form-cadastro_input"
          onChange={this._handlerMudancaTitulo.bind(this)}
        />

        <textarea
          rows={15}
          placeholder="Escreva sua nota..."
          className="form-cadastro_input"
          onChange={this._handlerMudancaTexto.bind(this)}
        />

        <button className="form-cadastro_input form-cadastro_submit">
          Criar Nota
        </button>
      </form>
    );
  }
}

export default FormularioCadastro;
