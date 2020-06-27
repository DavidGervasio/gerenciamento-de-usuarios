import React, { Component } from 'react';
import './EditarCargo.css';
import api from '../services/api'
var usuario;

class EditarUsuario extends Component {
    state = {
        name: '',
    }

    componentDidMount() {
        usuario = this.props.location.state.usuario;
        this.state.name = usuario.nome;
        this.state.cpf = usuario.cpf;
        this.state.dataDeNascimento = usuario.dataDeNascimento;
        this.state.sexo = usuario.sexo;
    }

    // student = this.history.state.student;

    handleSubmit = async e => {
        e.preventDefault();//prevents default behavior of sending user to another page

        await api.put('usuarios', {
            'nome': this.state.name,
            'cpf': this.state.cpf,
            'dataDeNascimento': this.state.dataDeNascimento,
            'sexo': this.state.sexo,
            'perfis': usuario.perfis,
            'cargo': usuario.cargo,
            'id': usuario.id,
        });
        this.props.history.push('/');
    }

    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    }

    render() {
        return (
            <form id="formulario" onSubmit={this.handleSubmit}>
                <input
                    type="text"
                    name="name"
                    placeholder='Digite novo nome'
                    onChange={this.handleChange}
                    value={this.state.name}
                />

                <input
                    type="text"
                    name="cpf"
                    placeholder='Digite o CPF'
                    onChange={this.handleChange}
                    value={this.state.cpf}
                />

                <input
                    type="text"
                    name="sexo"
                    placeholder='Sexo  M ou F '
                    onChange={this.handleChange}
                    value={this.state.sexo}
                />
                <button type="submit">Enviar</button>
            </form>
        );
    }
}
export default EditarUsuario;


