import { rest } from "msw";

const baseURL = process.env.REACT_APP_SERVER_BASE_URL;

export const handlers = [
  rest.get(baseURL + "/session/:sessionId", (req, res, ctx) => {
    return res(
      ctx.json({
        status: 200,
        data: {
          id: req.params.sessionId,
          name: "BFS 박살",
          start: new Date(2022, 6, 12),
          end: new Date(2022, 6, 18),
        },
      })
    );
  }),
];
