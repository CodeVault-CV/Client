import { Box, Grid, Skeleton, Stack, Typography } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import ReactCardFlip from "react-card-flip";
import { getSolutionList } from "../../../../../api";

import Button from "../../../../atoms/Button";
import LinearProgressWithLabel from "../../../../blocks/LinearProgressWithLabel";
import Profile from "../../../../blocks/Profile";
import Wrapper from "../../../../blocks/Wrapper";
import ProblemLabel from "../ProblemLabel";

export interface ProblemCardProps {
  id: number;
  number: string;
  name: string;
  platform: string;
}

function getProblemLink(platform: string, number: string) {
  switch (platform.toLocaleLowerCase()) {
    case "programmers":
      return `https://school.programmers.co.kr/learn/courses/30/lessons/${number}`;
    case "boj":
      return `https://www.acmicpc.net/problem/${number}`;
    default:
      return "";
  }
}

export default function ProblemCard({ id, number, name, platform }: ProblemCardProps) {
  const [flipped, setFlipped] = useState(false);
  const { isLoading, data: solutionList } = useQuery(
    [`solutionList`, id],
    () => getSolutionList(id).then((res) => res.data)
  );

  const handleClick = () => {
    setFlipped(!flipped);
  };

  const solvedPercentage =
    solutionList === undefined
      ? 0
      : (solutionList.reduce(
          (prev: number, cur: { solve: boolean }) => prev + (cur.solve ? 1 : 0),
          0
        ) /
          solutionList.length) *
        100;

  return (
    <Grid item xs={12} md={6} alignItems="stretch">
      <ReactCardFlip isFlipped={flipped} containerStyle={{ height: "100%" }}>
        {/* 앞면 */}
        <Wrapper>
          <Stack spacing={1}>
            <ProblemLabel platform={platform} />
            <Typography variant="h5" fontWeight={700}>
              {name}
            </Typography>
            {isLoading ? (
              <Skeleton width="100%">
                <LinearProgressWithLabel value={0} sx={{ height: 6, borderRadius: 3 }} />
              </Skeleton>
            ) : (
              <LinearProgressWithLabel
                value={solvedPercentage}
                sx={{ height: 6, borderRadius: 3 }}
              />
            )}
            <Stack direction="row" spacing={1}>
              <Button href={getProblemLink(platform, number)}>도전하기</Button>
              <Button onClick={handleClick}>리뷰하기</Button>
            </Stack>
          </Stack>
        </Wrapper>
        {/* 뒷면 */}
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
            <Box width="100%" sx={{ overflow: "auto" }}>
              <Stack direction="row" spacing={2}>
                {isLoading ? (
                  <>
                    <Skeleton variant="circular">
                      <Profile name="unknown" />
                    </Skeleton>
                    <Skeleton variant="circular">
                      <Profile name="unknown" />
                    </Skeleton>
                  </>
                ) : (
                  solutionList.map(
                    ({
                      name,
                      imageUrl,
                      solve,
                    }: {
                      name: string;
                      imageUrl: string;
                      solve: boolean;
                    }) => {
                      return (
                        <Profile key={name} name={name} imageUrl={imageUrl} disabled={!solve} />
                      );
                    }
                  )
                )}
              </Stack>
            </Box>
            <Button onClick={handleClick}>이전으로</Button>
          </Box>
        </Wrapper>
      </ReactCardFlip>
    </Grid>
  );
}
