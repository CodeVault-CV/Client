import StudyHeader from './StudyHeader';

export interface StudyHeaderProps {
  members: { id: string, name: string, imageUrl: string, githubUrl: string }[];
  name: string;
  url: string;
}

export default function StudyHeaderContainer(study: StudyHeaderProps) {
  return <StudyHeader {...study} />
}
