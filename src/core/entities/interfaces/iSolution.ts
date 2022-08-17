export interface ISolutionDataEntity {
  solve: boolean;
  solutionId: number;
  userId: string;
  name: string;
  imageUrl: string;
  language: string;
}

export interface ISolutionEntity {
  code: string;
  readMe: string;
  date: Date;
  id: string;
  name: string;
  language: string;
}
