// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import "@testing-library/jest-dom/extend-expect";
import "@testing-library/jest-dom";
import { server } from "./mocks/server";

beforeAll(() => {
  // Enable the mocking in tests.
  server.listen();
  // 유저 인증 모킹 데이터
  window.localStorage.setItem("auth", JSON.stringify({ name: "tester", token: "test_token" }));
});

afterEach(() => {
  // Reset any runtime handlers tests may use.
  server.resetHandlers();
});

afterAll(() => {
  // Clean up once the tests are done.
  server.close();
});
