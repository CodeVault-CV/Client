import { useState, Fragment, MouseEvent } from "react";
import { Menu, MenuItem, Divider, Skeleton } from "@mui/material";
import styled from "@emotion/styled";

import CreateStudyButton from "./CreateStudyButton";
import Button from "../../../atoms/Button";
import LinkButton from "../../../atoms/LinkButton";
import useStudyList from "../../../../hooks/useStudyList";

const AltTextWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 15px;
  color: gray;
  font-size: 0.9em;
`;

export default function StudyButton() {
  const { isLoading, studyList } = useStudyList();
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
      <Menu elevation={3} anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleClose}>
        {isLoading ? (
          <MenuItem>
            <Skeleton variant="rectangular" />
          </MenuItem>
        ) : studyList.length ? (
          studyList.map((study) => (
            <MenuItem key={study.id} id={study.id} onClick={handleClose} sx={{ p: 0 }}>
              <LinkButton to={`/study/${study.id}`} variant="text">
                {study.name}
              </LinkButton>
            </MenuItem>
          ))
        ) : (
          <AltTextWrapper>참여 중인 스터디가 없습니다</AltTextWrapper>
        )}
        <Divider />
        <CreateStudyButton />
      </Menu>
    </Fragment>
  );
}
