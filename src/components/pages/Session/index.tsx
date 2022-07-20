import { useParams } from "react-router-dom";
import { useQuery } from '@tanstack/react-query'

import { getProblemList, getSessionInfo } from "../../../api";
import Session from "./Session";

export default function SessionContainer() {
  const { sessionId } = useParams();
  const { data: sessionInfo } = useQuery(['sessionInfo'], () => 
    getSessionInfo(sessionId).then(res => res.data)
  );
  const { data: problemList } = useQuery(['problemList'], () => 
    getProblemList(sessionId).then(res => res.data)
  );

  return <>{(sessionInfo === undefined || sessionInfo === undefined) ? <div>loading</div> : <Session sessionInfo={sessionInfo} problemList={problemList} />}</>;
}