import React from 'react';
import { AppBar, Toolbar, Typography, Box } from '@material-ui/core';
import { Link } from 'react-router-dom';
import './Navbar.css'
function Navbar() {
    return (
        <>
            <AppBar position="relative" className='barra'>
                <Toolbar variant="dense">
                    <Box className='cursor'>
                        <Typography variant="h5" color="inherit">
                            INTEGRARE
                        </Typography>
                    </Box>


                    <Box display="flex" justifyContent="space-between" className='titulos'>
                        
                    <Link to='/home' className='text-decorator-none'>
                        <Box mx={1} className='cursor'>
                            <Typography variant="h6" color="inherit" className='titulos'>
                                Início
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
                        <Link to="/formularioTema" className="text-decorator-none">
                        <Box mx={1} className='cursor'>
                            <Typography variant="h6" color="inherit" className='titulos'>
                                Novos Temas
                            </Typography>
                        </Box>
                        </Link>

                        <Link to='/contatos' className='text-decorator-none'>
                            <Box mx={1} className='cursor'>
                                <Typography variant="h6" color="inherit" className='titulos'>
                                    Sobre nós
                                </Typography>
                            </Box>
                        </Link>

                        <Link to='/login' className='text-decorator-none'>
                            <Box mx={1} className='cursor'>
                                <Typography variant="h6" color="inherit" className='titulos'>
                                    Sair
                                </Typography>
                            </Box>
                        </Link>
                        
                        
                    </Box>

                </Toolbar>
            </AppBar>
        </>
    )
}

export default Navbar;