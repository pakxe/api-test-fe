import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from '../pages/Login';
import LoginSuccess from '../pages/LoginSuccess';
import Redirection from '../pages/Redirection';

const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route exact path='/' element={<Login />} />
      <Route exact path='/kakao/callback' element={<Redirection />} />
      <Route exact path='/loginSuccess' element={<LoginSuccess />} />
    </Routes>
  </BrowserRouter>
);

export default Router;

//http://localhost:3000/kakao/callback?code=ukOrnu1IDDkeInm90ULW1voFhvm9iC3Nt50R8V9LfjeNAcSjltLdyBA4O2149Ip4i1c7WQoqJREAAAGGG6ut5A
