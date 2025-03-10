import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Drug from "./pages/Drug";
import Dashbord from "./pages/Dashbord";
import Viewdrug from "./pages/Viewdrug";
import Buy from "./pages/Buy";
import Dash from "./pages/Dash";
import Recieipt from "./pages/Receipt";
import Logout from "./pages/Logout";
import List from "./pages/List";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashbord" element={<Dashbord />} />
        <Route path="/buy" element={<Buy />} />
        <Route path="/viewdrug" element={<Viewdrug />} />
        <Route path="/drug" element={<Drug />} />
        <Route path="/login" element={<Login />} />
        <Route path="/Dash" element={<Dash />} /> 
        <Route path="/reciept" element={<Recieipt />} /> 
        <Route path="/logout" element={<Logout />} /> 
        <Route path="/list" element={<List />} /> 
      </Routes>
    </BrowserRouter>
  );
}

export default App;
