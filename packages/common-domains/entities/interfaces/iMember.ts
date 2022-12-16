export interface ISolvedMemberEntity {
  solve: boolean;
  id: number;
  userId: string;
  userName: string;
  imageUrl: string;
  language: string;
}

export default interface IMemberEntity {
  id: string;
  name: string;
  imageUrl: string;
  githubUrl: string;
}
