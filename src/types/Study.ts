interface Study {
  id: string;
  name: string;
};

export interface StudyInfo {
  id: string;
  members: { id: string; name: string; imageUrl: string; githubUrl: string }[];
  name: string;
  url: string;
};

export default Study;
