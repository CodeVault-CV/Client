import { screen, waitForElementToBeRemoved } from "@testing-library/react";
import Session from ".";
import { AuthProvider } from "../../../hoc/AuthContext";
import { renderWithRouterMatch } from "../../../mocks/renderWithRouterMatch";

const route = "/session/1234";

test("Session 페이지 렌더시 세션 정보를 화면에 보여야 한다.", async () => {
  // arrange
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
  expect(screen.getByText("1주차")).toBeInTheDocument();
  expect(screen.getByText("22년 06월 12일 - 22년 06월 18일")).toBeInTheDocument();
});

test("Session 페이지 렌더시 문제 리스트를 화면에 보여야 한다.", async () => {
  // arrange
  renderWithRouterMatch(
    <AuthProvider>
      <Session />
    </AuthProvider>,
    {
      route,
      path: "/session/:sessionId",
    }
  );
  // action
  
  // assert
  expect(await screen.findByText("양궁 대회")).toBeInTheDocument();
  expect(await screen.findByText("양과 늑대")).toBeInTheDocument();
  expect(await screen.findByText("파괴되지 않은 건물")).toBeInTheDocument();
  expect(await screen.findByText("게임 개발")).toBeInTheDocument();
})