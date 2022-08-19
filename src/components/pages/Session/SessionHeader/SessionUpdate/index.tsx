import EditIcon from "@mui/icons-material/Edit";

import SessionEditor from "../../../../blocks/SessionEditor";
import useSessionUpdate from "../../../../../hooks/Session/useSessionUpdate";
import Loading from "../../../../blocks/Loading";
import ISessionEntity from "../../../../../core/entities/interfaces/iSession";

export default function SessionUpdateContainer({
  id,
  ...sessionProps
}: Omit<ISessionEntity, "problems">) {
  const { isLoading, update } = useSessionUpdate(id);

  const handleSubmit = (title: string, startDate: Date, endDate: Date) => {
    update({
      id,
      name: title,
      start: startDate,
      end: endDate,
    });
  };

  return (
    <>
      <SessionEditor
        icon={<EditIcon />}
        label="세션 수정하기"
        {...sessionProps}
        handleSubmit={handleSubmit}
      />
      {isLoading && <Loading />}
    </>
  );
}
