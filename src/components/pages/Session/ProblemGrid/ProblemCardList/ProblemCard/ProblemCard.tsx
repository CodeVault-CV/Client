import { useState } from "react";
import { Grid, Stack, Typography, Skeleton, Box, Tooltip } from "@mui/material";
import { useNavigate } from "react-router-dom";

import Button from "../../../../../atoms/Button";
import LinearProgressWithLabel from "../../../../../blocks/LinearProgressWithLabel";
import Profile from "../../../../../blocks/Profile";
import Wrapper from "../../../../../blocks/Wrapper";
import ProblemLabel from "../../ProblemLabel";
import { ISolvedEntity } from "../../../../../../core/entities/interfaces/iSolution";

type ProblemCardProps = {
  id: number;
  name: string;
  platform: string;
  solved?: ISolvedEntity;
  solvedList: ISolvedEntity[];
  problemLink: string;
  isLoading: boolean;
};

const calcSolvedPercentage = (solvedList: ISolvedEntity[]) => {
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
                value={solved ? calcSolvedPercentage(solvedList.concat([solved])) : 0}
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
                        borderColor: solved?.solve ? "primary.main" : "warning.main",
                        p: 1,
                      }}
                    >
                      <Profile
                        name={solved?.userName || "unknown"}
                        imageUrl={solved?.imageUrl}
                        color={solved?.solve ? "primary" : "warning"}
                        onClick={() =>
                          navigate(
                            !solved?.solve ? `./solve/${id}` : `./solution/${solved.id}`
                          )
                        }
                      />
                    </Box>
                    {solvedList.map(({ userName, imageUrl, solve, id }) => {
                      return (
                        <Box key={userName} sx={{ p: 1 }}>
                          <Tooltip title={userName} arrow>
                            <Box>
                              <Profile
                                name={userName}
                                imageUrl={imageUrl}
                                disabled={!solve}
                                onClick={() => navigate(`./solution/${id}`)}
                              />
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
