import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./hoc/Layout";

import Home from "./pages/Home";
import StudyList from "./pages/StudyList";
import StudyInfo from "./pages/StudyInfo";
import Session from "./pages/Session";
import Solution from "./pages/Solution";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
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
