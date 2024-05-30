import './App.css';
import Login from './Login';
import Navbar from './Navbar';
import { BrowserRouter, Routes ,Route , Switch , useLocation } from 'react-router-dom';
import Signup from './Signup';
import Main from './Main';
import SingleProject from './SingleProject';

function App() {
  return (
    <div className='flex flex-col h-screen '>
    <ConditionalNavbar/>
    

      <Routes>
        <Route path='/login' element={<Login />}/>
        <Route path='/signup' element={<Signup />}/>
        <Route path='/projects' element={<Main />}/>
        <Route path='/project/:id' element={<SingleProject/>}/>
      </Routes>

      
      
      
    </div>

  );
}

const ConditionalNavbar = () => {
  const location = useLocation();
  if (location.pathname ==='/'){
    return <Navbar items = {['Login' , 'Signup' , "About"]}/> ; 
  }else if (location.pathname === '/login') {
    return <Navbar items={['Signup', 'About']} />;
  }
  else if (location.pathname === '/signup') {
    return <Navbar items={['Login', 'About']} />;
  }
  return null;
};



export default App;
