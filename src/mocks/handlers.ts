import { rest } from "msw";

const baseURL = process.env.REACT_APP_SERVER_BASE_URL;

export const handlers = [
  rest.get(baseURL + "/study/list", (req, res, ctx) => {
    return res(
      ctx.json({
        status: 200,
        message: "SUCCESS",
        data: [
          {
            id: "test1",
            name: "알고리즘 박살"
          },
          {
            id: "test2",
            name: "카카오 문제 박살내기"
          }
        ]
      })
    )
  }),
  rest.get(baseURL + "/session/:sessionId", (req, res, ctx) => {
    return res(
      ctx.json({
        status: 200,
        message: "SUCCESS",
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
