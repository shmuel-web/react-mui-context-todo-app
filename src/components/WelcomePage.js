import { Button, Typography, List, ListItem, Container, Box } from '@mui/material';
import AppContext from '../contexts/app.context';
import { useContext } from 'react';

function WelcomePage() {
    const appContext = useContext(AppContext);

    return (
        <div className="App">
                <Box sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    height: '100vh',
                }}>
                    <Typography variant="h3">
                        Welcome to my TODO App
                    </Typography>
                    <Typography variant="h4">
                        this is app was built using
                    </Typography>
                    <List>
                        <ListItem sx={{ justifyContent: 'center' }}>react</ListItem>
                        <ListItem sx={{ justifyContent: 'center' }}>material-ui</ListItem>
                        <ListItem sx={{ justifyContent: 'center' }}>context-api</ListItem>
                    </List>
                    <Button onClick={() => appContext.setStart(true)} sx={{ p: 2 }} variant="contained">get started</Button>
                </Box>
        </div >
    );
}

export default WelcomePage;