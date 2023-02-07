import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';

const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />} />
    </Routes>
  </BrowserRouter>
);

export default Router;

//http://localhost:3000/kakao/callback?code=ukOrnu1IDDkeInm90ULW1voFhvm9iC3Nt50R8V9LfjeNAcSjltLdyBA4O2149Ip4i1c7WQoqJREAAAGGG6ut5A
