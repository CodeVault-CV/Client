import { rest } from "msw";

const baseURL = process.env.REACT_APP_SERVER_BASE_URL;

const study = [
  [
    "test1",
    {
      id: "test1",
      name: "알고리즘 박살",
      url: "https://github.com/woong-jae/Algorithm-Crash",
      leader: "woong-jae",
      members: [
        {
          id: "1",
          name: "woong-jae",
          imageUrl: "https://avatars.githubusercontent.com/u/33976823?v=4",
          githubUrl: "https://github.com/woong-jae",
        },
        {
          id: "2",
          name: "Kingdonggyu",
          imageUrl: "https://avatars.githubusercontent.com/u/33220404?v=4",
          githubUrl: "https://github.com/Kingdonggyu",
        },
        {
          id: "3",
          name: "SeongukBaek",
          imageUrl: "https://avatars.githubusercontent.com/u/33208303?v=4",
          githubUrl: "https://github.com/SeungukBaek",
        },
        {
          id: "4",
          name: "Go-Jaecheol",
          imageUrl: "https://avatars.githubusercontent.com/u/33208246?v=4",
          githubUrl: "https://github.com/Go-Jaecheol",
        },
      ],
    }
  ]
];


const getStudy = () => JSON.parse(sessionStorage.getItem("study-mock"));
const setStudy = (study) => sessionStorage.setItem("study-mock", JSON.stringify(study));

if(!sessionStorage.getItem("study-mock")) setStudy(study);

const handlers = [
  // GET
  rest.get(baseURL + "/study/list", (req, res, ctx) => {
    const study = getStudy();
    return res(
      ctx.json({
        status: 200,
        message: "SUCCESS",
        data: study.map(([id, { name }]) => ({ id, name })),
      })
    );
  }),
  rest.get(baseURL + "/study/:studyId", (req, res, ctx) => {
    const { studyId } = req.params;
    const studyMap = new Map(getStudy());
    const study = studyMap.get(studyId);

    if(!study) {
      return res(
        ctx.status(404),
        ctx.json({
          status: 404,
          message: "존재하지 않는 스터디입니다",
        })
      )
    }

    return res(
      ctx.json({
        status: 200,
        message: "SUCCESS",
        data: study
      })
    );
  }),
  rest.post(baseURL + "/study", async (req, res, ctx) => {
    const { studyName, repoName } = await req.json();
    const studyList = getStudy();

    const newStudy = {
      id: `test${studyList.length + 1}`,
      name: studyName,
      url: `https://github.com/woong-jae/${repoName}`,
      leader: "woong-jae",
      members: [
        {
          id: "1",
          name: "woong-jae",
          imageUrl: "https://avatars.githubusercontent.com/u/33976823?v=4",
          githubUrl: "https://github.com/woong-jae",
        },
      ],
    }

    studyList.push([newStudy.id, newStudy]);
    setStudy(studyList);

    return res(
      ctx.delay(3000),
      ctx.json({
        status: 200,
        message: "SUCCESS",
        data: newStudy.id
      })
    )
  })
];

export default handlers;
