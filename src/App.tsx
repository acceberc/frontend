import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/estaticos/navbar/Navbar';
import Footer from './components/estaticos/footer/Footer';
import Home from './paginas/home/Home';
import Login from './paginas/login/Login';
import Contatos from './paginas/contatos/Contatos'
import './App.css';
import CadastroUsuario from './paginas/cadastroUsuario/CadastroUsuario'
import ListaTema from './components/temas/listTemas/ListTema';
import ListaPostagem from './components/postagens/listapostagem/ListaPostagem';
import CadastroPost from './components/postagens/cadastroPost/CadastroPost';
import CadastroTema from './components/temas/CadastroTema/CadastroTema';
import DeletarPostagem from './components/postagens/deletarPostagem/DeletarPostagem';
import DeletarTema from './components/temas/deletarTema/DeletarTema';
import 'react-toastify/dist/ReactToastify.css' 
import { Provider } from 'react-redux';
import store from './store/store';
import { ToastContainer } from 'react-toastify';

//atualizado

function App() {  
  return (
    
    <Provider store={store}>
    <ToastContainer />
    <Router>
      <Navbar />
        <Switch>
          <div style={{minHeight: '100vh'}}>

            <Route exact path='/'>
              <Login />
            </Route>

            <Route path='/login'>
              <Login />
            </Route>

            <Route path='/home'>
              <Home />
            </Route>

            <Route path='/contatos'>
              <Contatos />
            </Route>

            <Route path='/cadastrousuario'>
              <CadastroUsuario />
            </Route>
            
            <Route path='/temas'>
              <ListaTema />
            </Route>

            <Route path='/posts'>
              <ListaPostagem />
            </Route>

            <Route exact path='/formularioPostagem'>
              <CadastroPost />
            </Route>

            <Route exact path='/formularioPostagem/:id'>
              <CadastroPost />
            </Route>

            <Route exact path='/formularioTema'>
              <CadastroTema />
            </Route>
            
            <Route exact path='/formularioTema/:id'>
              <CadastroTema />
            </Route>
            <Route path='/deletarPostagem/:id'>
              <DeletarPostagem />
            </Route>
            <Route path='/deletarTema/:id'>
              <DeletarTema />
            </Route>
            
          </div>
        </Switch>
      <Footer />
    </Router>
    </Provider >
  );
}

export default App;
