import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getSessionInfo } from "../../api";
import Session from "./Session";

export default function SessionContainer() {
  const { sessionId } = useParams();
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState({ id: "", name: "", start: new Date(), end: new Date() });

  const getData = async (sessionId: string | undefined) => {
    if (!sessionId) return;
    try {
      const { status, data } = await getSessionInfo(sessionId);
      if (status === 200) {
        setLoading(false);
        setData(data);
      }
    } catch (error) {
      console.log(error);
      return null;
    }
  };

  useEffect(() => {
    getData(sessionId);
  }, []);

  return (
    <>
      {loading ? <div>loading</div> : <Session sessionInfo={data}  />}
    </>
  );
}
