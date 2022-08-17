import { MouseEvent } from "react";
import { Box, Tooltip, IconButton } from "@mui/material";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";

import DateLabel from "../../../atoms/DateLabel";
import Header from "../../../blocks/Header";
import SessionUpdate from "./SessionUpdate";

import Session from "../../../../core/types/Session";
import Wrapper from "../../../blocks/Wrapper";

type SessionHeaderProps = {
  session: Session;
  handleDelete(event: MouseEvent<HTMLButtonElement>): void;
};

export default function SessionHeader({ session, handleDelete }: SessionHeaderProps) {
  return (
    <Wrapper>
      <Header title={session.name}>
        <DateLabel start={new Date(session.start)} end={session.end} />
        <Box sx={{ display: "flex" }}>
          <SessionUpdate
            id={session.id}
            name={session.name}
            start={session.start}
            end={session.end}
          />
          <Tooltip title="세션 삭제하기" arrow>
            <IconButton onClick={handleDelete}>
              <DeleteForeverIcon />
            </IconButton>
          </Tooltip>
        </Box>
      </Header>
    </Wrapper>
  );
}
