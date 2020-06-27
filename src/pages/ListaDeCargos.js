import React, { useState, useEffect } from 'react';
import './ListaDeCargos.css'
import api from '../services/api'
import { Link } from 'react-router-dom';
import Submenu from '../components/Submenu'

export default function ListaDeUsuarios({ history }) {
    const [listaDeCargos, setListaDeCargos] = useState([]);

    async function listarCargos() {
        const response = await api.get('cargos', {
            headers: {
                //authorization: 'Bearer ' + localStorage.getItem('authorization')
            }
        })
        setListaDeCargos(response.data);
    };

    useEffect(() => {
        listarCargos();
    }, []);

    async function DeletarCargo(id) {
        //OBS: o metodo delete e put esta gerando o erro 405 (Method Not Allowed) no chrome
        const response = await api.delete('cargos/' + id, {
            headers: {
                //authorization: 'Bearer ' + localStorage.getItem('authorization')

            }
        })
        alert(response.data.mensagem);
        listarCargos();
    }

    return (
        <div id="pagina">

            <Submenu history={history} pathName1={'/'} name1={'USUÁRIOS'} pathName2={'/lista-de-perfis'} name2={'PERFIS'} pathName3={'/lista-de-cargos'} name3={'CARGOS'} />

            <div id="lista-de-cargos" >
                <ul>
                    <div id="cabecalho">

                    </div>


                    {listaDeCargos.map(cargo => (
                        <li>
                            <stronge>{cargo.nome}</stronge>
                            <Link to={{
                                pathname: '/editar-cargo',
                                state: {
                                    cargo: cargo
                                }
                            }}>

                                <button className='edita'  >EDITAR</button>
                            </Link>

                            <button className='delete' onClick={(e) => DeletarCargo(cargo.id)} >EXCLUIR</button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>

    );

}

