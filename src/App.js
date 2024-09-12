import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import Main from "./routes/Main/Main";
import Login from "./routes/Login/Login";
import CreateForm from "./routes/CreateForm/Create/CreateForm";
import WriteAnswer from "./routes/WriteAnswer";
import FormList from "./routes/FormList";
import Nav from "./components/Nav/Nav";
import CompleteForm from "./routes/CreateForm/Complete/CompleteForm";

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Main />}></Route>{" "}
        <Route path="login" element={<Login />}></Route>
        <Route path="createform" element={<CreateForm />}></Route>
        <Route path="completeform" element={<CompleteForm />}></Route>
        <Route path="writeanswer" element={<WriteAnswer />}></Route>
        <Route path="formlist" element={<FormList />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
