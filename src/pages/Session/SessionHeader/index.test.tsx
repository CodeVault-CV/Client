import { render, screen } from "@testing-library/react";
import SessionHeader from ".";

const props = {
  name: "BFS 부수기",
  start: new Date(),
  end: new Date(),
};

test("title에 name을 나타내야 한다.", () => {
  render(<SessionHeader {...props} />);
  const title = screen.getByText("BFS 부수기");
  expect(title).toHaveTextContent("BFS 부수기");
});
