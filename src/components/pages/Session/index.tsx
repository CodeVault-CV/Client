import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";

import { getProblemList, getSession } from "../../../api";
import Session from "./Session";

export default function SessionContainer() {
  const { sessionId } = useParams();
  const { isLoading: sessionLoading, data: session } = useQuery(["session"], () =>
    getSession(sessionId).then((res) => res.data)
  );
  const { isLoading: problemListLoading, data: problemList } = useQuery(["problemList"], () =>
    getProblemList(sessionId).then((res) => res.data)
  );

  const isLoading = sessionLoading && problemListLoading;

  return (
    <>{isLoading ? <div>loading</div> : <Session session={session} problemList={problemList} />}</>
  );
}
