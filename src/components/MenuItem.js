import Paper from '@mui/material/Paper';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import phoND from '.././images/phoND.jpeg'

const MenuItem = () => {
    return <Grid item xs={6} >
                <Grid container sx={{ border: 1 }}>
                    <Grid item xs={3}>
                        <Paper elevation={0}>
                            <img 
                                src = {phoND}
                                alt=''
                                className='img'
                            />
                        </Paper>
                    </Grid>
                    <Grid item xs={6} padding={2}>
                        <b>MenuItem1</b>
                        <br></br>
                        Description
                        <br></br>
                        Price
                        <br></br>
                        Quantity
                    </Grid>
                    <Grid item xs={3} >
                        Hello
                    </Grid>
                </Grid>
            </Grid>
}

export default MenuItem;