import { Button, ButtonGroup, Chip } from "@mui/material";
import Header from "../../../components/Header";
import formatDateLabel from "../../../utils/formatDateLabel";

interface SessionHeaderProps {
  name: string;
  start: Date;
  end: Date;
}

export default function SessionHeader({ name, start, end }: SessionHeaderProps) {
  return (
    <Header title={name}>
      <Chip label={formatDateLabel(start, end)} variant="outlined" />
      <ButtonGroup>
        <Button
          variant="outlined"
          color="inherit"
          sx={{ borderColor: "divider", fontWeight: 700 }}
        >
          수정
        </Button>
        <Button
          variant="outlined"
          color="inherit"
          sx={{ borderColor: "divider", fontWeight: 700 }}
        >
          삭제
        </Button>
      </ButtonGroup>
    </Header>
  );
}
