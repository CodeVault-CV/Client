import { rest } from "msw";
import studyHandler from "./study";
import sessionHandler from "./session";
import problemHandler from "./problem";

const baseURL = process.env.REACT_APP_SERVER_BASE_URL;

export const handlers = [
  ...studyHandler,
  ...sessionHandler,
  ...problemHandler,
  rest.get(baseURL + "/solution/list/:problemId", (req, res, ctx) => {
    const getRandomBoolean = () => {
      let num = Math.random() * 2;
      return Boolean(Math.floor(num) % 2);
    };

    return res(
      ctx.delay(2500),
      ctx.json({
        status: 200,
        message: "SUCCESS",
        data: [
          {
            name: "woong-jae",
            imageUrl: "https://avatars.githubusercontent.com/u/33976823?v=4",
            solve: getRandomBoolean(),
          },
          {
            name: "Kingdonggyu",
            imageUrl: "https://avatars.githubusercontent.com/u/33220404?v=4",
            solve: getRandomBoolean(),
          },
          {
            name: "SeongukBaek",
            imageUrl: "https://avatars.githubusercontent.com/u/33208303?v=4",
            solve: getRandomBoolean(),
          },
          {
            name: "Go-Jaecheol",
            imageUrl: "https://avatars.githubusercontent.com/u/33208246?v=4",
            solve: getRandomBoolean(),
          },
        ],
      })
    );
  }),
];
