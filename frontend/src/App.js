import logo from './logo1.svg';
import './App.css';
import Login from './Login';
import { BrowserRouter, Routes ,Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/login' element={<Login/>}/>
      </Routes>
      </BrowserRouter>
      
      
    </div>

  );
}


export default App;
