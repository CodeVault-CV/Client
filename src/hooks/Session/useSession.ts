import { useQuery } from "@tanstack/react-query";
import Session from "../../di/Session";

export default function useSession(sessionId: number) {
  const { data } = useQuery(["session", sessionId], () => Session.getSession(sessionId), {
    suspense: true,
  });

  return {
    session: data,
  };
}
