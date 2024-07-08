import './App.css';
import WelcomePage from './components/WelcomePage';
import AppContext, {AppDataProvider}  from './contexts/app.context';
import { useContext } from 'react';
import { Container } from '@mui/material';
import TodoApp from './components/TodoApp';

function App() {
  const appContext = useContext(AppContext);
  return (
    <Container>
      {appContext.start ? <TodoApp/> :<WelcomePage />}
    </Container>
  );
}

export default App;
