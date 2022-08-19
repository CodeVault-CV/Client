import { useEffect, useState } from "react";
import { Grid, Stack, Typography } from "@mui/material";

import DateLabel from "../../../../atoms/DateLabel";
import Wrapper from "../../../../blocks/Wrapper";
import LinkButton from "../../../../atoms/LinkButton";
import ISessionEntity from "../../../../../core/entities/interfaces/iSession";

function formatTime(date: Date) {
  const leftDate = Math.floor(date.getTime() / 3600000 / 24);
  if (leftDate > 0) return "D - " + String(leftDate);

  const hour = String(Math.floor(date.getTime() / 3600000)).padStart(2, "0");
  const min = String(Math.floor(date.getTime() / 60000) % 60).padStart(2, "0");
  const sec = String(Math.floor(date.getTime() / 1000) % 60).padStart(2, "0");

  return `${hour}:${min}:${sec}`;
}

function isLessThanDay(time: number) {
  return 0 <= time && time / 3600000 / 24 < 1;
}

export default function SessionCard({ id, name, start, end }: Omit<ISessionEntity, "problems">) {
  const [time, setTime] = useState(end.getTime() - new Date().getTime());

  useEffect(() => {
    if (!isLessThanDay(time)) return;

    const interval = setInterval(() => {
      setTime(end.getTime() - new Date().getTime());
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [end, time]);

  return (
    <Grid item md={4} xs={6}>
      <Wrapper>
        <Stack spacing={1}>
          <Typography variant="h4" fontWeight={600}>
            {name}
          </Typography>
          <DateLabel start={new Date(start)} end={new Date(end)} />
          {time < 0 ? (
            <LinkButton to={`./session/${id}`}>기간 종료</LinkButton>
          ) : (
            <LinkButton color="primary" to={`./session/${id}`}>
              {formatTime(new Date(time))}
            </LinkButton>
          )}
        </Stack>
      </Wrapper>
    </Grid>
  );
}
