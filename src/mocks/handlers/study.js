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
    return res(
      ctx.json({
        status: 200,
        message: "SUCCESS",
        data: new Map(getStudy()).get(studyId),
      })
    );
  }),
  rest.post(baseURL + "/study", async (req, res, ctx) => {
    const { studyName, repoName } = await req.json();
    const study = getStudy();

    const newStudy = {
      id: `test${study.length + 1}`,
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

    study.push([newStudy.id, newStudy]);
    setStudy(study);

    return res(
      ctx.json({
        status: 200,
        message: "SUCCESS",
        data: studyName
      })
    )
  })
];

export default handlers;
