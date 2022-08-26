import SessionHeader from "./SessionHeader";
import useSession from "../../../../hooks/Session/useSession";;

type SessionHeaderProps = {
  sessionId: number;
};

export default function SessionHeaderContainer({ sessionId }: SessionHeaderProps) {
  const { session } = useSession(sessionId);

  return (
    <SessionHeader session={session} />
  );
}
