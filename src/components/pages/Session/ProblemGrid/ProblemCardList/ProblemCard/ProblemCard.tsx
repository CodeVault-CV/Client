import { useState } from "react";
import { Grid, Stack, Typography, Skeleton, Box, Tooltip } from "@mui/material";

import Button from "../../../../../atoms/Button";
import LinearProgressWithLabel from "../../../../../blocks/LinearProgressWithLabel";
import Profile from "../../../../../blocks/Profile";
import Wrapper from "../../../../../blocks/Wrapper";
import ProblemLabel from "../../ProblemLabel";
import { SolutionListItem } from "../../../../../../core/types/Solved";
import { useNavigate } from "react-router-dom";

type ProblemCardProps = {
  id: number;
  name: string;
  platform: string;
  solved: SolutionListItem;
  solvedList: SolutionListItem[];
  problemLink: string;
  isLoading: boolean;
};

const calcSolvedPercentage = (solvedList: SolutionListItem[]) => {
  return (
    (solvedList.reduce((acc: number, cur: { solve: boolean }) => acc + (cur.solve ? 1 : 0), 0) /
      solvedList.length) *
    100
  );
};

export default function ProblemCard({
  id,
  name,
  platform,
  problemLink,
  solved,
  solvedList,
  isLoading,
}: ProblemCardProps) {
  const [flipped, setFlipped] = useState(false);
  const navigate = useNavigate();

  const handleClick = () => {
    setFlipped(!flipped);
  };

  return (
    <Grid item xs={12} md={6} alignItems="stretch">
      <Wrapper>
        {/* 앞면 */}
        {!flipped ? (
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
                value={calcSolvedPercentage(solvedList.concat([solved]))}
                sx={{ height: 6, borderRadius: 3 }}
              />
            )}
            <Stack direction="row" spacing={1}>
              <Button href={problemLink}>도전하기</Button>
              <Button onClick={handleClick}>리뷰하기</Button>
            </Stack>
          </Stack>
        ) : (
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
                        onClick={ () => !solved.solve && navigate(`./solve/${id}`)}
                      />
                    </Box>
                    {solvedList.map(({ name, imageUrl, solve }) => {
                      return (
                        <Box key={name} sx={{ p: 1 }}>
                          <Tooltip title={name} arrow>
                            <Box>
                              <Profile name={name} imageUrl={imageUrl} disabled={!solve} />
                            </Box>
                          </Tooltip>
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
        )}
        {/* 뒷면 */}
      </Wrapper>
    </Grid>
  );
}
