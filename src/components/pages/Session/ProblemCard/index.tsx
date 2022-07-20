import { Avatar, Box, Grid, Stack, Tooltip, Typography } from "@mui/material";
import { useState } from "react";
import ReactCardFlip from "react-card-flip";

import Button from "../../../atoms/Button";
import LinearProgressWithLabel from "../../../blocks/LinearProgressWithLabel";
import Wrapper from "../../../blocks/Wrapper";
import ProblemLabel from "../ProblemLabel";

interface IProfile {
  name: string;
}

interface ProblemCardProps {
  id: number;
  number: string;
  name: string;
  platform: string;
}

function Profile({ name }: IProfile) {
  return (
    <Tooltip title={name} arrow>
      <Avatar sx={{ width: 60, height: 60 }}>{name.slice(0, 2)}</Avatar>
    </Tooltip>
  );
}

export default function ProblemCard({ number, name, platform }: ProblemCardProps) {
  const [flipped, setFlipped] = useState(false);

  const handleClick = () => {
    setFlipped(!flipped);
  };

  return (
    <Grid item xs={12} md={6} alignItems="stretch">
      <ReactCardFlip isFlipped={flipped} containerStyle={{ height: "100%" }}>
        <Wrapper>
          <Stack spacing={1}>
            <ProblemLabel platform={platform} />
            <Typography variant="h5" fontWeight={700}>
              {name}
            </Typography>
            <LinearProgressWithLabel value={75} sx={{ height: 6, borderRadius: 3 }} />
            <Stack direction="row" spacing={1}>
              <Button>도전하기</Button>
              <Button onClick={handleClick}>리뷰하기</Button>
            </Stack>
          </Stack>
        </Wrapper>

        <Wrapper minHeight={188} height="100%">
          <Box
            sx={{
              height: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              alignItems: "baseline",
            }}
          >
            <Box width="100%" sx={{ overflow: "auto", mt: 1 }}>
              <Stack direction="row" spacing={2}>
                {["KingDonggyu", "woong-jae", "SeongukBaek", "Go-Jaecheol"].map((name) => {
                  return <Profile key={name} name={name} />;
                })}
              </Stack>
            </Box>
            <Button onClick={handleClick}>이전으로</Button>
          </Box>
        </Wrapper>
      </ReactCardFlip>
    </Grid>
  );
}
