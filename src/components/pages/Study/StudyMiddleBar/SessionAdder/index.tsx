import { Box, Tooltip, IconButton, Popover } from "@mui/material";
import AddCircleIcon from "@mui/icons-material/AddCircle";

import React, { useState } from 'react';
import Wrapper from "../../../../blocks/Wrapper";
import SessionEditor from "../../../../blocks/SessionEditor";
import useCreateSession from "../../../../../hooks/Session/useCreateSession";

type SessionAdderContainerProps = {
  studyId: string;
};

export default function SessionAdderContainer({ studyId }: SessionAdderContainerProps) {
  const { create } = useCreateSession(studyId);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleSubmit = (name: string, start: Date, end: Date) => {
    create({ name, start, end });
  };

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  return (
    <Box display="flex">
      <Tooltip title={"세션 생성하기"} arrow>
        <IconButton onClick={handleClick}><AddCircleIcon /></IconButton>
      </Tooltip>
      <Popover
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
        open={open}
        onClose={() => setAnchorEl(null)}
      >
        <Wrapper>
          <SessionEditor handleSubmit={handleSubmit} />
        </Wrapper>
      </Popover>
    </Box>
  );
}
