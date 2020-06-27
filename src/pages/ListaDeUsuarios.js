import React, { useState, useEffect } from 'react';
import './ListaDeUsuarios.css'
import api from '../services/api'
import { Link } from 'react-router-dom';
import Submenu from '../components/Submenu'
import FormataData from '../Utility/FormataData'
import FormatarString from '../Utility/FormatarString'

const { criarStringDePerfil } = FormatarString;
const { formataData } = FormataData;

export default function ListaDeUsuarios({ history }) {
    const [listaDeUsuarios, setListaDeUsuarios] = useState([]);

    async function listarUsuarios() {
        const response = await api.get('usuarios', {
            headers: {
                //authorization: 'Bearer ' + localStorage.getItem('authorization')

            }
        })
        setListaDeUsuarios(response.data);
    };

    useEffect(() => {
        listarUsuarios();
    }, []);


    return (
        <div id="pagina">

            <Submenu history={history} pathName1={'/'} name1={'USUÁRIOS'} pathName2={'/lista-de-perfis'} name2={'PERFIS'} pathName3={'/lista-de-cargos'} name3={'CARGOS'} />

            <div id="lista-de-usuarios" >
                <ul>
                    <div id="cabecalho">
                        <Link to="/criar-usuario">
                            <button className='add' >ADICIONAR</button>
                        </Link>
                    </div>

                    {listaDeUsuarios.map(usuario => (
                        <li>

                            <div className="bloco">
                                <div className="bloco-de-atributo">
                                    <div className="tipo-do-atributo">
                                        Nome
                                </div>
                                    <div className="atributo">
                                        {usuario.nome}
                                    </div>
                                </div>

                                <div className="bloco-de-atributo">
                                    <div className="tipo-do-atributo">
                                        CPF
                                </div>
                                    <div className="atributo">
                                        {usuario.cpf}
                                    </div>
                                </div>

                                <Link to={{
                                    pathname: '/editar-usuario',
                                    state: {
                                        usuario: usuario
                                    }
                                }}>

                                    <button className='edita'  >EDITAR</button>
                                </Link>

                                <div className="bloco-de-atributo">
                                    <div className="tipo-do-atributo">
                                        Data de nascimento
                                </div>
                                    <div className="atributo">
                                        {formataData(usuario.dataDeNascimento)}


                                    </div>
                                </div>

                                <div className="bloco-de-atributo">
                                    <div className="tipo-do-atributo">
                                        Sexo
                                </div>
                                    <div className="atributo">
                                        {usuario.sexo}
                                    </div>
                                </div>

                                <div className="bloco-de-atributo">
                                    <div className="tipo-do-atributo">
                                        Cargo
                                </div>
                                    <div className="atributo">
                                        {usuario.cargo.nome}
                                    </div>
                                </div>

                                <div className="bloco-de-atributo">
                                    <div className="tipo-do-atributo">
                                        Perfil
                                </div>
                                    <div className="atributo">
                                        {criarStringDePerfil(usuario.perfis)}

                                    </div>
                                </div>

                            </div>


                        </li>
                    ))}

                </ul>
            </div>
        </div>
    );

}

