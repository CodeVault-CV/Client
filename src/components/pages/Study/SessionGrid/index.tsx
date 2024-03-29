import { Box, Stack, Typography } from "@mui/material";

import { ISessionData } from "../../../../core/entities/interfaces/iSession";
import useStudy from "../../../../hooks/Study/useStudy";
import usePersistantState from "../../../../hooks/usePersistantState";
import SessionAdder from "./SessionAdder";
import SessionCard from "./SessionCard";
import SessionGrid from "./SessionGrid";
import SessionSortButtonGroup from "./SessionSortButtonGroup";

type SessionGridProps = {
  studyId: string;
};

export default function SessionGridContainer({ studyId }: SessionGridProps) {
  const [order, setOrder] = usePersistantState("order", "descending");
  const [criterion, setCriterion] = usePersistantState("criterion", "start");
  const { study, isLeader } = useStudy(studyId);

  const handleOrder = (order: string) => setOrder(order);
  const handleCriterion = (criterion: string) => setCriterion(criterion);

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
