//Router
import { BrowserRouter } from 'react-router-dom';
import  RoutesApp  from './routes/';

//Context
import UserContextProvider from './context/UserContext';

//Toastify
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  
  return (
    <BrowserRouter>
    <ToastContainer autoClose={2000} />
      <UserContextProvider>
          <RoutesApp />
      </UserContextProvider>
    </BrowserRouter>
  );
}

export default App;
