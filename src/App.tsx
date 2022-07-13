import { BrowserRouter, Routes, Route } from "react-router-dom";

import PageTemplate from "./templates/PageTemplate";

import Home from "./pages/Home";
import Login from "./pages/Login";
import StudyList from "./pages/StudyList";
import StudyInfo from "./pages/StudyInfo";
import Session from "./pages/Session";
import Solution from "./pages/Solution";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PageTemplate />}>
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="study-list" element={<StudyList />} />
          <Route path="study-info" element={<StudyInfo />} />
          <Route path="session" element={<Session />} />
          <Route path="solution" element={<Solution />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
