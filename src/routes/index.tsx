// react
import { Routes, Route } from 'react-router-dom';
import { AuthenticationRoutes } from '@/modules/access';
import { HomeRoutes } from '@/modules/home';
export const GlobalRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/*" element={<AuthenticationRoutes/>} />
        <Route path="/residencias" element={<HomeRoutes/>} />
      </Routes>
    </>
  );
};