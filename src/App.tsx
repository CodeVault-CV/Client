import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./hoc/Layout";
import Home from "./components/pages/Home";
import Study from "./components/pages/Study";
import Session from "./components/pages/Session";
import Solve from "./components/pages/Solve";
import NotFound from "./components/pages/NotFound";
import Solution from "./components/pages/Solution";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/study/:studyId" element={<Study />} />
            <Route path="/study/:studyId/session/:sessionId" element={<Session />} />
            <Route path="/study/:studyId/session/:sessionId/solve/:problemId" element={<Solve />} />
            <Route path="/study/:studyId/session/:sessionId/solution/:solutionId" element={<Solution />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
