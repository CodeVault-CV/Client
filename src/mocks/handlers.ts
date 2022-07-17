import { rest } from "msw";

const baseURL = "http://choco-one.iptime.org:8090/api";

export const handlers = [
  rest.get(baseURL + "/session/:sessionId", (req, res, ctx) => {
    return res(
      ctx.json({
        status: 200,
        data: {
          id: req.params.sessionId,
          name: "BFS 박살",
          start: new Date(),
          end: new Date(),
        },
      })
    );
  }),
];
