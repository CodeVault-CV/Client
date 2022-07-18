import { render } from "@testing-library/react";
import { Route, MemoryRouter, Routes } from "react-router-dom";

export function renderWithRouterMatch(
  ui: JSX.Element,
  { path = "/", route = "/" } = {}
) {
  return {
    ...render(
      <MemoryRouter initialEntries={[route]}>
        <Routes>
          <Route path={path} element={ui} />
        </Routes>
      </MemoryRouter>
    ),
  };
}
