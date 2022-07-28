import { MouseEvent } from "react";
import { Box, Tooltip, IconButton } from "@mui/material";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";

import DateLabel from "../../../atoms/DateLabel";
import Header from "../../../blocks/Header";
import SessionUpdate from "./SessionUpdate";

import Session from "../../../../types/Session";

type SessionHeaderProps = {
  session: Session,
  handleDelete(event: MouseEvent<HTMLButtonElement>): void;
};

export default function SessionHeader({ session, handleDelete }: SessionHeaderProps) {
  let { id, name, start, end } = session;

  return (
    <Header title={name}>
      <DateLabel start={new Date(start)} end={end} />
      <Box sx={{ display: "flex" }}>
        <SessionUpdate id={id} name={name} start={start} end={end} />
        <Tooltip title="세션 삭제하기" arrow>
          <IconButton onClick={handleDelete}>
            <DeleteForeverIcon />
          </IconButton>
        </Tooltip>
      </Box>
    </Header>
  );
}
