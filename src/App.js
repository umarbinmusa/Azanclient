import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Drug from "./pages/Drug";
import Dashbord from "./pages/Dashbord";
import Viewdrug from "./pages/Viewdrug";
import Buy from "./pages/Buy";
import Dash from "./pages/Dash";
import Receipt from "./pages/Receipt";
import Logout from "./pages/Logout";
import List from "./pages/List";
import Nav from "./pages/Nav";
import Search from "./pages/Search";
import Update from "./pages/Update";
import Delete from "./pages/Delete";
import Test1 from "./pages/Test1";
import Testr from "./pages/Testr";
import Addtest from "./pages/Addtest";
import Nav2 from "./pages/Nav2";
import Viewtest from "./pages/Viewtest";


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
        <Route path="/receipt" element={<Receipt />} /> 
        <Route path="/logout" element={<Logout />} /> 
        <Route path="/list" element={<List />} /> 
        <Route path="/nav" element={<Nav />} /> 
        <Route path="/search" element={<Search />} />
        <Route path="/update" element={<Update />} />  
        <Route path="/delete" element={<Delete />} /> 
        <Route path="/test1" element={<Test1 />} /> 
        <Route path="/testr" element={<Testr />} /> 
        <Route path="/addtest" element={<Addtest />} /> 
        <Route path="/viewtest" element={<Viewtest />} /> 
        <Route path="/nav2" element={<Nav2 />} /> 

      </Routes>
    </BrowserRouter>
  );
}

export default App;
