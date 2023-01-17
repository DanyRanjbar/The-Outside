import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import './App.css'
import LoginPage from './componand/Login/LoginPage';
import SignupPage from "./componand/Signin/SignupPage";
import HomePage from './HomePage/HomePage';


function App() {

  return (
    <Routes>
      <Route path='/'>
        <Route index element={<HomePage/>}/>
        <Route path='LogIn' element={<LoginPage/>}/>
        <Route path='SignUp' element={<SignupPage/>}/>
      </Route>
    </Routes>
  )
}

export default App
