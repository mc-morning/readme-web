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
import StartAnswer from "./routes/Answer/Write/StartAnswer";

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
        <Route
          path="startanswer/:questionnaireId"
          element={<StartAnswer />}
        ></Route>
        <Route
          path="writeanswer/:questionnaireId"
          element={<WriteAnswer />}
        ></Route>
        <Route
          path="answercheck/:questionnaireId"
          element={<AnswerCheck />}
        ></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
