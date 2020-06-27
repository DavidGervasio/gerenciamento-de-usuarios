import React, { Component } from 'react';
import './EditarPerfil.css';
import api from '../services/api'
var perfil;

class EditarPerfil extends Component {
    state = {
        name: '',
    }

    componentDidMount() {
        perfil = this.props.location.state.perfil;
        this.state.name = perfil.nome;
    }

    // student = this.history.state.student;

    handleSubmit = async e => {
        e.preventDefault();//prevents default behavior of sending user to another page
        
        await api.put('perfis', {
            'nome': this.state.name,
            'id': perfil.id
        });
        this.props.history.push('/lista-de-perfis');

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
                <button type="submit">Enviar</button>
            </form>
        );
    }
}
export default EditarPerfil;