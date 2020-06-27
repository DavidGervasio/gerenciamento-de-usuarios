import React, { useState, useEffect } from 'react';
import './ListaDePerfis.css'
import api from '../services/api'
import { Link } from 'react-router-dom';
import Submenu from '../components/Submenu'

export default function ListaDeUsuarios({ history }) {
    const [listaDePerfis, setListaDePerfis] = useState([]);

    async function listarPerfis() {
        const response = await api.get('perfis', {
            headers: {
                //authorization: 'Bearer ' + localStorage.getItem('authorization')
            }
        })
        setListaDePerfis(response.data);
    };

    useEffect(() => {
        listarPerfis();
    }, []);

    async function DeletarPerfil(id) {
        //OBS: o metodo delete e put esta gerando o erro 405 (Method Not Allowed) no chrome
        const response = await api.delete('perfis/' + id, {
            headers: {
                //authorization: 'Bearer ' + localStorage.getItem('authorization')
            }
        })
        alert(response.data.mensagem);
        listarPerfis();
    }

    return (
        <div id="pagina">

            <Submenu history={history} pathName1={'/'} name1={'USUÁRIOS'} pathName2={'/lista-de-perfis'} name2={'PERFIS'} pathName3={'/lista-de-cargos'} name3={'CARGOS'} />

            <div id="lista-de-pirfis" >
                <ul>
                    <div id="cabecalho">

                    </div>

                    {listaDePerfis.map(perfil => (
                        <li>
                            <stronge>{perfil.nome}</stronge>
                            <Link to={{
                                pathname: '/editar-perfil',
                                state: {
                                    perfil: perfil
                                }
                            }}>

                                <button className='edita'  >EDITAR</button>
                            </Link>

                            <button className='delete' onClick={(e) => DeletarPerfil(perfil.id)} >EXCLUIR</button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>

    );

}

