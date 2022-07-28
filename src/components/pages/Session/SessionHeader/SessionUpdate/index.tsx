import { useMutation, useQueryClient } from "@tanstack/react-query";
import EditIcon from "@mui/icons-material/Edit";

import { updateSession } from "../../../../../api";
import Session from "../../../../../types/Session";
import SessionEditor from "../../../../blocks/SessionEditor";

export default function SessionUpdateContainer({ id, ...sessionProps}: Session) {
  const queryClient = useQueryClient();
  const mutation = useMutation((updatedSession: Session) => updateSession(updatedSession), {
    onSuccess: () => {
      queryClient.invalidateQueries(["session"]);
    },
  });

  const handleSubmit = (title: string, startDate: Date, endDate: Date) => {
    mutation.mutate({
      id,
      name: title,
      start: startDate,
      end: endDate,
    });
  };

  return <SessionEditor icon={<EditIcon />} label="세션 수정하기" {...sessionProps} handleSubmit={handleSubmit} />;
}
