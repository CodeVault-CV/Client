import { MouseEvent } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { Box, IconButton, Tooltip } from "@mui/material";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";

import Header from "../../../blocks/Header";
import DateLabel from "../../../atoms/DateLabel";
import SessionEditor from "./SessionEditor";
import { deleteSession } from "../../../../api";

interface SessionHeaderProps {
  id: number;
  name: string;
  start: string;
  end: string;
}

export default function SessionHeader({ id, name, start, end }: SessionHeaderProps) {
  const { studyId } = useParams();
  const navigate = useNavigate();
  const mutation = useMutation((sessionId: number) => deleteSession(sessionId), {
    onSuccess: () => navigate(`/study/${studyId}`)
  });

  const handleClick = async (event: MouseEvent<HTMLButtonElement>) => {
    const willDelete = window.confirm("세션을 삭제하겠습니까?");
    if(!willDelete) return;
    mutation.mutate(id);
  }

  return (
    <Header title={name}>
      <DateLabel start={new Date(start)} end={new Date(end)} />
      <Box sx={{ display: "flex" }}>
        <SessionEditor id={id} name={name} start={new Date(start)} end={new Date(end)} />
        <Tooltip title="세션 삭제하기" arrow>
          <IconButton onClick={handleClick}>
            <DeleteForeverIcon />
          </IconButton>
        </Tooltip>
      </Box>
    </Header>
  );
}
