import { useState } from "react";
import { Grid, Stack, Typography, Box, Tooltip } from "@mui/material";
import { useNavigate } from "react-router-dom";

import Button from "../../../../../atoms/Button";
import LinearProgressWithLabel from "../../../../../blocks/LinearProgressWithLabel";
import Profile from "../../../../../blocks/Profile";
import Wrapper from "../../../../../blocks/Wrapper";
import ProblemLabel from "../../ProblemLabel";
import { ISolvedEntity } from "../../../../../../core/entities/interfaces/iSolution";
import IProblemEntity from "../../../../../../core/entities/interfaces/iProblem";
import { useAuth } from "../../../../../../hoc/AuthContext";

type ProblemCardProps = {
  problem: IProblemEntity;
};

const calcSolvedPercentage = (solvedList: ISolvedEntity[]) => {
  return (
    (solvedList.reduce((acc: number, cur: { solve: boolean }) => acc + (cur.solve ? 1 : 0), 0) /
      solvedList.length) *
    100
  );
};

const splitUserFrom = (
  solvedMembers: ISolvedEntity[],
  userId: string
): [ISolvedEntity, ISolvedEntity[]] => {
  const userIndex = solvedMembers.findIndex((solved) => solved.userId === userId);
  return [
    solvedMembers[userIndex],
    solvedMembers.slice(0, userIndex).concat(solvedMembers.slice(userIndex + 1)),
  ];
};

export default function ProblemCard({ problem }: ProblemCardProps) {
  const { userId } = useAuth();
  const [flipped, setFlipped] = useState(false);
  const navigate = useNavigate();

  const [user, members] = splitUserFrom(problem.solvedMembers, userId);

  const handleClick = () => {
    setFlipped(!flipped);
  };

  return (
    <Grid item xs={12} md={6} alignItems="stretch">
      <Wrapper>
        {/* 앞면 */}
        {!flipped ? (
          <Stack spacing={1}>
            <ProblemLabel platform={problem.platform} />
            <Typography variant="h5" fontWeight={700}>
              {problem.name}
            </Typography>
            <LinearProgressWithLabel
              value={calcSolvedPercentage(problem.solvedMembers)}
              sx={{ height: 6, borderRadius: 3 }}
            />
            <Stack direction="row" spacing={1}>
              <Button href={problem.url}>풀러가기</Button>
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
                <Box
                  sx={{
                    border: 1,
                    borderRadius: 1,
                    borderColor: user ? "primary.main" : "error.main",
                    p: 1,
                  }}
                >
                  <Profile
                    name={user.userName || "unknown"}
                    imageUrl={user.imageUrl}
                    color={user.solve ? "primary" : "warning"}
                    onClick={() =>
                      navigate(!user.solve ? `./solve/${problem.id}` : `./solution/${user.id}`)
                    }
                  />
                </Box>
                {members.map(({ userName, imageUrl, solve, id }) => {
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
