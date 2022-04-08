import { Typography, Box, Grid, Button } from '@material-ui/core';
import './Home.css';
import { Link } from 'react-router-dom';



function Home() {
   
    return (
        <>
            <Grid container direction="row" justifyContent="center" alignItems="center" className='caixa'>
                <Grid alignItems="center" item xs={5} className='caixa1'>
                    <Box paddingX={20} >
                        <Typography variant="h3" gutterBottom color="textPrimary" component="h3" align="center" className='titulo'>Bem vinde!</Typography>
                        <Typography variant="h5" gutterBottom color="textPrimary" component="h5" align="center" className='titulo'>A Integrare ajuda você a se conectar e compartilhar com educadores especializados!</Typography>
                    </Box>
                    <Box display="flex" justifyContent="center">
                        <Box>
                            <Link to="cadastrousuario" className="text-decorator-none">
                                <Button variant="outlined" className='botao'>Comece aqui</Button>
                            </Link>
                        </Box>

                        <Box>
                            <Link to="/contatos" className="text-decorator-none">
                                <Button variant="outlined" className='botao'>Nos conheça melhor</Button>
                            </Link>
                        </Box>

                    </Box>
                </Grid>
                <Grid item xs={7} className='imagemhome'></Grid>

                <Grid item xs={8}>
                    <Box paddingLeft={7} >
                        <img src="https://i.ibb.co/GFbYc1B/pngwing-com-5.png" alt="crianças" className='imagemhome2'/>
                    </Box>
                </Grid>
                <Grid item xs={4} className="caixa">
                    <Box paddingRight={8}>
                        <Typography variant="h3" gutterBottom color="textPrimary" component="h3" align="right" style={{ color: "#424242", fontWeight: "bold" }}>NÓS ACREDITAMOS NA EDUCAÇÃO INCLUSIVA E EQUITATIVA DE QUALIDADE.</Typography>
                        <Link to='/contatos'>
                        <Typography className='font2' variant="h6" gutterBottom color="textPrimary" component="h6" align="right" style={{ color: "#424242", fontWeight: "bold" }}>SAIBA MAIS</Typography>
                        </Link>

                    </Box>
                </Grid>
            </Grid>
        </>
    );
}

export default Home;