import { useState } from "react";
import { Grid, Stack, Typography, Skeleton, Box } from "@mui/material";

import Button from "../../../../../atoms/Button";
import LinearProgressWithLabel from "../../../../../blocks/LinearProgressWithLabel";
import Profile from "../../../../../blocks/Profile";
import Wrapper from "../../../../../blocks/Wrapper";
import ProblemLabel from "../../ProblemLabel";
import Solved from "../../../../../../types/Solved";

type ProblemCardProps = {
  username: string;
  name: string;
  platform: string;
  solvedList: Solved[];
  problemLink: string;
  isLoading: boolean;
};

export default function ProblemCard({
  username,
  name,
  platform,
  problemLink,
  solvedList,
  isLoading,
}: ProblemCardProps) {
  const [flipped, setFlipped] = useState(false);

  const handleClick = () => {
    setFlipped(!flipped);
  };

  const [userSolved, teamSolved] = solvedList.reduce(
    (acc, cur) => {
      if (cur.name === username) {
        acc[0] = cur;
      } else {
        acc[1].push(cur);
      }
      return acc;
    },
    [null, []] as [null | Solved, Solved[]]
  );

  const solvedPercentage =
    solvedList === undefined
      ? 0
      : (solvedList.reduce(
          (prev: number, cur: { solve: boolean }) => prev + (cur.solve ? 1 : 0),
          0
        ) /
          solvedList.length) *
        100;

  return (
    <Grid item xs={12} md={6} alignItems="stretch">
      {/* 앞면 */}
      {!flipped ? (
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
              <Button href={problemLink}>도전하기</Button>
              <Button onClick={handleClick}>리뷰하기</Button>
            </Stack>
          </Stack>
        </Wrapper>
      ) : (
        <Wrapper minHeight={188} height="100%">
          <Stack spacing={2}>
            <Box width="100%" sx={{ overflow: "auto" }}>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  flexWrap: "wrap",
                }}
              >
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
                  <>
                    <Box
                      sx={{
                        border: 1,
                        borderRadius: 1,
                        borderColor: "primary.main",
                        p: 1,
                      }}
                    >
                      <Profile
                        name={userSolved?.name ?? ""}
                        imageUrl={userSolved?.imageUrl}
                        disabled={!userSolved?.solve}
                      />
                    </Box>
                    {teamSolved.map(({ name, imageUrl, solve }: Solved) => {
                      return (
                        <Box sx={{ p: 1 }}>
                          <Profile key={name} name={name} imageUrl={imageUrl} disabled={!solve} />
                        </Box>
                      );
                    })}
                  </>
                )}
              </Box>
            </Box>
            <Box>
              <Button onClick={handleClick}>이전으로</Button>
            </Box>
          </Stack>
        </Wrapper>
      )}
      {/* 뒷면 */}
    </Grid>
  );
}
