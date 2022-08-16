export interface StudyListItem {
  id: string;
  name: string;
}

export default interface Study {
  id: string;
  members: { id: string; name: string; imageUrl: string; githubUrl: string }[];
  name: string;
  url: string;
}
