import { AppBar, Box, Button, Toolbar, Typography } from '@material-ui/core';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';
import { addToken } from '../../../store/tokens/actions';
import { TokenState } from '../../../store/tokens/tokensReducer';
import './Navbar.css';


function Navbar() {

    let history = useHistory()

    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
    );

    const dispatch = useDispatch();


    function goLogout() {

        dispatch(addToken(''));
        toast.info('Usuário deslogado', {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: false,
            theme: "colored",
            progress: undefined,

        })
        history.push("/login")
    }

    var navbarComponent;

    if (token !== "") {
        navbarComponent =
            <AppBar position="static" className='barra'>
                <Toolbar variant="dense">
                    


                    <Box display="flex" justifyContent="space-between" className='titulos'>

                        <Link to='/feed' className='text-decorator-none'>
                            <Box mx={1} className='cursor'>
                                <Typography variant="h6" color="inherit" className='titulos'>
                                    Integrare
                                </Typography>
                            </Box>
                        </Link>

                        <Link to="/posts" className="text-decorator-none">
                            <Box mx={1} className='cursor'>
                                <Typography variant="h6" color="inherit" className='titulos'>
                                    Postagens
                                </Typography>
                            </Box>
                        </Link>

                        <Link to="/temas" className="text-decorator-none">
                            <Box mx={1} className='cursor'>
                                <Typography variant="h6" color="inherit" className='titulos'>
                                    Temas
                                </Typography>
                            </Box>
                        </Link>
                        

                       

                        <Box mx={1} className='cursor' onClick={goLogout}>
                            <Typography variant="h6" color="inherit" className='titulos'>
                                Sair
                            </Typography>
                        </Box>


                    </Box>

                </Toolbar>
            </AppBar>


    }
    else {
        navbarComponent = <AppBar   className='barra' >
            <Toolbar style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between" }}>
                <Link to='/home' className='text-decorator-none'>
                   Integrare
                </Link>
                <Box paddingRight={5}>
                    <Link to='/login' className='text-decorator-none'>
                        <Button color="inherit" style={{ fontWeight: "bold" }}>Entrar</Button>
                    </Link>
                    <Link to='/cadastrousuario' className='text-decorator-none2'>
                        <Button color="inherit" style={{ fontWeight: "bold" }}>Cadastre-se</Button>
                    </Link>
                </Box>
            </Toolbar>
        </AppBar >

    }

    return (
        <>
            {navbarComponent}
        </>
    )

}


export default Navbar;