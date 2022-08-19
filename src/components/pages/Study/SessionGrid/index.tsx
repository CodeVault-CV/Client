import { Box, Typography } from "@mui/material";
import useStudy from "../../../../hooks/Study/useStudy";
import SessionCard from "./SessionCard";
import SessionGrid from "./SessionGrid";

type SessionGridProps = {
  studyId: string;
};

export default function SessionGridContainer({ studyId }: SessionGridProps) {
  const { study } = useStudy(studyId);

  return (
    <SessionGrid>
      {study?.sessions.length ? (
        study.sessions.map(({ id, ...sessionProps }) => (
          <SessionCard key={id} id={id} {...sessionProps} />
        ))
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
  );
}
