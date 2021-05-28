
import './App.css';
import Routes from './Routes/routes';
import { AuthContextProvider } from './Storage/auth-context';


function App() {
  return (
    <>
     <AuthContextProvider>
     <Routes/></AuthContextProvider>
    </>
  );
}

export default App;
