
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import AddDesignation from './components/AddDesignation';
import AddEmployee from './components/AddEmployee';
import DesignationList from './components/DesignationList';
import HomePage from './components/HomePage';
import LoginPage from './components/LoginPage';
import Navbar from './components/Navbar';
function App() {
  return (
   <div>
   <Router>
     <Navbar/>
     <Routes>

     <Route path='/' element={<LoginPage/>}/>
     <Route path='/home' element={<HomePage/>}/>
     <Route path='/login' element={<LoginPage/>}/>
     <Route path='/addEmp' element={<AddEmployee/>}/>
     <Route path='/designation' element={<DesignationList/>}/>
     <Route path='/addDes' element={<AddDesignation/>}/>
     </Routes>

   </Router>
     {/* <HomePage/> */}
     {/* <LoginPage/> */}
     {/* <AddDesignation/> */}
     {/* <AddEmployee/> */}
     {/* <DesignationList/> */}
   </div>
      

  );
}

export default App;
