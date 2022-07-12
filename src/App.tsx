import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import PageTemplate from "./templates/PageTemplate";

import Home from "./pages/Home";
import Login from "./pages/Login";
import StudyList from "./pages/StudyList";
import StudyInfo from "./pages/StudyInfo";
import Session from "./pages/Session";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/" element={<PageTemplate />}>
          <Route path="login" element={<Login />} />
          <Route path="study-list" element={<StudyList />} />
          <Route path="study-info" element={<StudyInfo />} />
          <Route path="session" element={<Session />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
