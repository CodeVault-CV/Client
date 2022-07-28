import { rest } from "msw";

const baseURL = process.env.REACT_APP_SERVER_BASE_URL;

const session = [
  [
    1,
    {
      id: 1,
      name: "1주차",
      start: new Date(2022, 6, 12),
      end: new Date(2022, 7, 30),
    }
  ],
  [
    2,
    {
      id: 2,
      name: "2주차",
      start: new Date(2022, 6, 19),
      end: new Date(2022, 6, 26),
    },
  ]
];


const getSession = () => JSON.parse(sessionStorage.getItem("session-mock"));
const setSession = (session) => sessionStorage.setItem("session-mock", JSON.stringify(session));

if (!sessionStorage.getItem("session-mock")) setSession(session);

const handlers = [
  rest.get(baseURL + "/session/list/:studyId", (req, res, ctx) => {
    return res(
      ctx.delay(1000),
      ctx.json({
        status: 200,
        message: "SUCCESS",
        data: getSession().map(([_, session]) => session)
      })
    );
  }),
  rest.get(baseURL + "/session/:sessionId", (req, res, ctx) => {
    const { sessionId } = req.params;
    const sessionMap = new Map(getSession());
    const session = sessionMap.get(+sessionId);

    if (!session) {
      return res(
        ctx.status(404),
        ctx.json({
          status: 404,
          message: "존재하지 않는 세션입니다",
        })
      )
    }

    return res(
      ctx.delay(1000),
      ctx.json({
        status: 200,
        message: "SUCCESS",
        data: session
      })
    );
  }),
  rest.put(baseURL + "/session", async (req, res, ctx) => {
    const session = await req.json();
    const sessionMap = new Map(getSession());
    sessionMap.set(+session.id, { ...session });
    setSession(Array.from(sessionMap));

    return res(
      ctx.json({
        status: 200,
        message: "SUCCESS"
      })
    )
  }),
  rest.delete(baseURL + `/session/:sessionId`, (req, res, ctx) => {
    const { sessionId } = req.params;

    const sessionMap = new Map(getSession());
    sessionMap.delete(+sessionId);
    setSession(Array.from(sessionMap));

    return res(
      ctx.json({
        status: 200,
        message: "SUCCESS",
      })
    )
  })
];

export default handlers;