import { useState, Fragment, MouseEvent } from "react";
import { Menu, MenuItem, Divider, Skeleton, Box } from "@mui/material";
import styled from "@emotion/styled";

import CreateStudyButton from "./CreateStudyButton";
import Button from "../../../atoms/Button";
import LinkButton from "../../../atoms/LinkButton";
import useStudyList from "../../../../hooks/Study/useStudyList";

const AltTextWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 15px;
  color: gray;
  font-size: 0.9em;
`;

export default function StudyButton() {
  const { isLoading, studyList = [] } = useStudyList();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Fragment>
      <Button variant="text" color="primary" size="large" onClick={handleClick}>
        스터디
      </Button>
      <Menu
        elevation={3}
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <Box minWidth={160}>
          {isLoading ? (
            <MenuItem>
              <Skeleton variant="rectangular" />
            </MenuItem>
          ) : studyList.length ? (
            studyList.map((study) => (
              <LinkButton
                key={study.id}
                to={`/study/${study.id}`}
                variant="text"
                sx={{ width: "100%", textTransform: "none" }}
                onClick={handleClose}
              >
                {study.name}
              </LinkButton>
            ))
          ) : (
            <AltTextWrapper>참여 중인 스터디가 없습니다</AltTextWrapper>
          )}
          <Divider sx={{ my: 1 }} />
          <CreateStudyButton />
        </Box>
      </Menu>
    </Fragment>
  );
}
