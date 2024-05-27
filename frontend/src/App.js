import logo from './logo1.svg';
import './App.css';
import Login from './Login';
import Navbar from './Navbar';
import { BrowserRouter, Routes ,Route , Switch , useLocation } from 'react-router-dom';
import Signup from './Signup';
import Sidebar from './Sidebar';
import Main from './Main';

function App() {
  return (
    <div className='flex flex-col h-screen '>
    <ConditionalNavbar/>
    

      <Routes>
        <Route path='/login' element={<Login />}/>
        <Route path='/signup' element={<Signup />}/>
        <Route path='/main' element={<Main />}/>
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
const ConditionalSidebar = () => {
  const location = useLocation();
  if (location.pathname ==='/main'){
    return <Sidebar/> ; 
  }return null ;
};


export default App;
