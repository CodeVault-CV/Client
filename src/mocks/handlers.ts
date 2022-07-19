import { rest } from "msw";

const baseURL = process.env.REACT_APP_SERVER_BASE_URL;

export const handlers = [
  // GET
  rest.get(baseURL + "/study/list", (req, res, ctx) => {
    return res(
      ctx.json({
        status: 200,
        message: "SUCCESS",
        data: [
          {
            id: "test1",
            name: "알고리즘 박살",
          },
          {
            id: "test2",
            name: "카카오 문제 박살내기",
          },
        ],
      })
    );
  }),
  rest.get(baseURL + "/study/:studyId", (req, res, ctx) => {
    const id = req.params.studyId;

    return res(
      ctx.json({
        status: 200,
        message: "SUCCESS",
        data: {
          id,
          name: (id === "test1" ? "알고리즘 박살" : "카카오 문제 박살내기"),
          url: "www.github.com",
          members: [
            {
              name: "woong-jae",
              image: "",
            },
            {
              name: "Kingdonggyu",
              image: "",
            },
            {
              name: "SeongukBaek",
              image: "",
            },
            {
              name: "Go-Jaecheol",
              image: "",
            },
          ],
        },
      })
    );
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
