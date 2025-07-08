import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import Favourites from "../pages/Favourites";
import Login from "../pages/Login";
import Signin from "../pages/Signin";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="/favourites" element={<Favourites />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signin" element={<Signin />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
