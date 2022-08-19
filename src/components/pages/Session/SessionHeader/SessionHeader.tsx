import { MouseEvent } from "react";
import { Box, Tooltip, IconButton } from "@mui/material";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";

import DateLabel from "../../../atoms/DateLabel";
import Header from "../../../blocks/Header";
import SessionUpdate from "./SessionUpdate";
import Wrapper from "../../../blocks/Wrapper";
import ISessionEntity from "../../../../core/entities/interfaces/iSession";

type SessionHeaderProps = {
  session?: ISessionEntity;
  isLeader: boolean;
  handleDelete(event: MouseEvent<HTMLButtonElement>): void;
};

const defaultSession = {
  id: 0,
  name: "Unknown",
  start: new Date(0),
  end: new Date(0),
  problems: []
};

export default function SessionHeader({
  session = defaultSession,
  isLeader,
  handleDelete,
}: SessionHeaderProps) {
  return (
    <Wrapper>
      <Header title={session.name}>
        <DateLabel start={new Date(session.start)} end={session.end} />
        {isLeader && (
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
        )}
      </Header>
    </Wrapper>
  );
}
