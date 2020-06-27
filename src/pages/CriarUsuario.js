import React, { Component } from 'react';
import './CriarUsuario.css';
import api from '../services/api'


class EditarUsuario extends Component {
    state = {
        name: '',
        cpf: '',
        dataDeNascimento: '2020-04-05T18:00:49.160+0000',//PROVISORIO PARA TESTE
        sexo: '',
        listaDeCargos: [],
        cargo: document.getElementById("selecionar-cargo")
    }

    handleSubmit = async e => {
        e.preventDefault();//prevents default behavior of sending user to another page

        await api.post('usuarios', {
            'nome': this.state.name,
            'cpf': this.state.cpf,
            'dataDeNascimento': this.state.dataDeNascimento,
            'sexo': this.state.sexo,
            'perfis': [],
            'cargo': { 'id': 2, 'nome': 'GERENTE' },//PROVISORIO PARA TESTE

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
                    placeholder='Digite o nome'
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
                    placeholder='Sexo M ou F '
                    onChange={this.handleChange}
                    value={this.state.sexo}
                />
                
                <button type="submit">Enviar</button>
            </form>
        );
    }
}
export default EditarUsuario;


