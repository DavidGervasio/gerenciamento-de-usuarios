import React, { Component } from 'react';
import './EditarCargo.css';
import api from '../services/api'
var cargo;

class EditarCargo extends Component {
    state = {
        name: '',
    }

    componentDidMount() {
        cargo = this.props.location.state.cargo;
        this.state.name = cargo.nome;
    }

    // student = this.history.state.student;

    handleSubmit = async e => {
        e.preventDefault();//prevents default behavior of sending user to another page
         
        await api.put('cargos', {
            'nome': this.state.name,
            'id': cargo.id
        });
        this.props.history.push('/lista-de-cargos');

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
export default EditarCargo;