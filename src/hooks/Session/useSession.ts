import { useQuery } from "@tanstack/react-query";
import Session from "../../di/Session";

export default function useSession(sessionId: number) {
  const { isLoading, data } = useQuery(
    ["session", sessionId],
    () => Session.getSession(sessionId),
  );

  return {
    isLoading,
    session: data,
  };
}
