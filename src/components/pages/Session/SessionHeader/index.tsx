import { MouseEvent } from "react";
import { useParams } from "react-router-dom";

import SessionHeader from "./SessionHeader";
import { HeaderSkeleton } from "../../../blocks/Header";
import useSession from "../../../../hooks/Session/useSession";
import { useSessionDelete } from "../../../../hooks/Session/useSessionDelete";
import Loading from "../../../blocks/Loading";

type SessionHeaderProps = {
  sessionId: number;
};

export default function SessionHeaderContainer({ sessionId }: SessionHeaderProps) {
  const { studyId } = useParams();
  const { isLoading, session } = useSession(sessionId);
  const { isLoading: deleteLoading, deleteRequest } = useSessionDelete(
    studyId as string,
    sessionId
  );

  const handleDelete = async (event: MouseEvent<HTMLButtonElement>) => {
    const willDelete = window.confirm("세션을 삭제하겠습니까?");
    if (!willDelete) return;
    deleteRequest();
  };

  if (isLoading) return <HeaderSkeleton />;

  return (
    <>
      <SessionHeader session={session} handleDelete={handleDelete} />
      {deleteLoading && <Loading />}
    </>
  );
}
