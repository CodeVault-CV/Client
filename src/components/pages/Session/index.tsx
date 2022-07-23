import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";

import { getProblemList, getSession } from "../../../api";
import Session from "./Session";
import Loading from "../../blocks/Loading";
import NotFound from "../NotFound";

export default function SessionContainer() {
  const { sessionId } = useParams();
  const { isLoading: sessionLoading, isError: sessionError, data: session } = useQuery(["session"], () =>
    getSession(sessionId).then((res) => res.data)
  );
  const { isLoading: problemListLoading, isError: problemListError, data: problemList } = useQuery(["problemList"], () =>
    getProblemList(sessionId).then((res) => res.data)
  );

  const isLoading = sessionLoading || problemListLoading;

  const isError = sessionError || problemListError;

  if(isLoading) return <Loading />;

  if(isError) return <NotFound />;

  return <Session session={session} problemList={problemList} />;
}
