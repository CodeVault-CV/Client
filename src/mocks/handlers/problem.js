import { rest } from "msw";

const baseURL = process.env.REACT_APP_SERVER_BASE_URL;

const problems = [
  {
    id: "p1",
    number: "92342",
    name: "양궁 대회",
    platform: "programmers",
  },
  {
    id: "p2",
    number: "92343",
    name: "양과 늑대",
    platform: "programmers",
  },
  {
    id: "p3",
    number: "92344",
    name: "파괴되지 않은 건물",
    platform: "programmers",
  },
  {
    id: "p4",
    number: "1516",
    name: "게임 개발",
    platform: "boj",
  },
]


const getProblem = () => JSON.parse(sessionStorage.getItem("problem-mock"));
const setProblem = (problem) => sessionStorage.setItem("problem-mock", JSON.stringify(problem));

if (!sessionStorage.getItem("problem-mock")) setProblem(problems);

const handlers = [
  rest.get(baseURL + "/problem/list/:sessionId", (req, res, ctx) => {
    return res(
      ctx.delay(1000),
      ctx.json({
        status: 200,
        message: "SUCCESS",
        data: getProblem()
      })
    );
  }),
  rest.post(baseURL + "/problem", async (req, res, ctx) => {
    const { number, name, platform } = await req.json();
    
    const prev_problems = getProblem();
    const new_problem = { number, name, platform, id: `p${prev_problems.length + 2}` };
    setProblem([new_problem, ...prev_problems]);

    return res(
      ctx.json({
        status: 200,
        message: "SUCCESS",
        data: new_problem
      })
    )
  }),
  rest.delete(baseURL + `/problem/:problemId`, (req, res, ctx) => {
    const { problemId } = req.params;
    setProblem(getProblem().filter(problem => problem.id !== problemId));

    return res(
      ctx.json({
        status: 200,
        message: "SUCCESS",
      })
    )
  })
];

export default handlers;