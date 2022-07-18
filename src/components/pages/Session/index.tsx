import { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { getSessionInfo } from "../../../api";
import { useAuth } from "../../../hoc/AuthContext";
import Session from "./Session";

type SessionData = {
  id: string;
  name: string;
  start: Date;
  end: Date;
};

export default function SessionContainer() {
  const { sessionId } = useParams();
  const { token } = useAuth();
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<SessionData>({
    id: "",
    name: "",
    start: new Date(),
    end: new Date(),
  });

  const getData = useCallback(
    async (sessionId: string | undefined, token: string): Promise<SessionData | undefined> => {
      if (!sessionId || !token) return;
      try {
        const { status, data } = await getSessionInfo(sessionId, token);
        if (status === 200) {
          return data;
        }
      } catch (error) {
        console.log(error);
      }
      return;
    },
    []
  );

  useEffect(() => {
    const fetchSessionData = async () => {
      const data = await getData(sessionId, token);
      if (data) {
        setData({ ...data, start: new Date(data.start), end: new Date(data.end) });
        setLoading(false);
      }
    };
    fetchSessionData();
  }, [sessionId, token, getData]);

  return <>{loading ? <div>loading</div> : <Session sessionInfo={data} />}</>;
}
