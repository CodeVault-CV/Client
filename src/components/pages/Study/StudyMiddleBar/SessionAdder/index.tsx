import AddCircleIcon from "@mui/icons-material/AddCircle";
import SessionEditor from "../../../../blocks/SessionEditor";
import useCreateSession from "../../../../../hooks/Session/useCreateSession";

type SessionAdderContainerProps = {
  studyId: string;
};

export default function SessionAdderContainer({ studyId }: SessionAdderContainerProps) {
  const { create } = useCreateSession(studyId);

  const handleSubmit = (name: string, start: Date, end: Date) => {
    create({
      name,
      start,
      end,
    });
  };

  return (
    <SessionEditor icon={<AddCircleIcon />} label="세션 생성하기" handleSubmit={handleSubmit} />
  );
}
