import { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Register } from '../register/register';
import { Login } from '../login/login';

const Home = lazy(() => import('../../pages/home'));
const Details = lazy(() => import('../../pages/details'));

export function AppRoutes() {
  return (
    <main>
      <Suspense>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/home" element={<Home></Home>}></Route>
          <Route path="/details/:id" element={<Details></Details>}></Route>
          <Route path="/register" element={<Register></Register>}></Route>
          <Route path="/login" element={<Login></Login>}></Route>
        </Routes>
      </Suspense>
    </main>
  );
}
