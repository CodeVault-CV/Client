import { Box, Stack, Typography } from "@mui/material";
import { useState } from "react";
import useStudy from "../../../../hooks/Study/useStudy";
import SessionAdder from "./SessionAdder";
import SessionCard from "./SessionCard";
import SessionGrid from "./SessionGrid";
import SortSplitButton from "./SortSplitButton";

type SessionGridProps = {
  studyId: string;
};

export default function SessionGridContainer({ studyId }: SessionGridProps) {
  const [order, setOrder] = useState(0);
  const { study, isLeader } = useStudy(studyId);

  const handleOrderChange = (order: number) => {
    setOrder(order);
  };

  return (
    <Stack spacing={2}>
      <Stack direction="row-reverse" spacing={1}>
        {isLeader && <SessionAdder studyId={studyId} />}
        <SortSplitButton handleOrderChange={handleOrderChange} />
      </Stack>
      <SessionGrid>
        {study?.sessions.length ? (
          study.sessions
            .sort((a, b) => {
              if (order === 0) return b.end.getTime() - a.end.getTime();
              return a.end.getTime() - b.end.getTime();
            })
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
