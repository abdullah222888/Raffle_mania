import './App.css';
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Layout from './layout/Layout';
import UserSignin from './auth/UserSignin';
import UserSignupone from './auth/UserSignupone';
import UserSignuptwo from './auth/UserSignuptwo';
import Usersignupthree from './auth/Usersignupthree';
import UserSignupverify from './auth/UserSignupverify';
import Userforgot from './auth/Userforgot';
import UserForgotVerify from './auth/UserForgotVerify';
import UserForgotRenew from './auth/UserForgotRenew';
function App() {
  return (
    
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout/>}/>
        <Route index element={<Layout />}/>
        <Route path='/Signup1' element={<UserSignupone/>}/>
        <Route path='/Signup2' element={<UserSignuptwo/>}/>
        <Route path='/Signup3' element={<Usersignupthree/>}/>
        <Route path='/Signupverify' element={<UserSignupverify/>}/>
        <Route path='/Signupforgot' element={<Userforgot/>}/>
        <Route path='/Signupforgotverify' element={<UserForgotVerify/>}/>
        <Route path='/Signupforgotrenew' element={<UserForgotRenew/>}/>
        <Route/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
