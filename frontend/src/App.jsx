import React from "react";
import { BrowserRouter, Route, Routes } from "react-router";
import Navbar from "./Components/Navbar";
import CreatePage from "./Pages/createPage";
import HomePage from "./Pages/homePage";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/create" element={<CreatePage></CreatePage>}/>
        <Route path="/" element={<HomePage></HomePage>}/>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
