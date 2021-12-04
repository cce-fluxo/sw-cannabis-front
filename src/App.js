
import './App.css';
import Routes from './Routes/routes';
import { Provider } from './Storage';


function App() {
  return (
    <>
      <Provider>
        <Routes />
      </Provider>
    </>
  );
}

export default App;
