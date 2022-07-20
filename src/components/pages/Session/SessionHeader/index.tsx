import { ButtonGroup, Chip } from "@mui/material";
import Header from "../../../blocks/Header";
import formatDateLabel from "../../../../utils/formatDateLabel";
import Button from "../../../atoms/Button";

interface SessionHeaderProps {
  name: string;
  start: string;
  end: string;
}

export default function SessionHeader({ name, start, end }: SessionHeaderProps) {
  return (
    <Header title={name}>
      <Chip label={formatDateLabel(new Date(start), new Date(end))} variant="outlined" />
      <ButtonGroup>
        <Button>수정</Button>
        <Button>삭제</Button>
      </ButtonGroup>
    </Header>
  );
}
