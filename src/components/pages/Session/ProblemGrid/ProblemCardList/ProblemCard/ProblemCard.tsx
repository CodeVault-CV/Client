import { useState } from "react";
import { Grid, Stack, Typography, Skeleton, Box } from "@mui/material";

import Button from "../../../../../atoms/Button";
import LinearProgressWithLabel from "../../../../../blocks/LinearProgressWithLabel";
import Profile from "../../../../../blocks/Profile";
import Wrapper from "../../../../../blocks/Wrapper";
import ProblemLabel from "../../ProblemLabel";
import Solved from "../../../../../../types/Solved";

type ProblemCardProps = {
  name: string;
  platform: string;
  solved: Solved;
  solvedList: Solved[];
  problemLink: string;
  isLoading: boolean;
};

export default function ProblemCard({
  name,
  platform,
  problemLink,
  solved,
  solvedList,
  isLoading,
}: ProblemCardProps) {
  const [flipped, setFlipped] = useState(false);

  const handleClick = () => {
    setFlipped(!flipped);
  };

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
                    <Box sx={{ p: 1 }}>
                      <Skeleton variant="circular">
                        <Profile name="unknown" />
                      </Skeleton>
                    </Box>
                    <Box sx={{ p: 1 }}>
                      <Skeleton variant="circular">
                        <Profile name="unknown" />
                      </Skeleton>
                    </Box>
                    <Box sx={{ p: 1 }}>
                      <Skeleton variant="circular">
                        <Profile name="unknown" />
                      </Skeleton>
                    </Box>
                  </>
                ) : (
                  <>
                    <Box
                      sx={{
                        border: 1,
                        borderRadius: 1,
                        borderColor: solved.solve ? "primary.main" : "warning.main",
                        p: 1,
                      }}
                    >
                      <Profile
                        name={solved.name}
                        imageUrl={solved.imageUrl}
                        color={solved.solve ? "primary" : "warning"}
                      />
                    </Box>
                    {solvedList.map(({ name, imageUrl, solve }) => {
                      return (
                        <Box key={name} sx={{ p: 1 }}>
                          <Profile name={name} imageUrl={imageUrl} disabled={!solve} />
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
