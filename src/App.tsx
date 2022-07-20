import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./hoc/Layout";
import Home from "./components/pages/Home";
import StudyInfo from "./components/pages/StudyInfo";
import Session from "./components/pages/Session";
import Solution from "./components/pages/Solution";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="study/:studyId" element={<StudyInfo />} />
            <Route path="session/:sessionId" element={<Session />} />
            <Route path="solution" element={<Solution />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
