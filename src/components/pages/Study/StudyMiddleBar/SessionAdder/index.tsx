import { useMutation, useQueryClient } from "@tanstack/react-query";
import AddCircleIcon from "@mui/icons-material/AddCircle";

import { createSession } from "../../../../../api";
import SessionEditor from "../../../../blocks/SessionEditor";
import Session from "../../../../../types/Session";

type SessionAdderContainerProps = {
  studyId: string;
};

export default function SessionAdderContainer({ studyId }: SessionAdderContainerProps) {
  const queryClient = useQueryClient();
  const mutation = useMutation(
    ({ name, start, end }: Omit<Session, "id">) => createSession(studyId, name, start, end),
    {
      onSuccess: () => {
        queryClient.invalidateQueries(["sessionList"]);
      },
    }
  );

  const handleSubmit = (name: string, start: Date, end: Date) => {
    mutation.mutate({
      name,
      start,
      end,
    });
  };

  return (
    <SessionEditor icon={<AddCircleIcon />} label="세션 생성하기" handleSubmit={handleSubmit} />
  );
}
