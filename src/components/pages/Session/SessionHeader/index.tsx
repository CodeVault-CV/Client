import { MouseEvent } from "react";
import { useParams } from "react-router-dom";

import SessionHeader from "./SessionHeader";
import useSession from "../../../../hooks/Session/useSession";
import { useSessionDelete } from "../../../../hooks/Session/useSessionDelete";
import useStudyLeader from "../../../../hooks/Study/useStudyLeader";
import Loading from "../../../blocks/Loading";

type SessionHeaderProps = {
  sessionId: number;
};

export default function SessionHeaderContainer({ sessionId }: SessionHeaderProps) {
  const { studyId } = useParams();
  const isLeader = useStudyLeader();
  const { session } = useSession(sessionId);
  const { isLoading, deleteRequest } = useSessionDelete(studyId as string, sessionId);

  const handleDelete = async (event: MouseEvent<HTMLButtonElement>) => {
    const willDelete = window.confirm("세션을 삭제하겠습니까?");
    if (!willDelete) return;
    deleteRequest();
  };

  return (
    <>
      <SessionHeader
        session={session}
        isLeader={isLeader}
        handleDelete={handleDelete}
      />
      {isLoading && <Loading />}
    </>
  );
}
