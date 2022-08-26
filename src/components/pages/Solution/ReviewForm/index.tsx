import { Avatar, Stack } from "@mui/material";
import MDEditor from "@uiw/react-md-editor";
import { useState } from "react";
import Button from "../../../atoms/Button";
import Wrapper from "../../../blocks/Wrapper";
import RateReviewIcon from "@mui/icons-material/RateReview";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import SolutionEntity from "../../../../core/entities/Solution";
import Solution from "../../../../di/Solution";
import Loading from "../../../blocks/Loading";
import ISolutionEntity from "../../../../core/entities/interfaces/iSolution";

function ReviewForm({ handleSubmit }: { handleSubmit(value: string): void }) {
  const [value, setValue] = useState<string | undefined>("");

  const handleClick = () => {
    if (!value) return;
    handleSubmit(value);
    setValue("");
  };

  return (
    <Stack direction="row" spacing={3}>
      <Avatar sx={{ p: 3, ml: 2, mt: 1 }}>
        <RateReviewIcon fontSize="medium" />
      </Avatar>
      <Wrapper width="100%">
        <MDEditor value={value} onChange={setValue} preview="edit" height={120} />
        <Stack direction="row-reverse">
          <Button
            color="success"
            variant="contained"
            disabled={!value}
            onClick={handleClick}
            sx={{ mt: 2, color: "whitesmoke" }}
          >
            리뷰 남기기
          </Button>
        </Stack>
      </Wrapper>
    </Stack>
  );
}

type ReviewFormContainerProps = {
  solutionId: number;
};

export default function ReviewFormContainer({ solutionId }: ReviewFormContainerProps) {
  const queryClient = useQueryClient();
  const { isLoading, mutate } = useMutation(
    (content: string) => Solution.createReview(solutionId, content),
    {
      onSuccess: (data) => {
        console.log(data);
        const prevSolution = queryClient.getQueryData(["solution", solutionId]) as ISolutionEntity;

        const newSolution = new SolutionEntity(prevSolution);
        newSolution.pushReviews([...prevSolution.reviews, data]);

        queryClient.setQueriesData(["solution", solutionId], newSolution);
      },
    }
  );

  const handleSubmit = (value: string) => {
    mutate(value);
  };

  return (
    <>
      <ReviewForm handleSubmit={handleSubmit} />
      {isLoading && <Loading />}
    </>
  );
}
