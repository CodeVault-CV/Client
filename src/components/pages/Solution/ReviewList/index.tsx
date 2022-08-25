import { Box, Stack, Typography } from "@mui/material";
import MDEditor from "@uiw/react-md-editor";
import dayjs from "dayjs";
import IReviewEntity from "../../../../core/entities/interfaces/iReview";
import useSolution from "../../../../hooks/Solution/useSolution";

function ReviewCard({ review }: { review: IReviewEntity }) {
  return (
    <Box>
      <Stack>
        <Box
          sx={{
            display: "flex",
            py: 1,
            px: 1,
            border: 1,
            borderTopRightRadius: 5,
            borderTopLeftRadius: 5,
            borderColor: "info.main",
            backgroundColor: "rgba(59, 154, 225, 0.5)",
          }}
        >
          <Typography fontWeight={800} sx={{ mx: 1 }}>
            {review.userName}
          </Typography>
          <Typography color="lightslategray">commented {dayjs(review.createdTime).fromNow()}</Typography>
        </Box>
        <Box
          sx={{
            p: 2,
            border: 1,
            borderTop: 0,
            borderBottomRightRadius: 5,
            borderBottomLeftRadius: 5,
            borderColor: "info.main",
          }}
        >
          <MDEditor.Markdown source={review.content} />
        </Box>
      </Stack>
    </Box>
  );
}

export default function ReviewListContainer({ solutionId }: { solutionId: number }) {
  const solution = useSolution(solutionId);

  return (
    <Stack spacing={2}>
      {solution && solution.reviews.map((review) => <ReviewCard key={review.id} review={review} />)}
    </Stack>
  );
}
