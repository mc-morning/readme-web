import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import Main from "./routes/Main/Main";
import Login from "./routes/Login/Login";
import CreateForm from "./routes/CreateForm/Create/CreateForm";
import WriteAnswer from "./routes/Answer/Write/WriteAnswer";
import AnswerCheck from "./routes/Answer/Check/AnswerCheck";
import Nav from "./components/Nav/Nav";
import CompleteForm from "./routes/CreateForm/Complete/CompleteForm";
import Auth from "./routes/Login/Auth";

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Main />}></Route>{" "}
        <Route path="login" element={<Login />}></Route>
        <Route path="auth" element={<Auth />}></Route>
        <Route path="createform" element={<CreateForm />}></Route>
        <Route path="completeform" element={<CompleteForm />}></Route>
        <Route path="writeanswer" element={<WriteAnswer />}></Route>
        <Route path="answercheck" element={<AnswerCheck />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
