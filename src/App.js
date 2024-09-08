import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import Login from "./routes/Login";
import Main from "./routes/Main";
import CreateForm from "./routes/CreateForm";
import WriteAnswer from "./routes/WriteAnswer";
import FormList from "./routes/FormList";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="main" element={<Main />}></Route>
        <Route path="createform" element={<CreateForm />}></Route>
        <Route path="writeanswer" element={<WriteAnswer />}></Route>
        <Route path="formlist" element={<FormList />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
