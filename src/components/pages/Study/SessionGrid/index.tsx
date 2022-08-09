import useSessionList from "../../../../hooks/Session/useSessionList";
import SessionCard from "./SessionCard";
import SessionGrid from "./SessionGrid";

type SessionGridProps = {
  studyId: string;
};

export default function SessionGridContainer({ studyId }: SessionGridProps) {
  const { sessionList = [] } = useSessionList(studyId);

  return (
    <SessionGrid>
      {sessionList.map(({ id, ...sessionProps }) => (
        <SessionCard key={id} id={id} {...sessionProps} />
      ))}
    </SessionGrid>
  );
}
