import { screen, waitForElementToBeRemoved } from "@testing-library/react";
import Session from ".";
import { AuthProvider } from "../../hoc/AuthContext";
import { renderWithRouterMatch } from "../../mocks/renderWithRouterMatch";

test("Session 페이지 렌더시 세션 정보를 화면에 보여야 한다.", async () => {
  // arrange
  const route = "/session/1234";
  renderWithRouterMatch(
    <AuthProvider>
      <Session />
    </AuthProvider>,
    {
      route,
      path: "/session/:sessionId",
    }
  );

  // act
  await waitForElementToBeRemoved(() => screen.getByText("loading"));

  // assert
  expect(screen.getByText("BFS 박살")).toBeInTheDocument();
  expect(screen.getByText("22년 06월 12일 - 22년 06월 18일")).toBeInTheDocument();
});
