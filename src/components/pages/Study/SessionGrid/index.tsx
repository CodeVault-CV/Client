import { Box, Stack, ToggleButton, ToggleButtonGroup, Typography } from "@mui/material";
import { useState, MouseEvent } from "react";

import { ISessionData } from "../../../../core/entities/interfaces/iSession";
import useStudy from "../../../../hooks/Study/useStudy";
import SessionAdder from "./SessionAdder";
import SessionCard from "./SessionCard";
import SessionGrid from "./SessionGrid";

type SessionGridProps = {
  studyId: string;
};

function SessionSortButtonGroup({
  order,
  criterion,
  handleCriterion,
  handleOrder,
}: {
  order: string;
  criterion: string;
  handleCriterion(value: string): void;
  handleOrder(value: string): void;
}) {
  const handleCriterionClick = (event: MouseEvent<HTMLElement>, value: string) => {
    if (value) {
      handleCriterion(value);
    }
  };

  const handleOrderClick = (event: MouseEvent<HTMLElement>, value: string) => {
    if (value) {
      handleOrder(value);
    }
  };

  return (
    <>
      <ToggleButtonGroup
        color="primary"
        value={order}
        exclusive
        onChange={handleOrderClick}
        aria-label="sorting order"
        size="small"
      >
        <ToggleButton value="descending">최신순</ToggleButton>
        <ToggleButton value="ascending">오래된순</ToggleButton>
      </ToggleButtonGroup>
      <ToggleButtonGroup
        color="primary"
        value={criterion}
        exclusive
        onChange={handleCriterionClick}
        aria-label="sorting criterion"
        size="small"
      >
        <ToggleButton value="start">시작일</ToggleButton>
        <ToggleButton value="end">마감일</ToggleButton>
      </ToggleButtonGroup>
    </>
  );
}

export default function SessionGridContainer({ studyId }: SessionGridProps) {
  const [order, setOrder] = useState("descending");
  const [criterion, setCriterion] = useState("start");
  const { study, isLeader } = useStudy(studyId);

  const handleCriterion = (criterion: string) => setCriterion(criterion);
  const handleOrder = (order: string) => setOrder(order);

  const priority = (a: ISessionData, b: ISessionData) => {
    if (order === "descending") {
      if (criterion === "start") {
        return b.start.getTime() - a.start.getTime();
      }
      return b.end.getTime() - a.end.getTime();
    } else {
      if (criterion === "start") {
        return a.start.getTime() - b.start.getTime();
      }
      return a.end.getTime() - b.end.getTime();
    }
  };

  return (
    <Stack spacing={2}>
      <Stack direction="row-reverse" spacing={1}>
        {isLeader && <SessionAdder studyId={studyId} />}
        <SessionSortButtonGroup
          order={order}
          criterion={criterion}
          handleCriterion={handleCriterion}
          handleOrder={handleOrder}
        />
      </Stack>
      <SessionGrid>
        {study?.sessions.length ? (
          study.sessions
            .sort((a, b) => priority(a, b))
            .map(({ id, ...sessionProps }) => <SessionCard key={id} id={id} {...sessionProps} />)
        ) : (
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            sx={{
              width: "100%",
              height: 200,
            }}
          >
            <Typography fontSize={24} fontWeight={600}>
              스터디장님! 세션을 추가해주세요
            </Typography>
          </Box>
        )}
      </SessionGrid>
    </Stack>
  );
}
