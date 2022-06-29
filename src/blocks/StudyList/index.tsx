import StudyListBlock from "./StudyList";

export interface IStudy {
  studyId?: string;
  name: string;
  leaderId?: string;
  repositoryName?: string;
  repositoryUrl?: string;
}

export default function StudyListContainer() {
  const data: IStudy[] = [
    {
      studyId: '123456789',
      name: '알고리즘 박살',
      leaderId: 'woong-jae',
      repositoryName: 'Algorithm-Crash',
      repositoryUrl: 'https://github.com/woong-jae/Algorithm-Crash',
    },
    {
      studyId: '234567891',
      name: '알고리즘 스터디',
      leaderId: 'Go-Jaecheol',
      repositoryName: 'Algorithm_Study',
      repositoryUrl: 'https://github.com/Go-Jaecheol/Algorithm_Study',
    },
    {
      studyId: '345678912',
      name: '해커톤 박살',
      leaderId: 'pinkishincoloragain',
      repositoryName: 'Haebak',
      repositoryUrl: 'https://github.com/pinkishincoloragain/Haebak',
    }
  ];

  return <StudyListBlock studys={data} />;
}
