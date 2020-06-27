import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import ListaDeUsuarios from './pages/ListaDeUsuarios';
import ListaDeCargos from './pages/ListaDeCargos';
import ListaDePerfis from './pages/ListaDePerfis';
import EditarPerfil from './pages/EditarPerfil';
import EditarCargo from './pages/EditarCargo';
import EditarUsuario from './pages/EditarUsuario'; 
import CriarUsuario from './pages/CriarUsuario';


export default function Routes() {
    return (
        <BrowserRouter>
            <Route path="/" exact component={ListaDeUsuarios} />
            <Route path="/lista-de-perfis" exact component={ListaDePerfis} />
            <Route path="/lista-de-cargos" exact component={ListaDeCargos} />
            <Route path="/editar-perfil" exact component={EditarPerfil} />
            <Route path="/editar-cargo" exact component={EditarCargo} />
            <Route path="/editar-usuario" exact component={EditarUsuario}/>
            <Route path="/criar-usuario" exact component={CriarUsuario}/>

    } />

             </BrowserRouter>
    );
}