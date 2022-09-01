import SessionEditor from "../../../../blocks/SessionEditor";
import useSessionUpdate from "../../../../../hooks/Session/useSessionUpdate";
import Loading from "../../../../blocks/Loading";

interface SessionEditProps {
  studyId: string;
  id: number;
  name?: string;
  start?: Date;
  end?: Date;
}

export default function SessionEdit({ studyId, id, name, start, end }: SessionEditProps) {
  const { isLoading, update } = useSessionUpdate(studyId);

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
      <SessionEditor name={name} start={start} end={end} handleSubmit={handleSubmit} responsive />
      {isLoading && <Loading />}
    </>
  );
}
