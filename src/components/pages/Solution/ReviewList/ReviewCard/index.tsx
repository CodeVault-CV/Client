import { useState, MouseEvent } from "react";
import { Box, IconButton, Menu, MenuItem, Stack, Typography } from "@mui/material";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import MDEditor from "@uiw/react-md-editor";
import dayjs from "dayjs";

import { useAuth } from "../../../../../hoc/AuthContext";
import IReviewEntity from "../../../../../core/entities/interfaces/iReview";
import useDeleteReview from "../../../../../hooks/Solution/useDeleteReview";
import useUpdateReview from "../../../../../hooks/Solution/useUpdateReview";
import Button from "../../../../atoms/Button";

function ReviewCard({
  review,
  editable = false,
  handleDelete,
  handleUpdate,
}: {
  review: IReviewEntity;
  editable?: boolean;
  handleDelete(reviewId: number): void;
  handleUpdate(reviewId: number, content: string): void;
}) {
  const [value, setValue] = useState<string | undefined>(review.content);
  const [isEdit, setIsEdit] = useState(false);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const open = Boolean(anchorEl);

  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleDeleteClick = () => {
    const check = window.confirm("리뷰를 삭제하시겠습니까?");
    if (check) {
      handleDelete(review.id);
    }
    handleClose();
  };

  const handleEditClick = () => {
    if (!value) return;
    handleUpdate(review.id, value);
    toggleEdit();
  };

  const toggleEdit = () => {
    setIsEdit((prev) => !prev);
    setValue(review.content);
    handleClose();
  };

  return (
    <Box>
      <Stack>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            px: 1,
            border: 1,
            borderTopRightRadius: 5,
            borderTopLeftRadius: 5,
            borderColor: "rgba(59, 154, 225, 0.3)",
            backgroundColor: "rgba(59, 154, 225, 0.1)",
            height: "36px",
          }}
        >
          <Stack direction="row">
            <Typography fontWeight={800} sx={{ mx: 1 }}>
              {review.userName}
            </Typography>
            <Typography color="lightslategray">
              commented {dayjs(review.createdTime).fromNow()}
            </Typography>
          </Stack>
          {editable && (
            <>
              <IconButton onClick={handleClick}>
                <MoreHorizIcon fontSize="small" />
              </IconButton>
              <Menu
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "center",
                }}
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
              >
                <MenuItem onClick={toggleEdit}>
                  <Typography fontSize={15} fontWeight={500}>
                    편집하기
                  </Typography>
                </MenuItem>
                <MenuItem onClick={handleDeleteClick}>
                  <Typography fontSize={15} fontWeight={500} color="error.main">
                    삭제하기
                  </Typography>
                </MenuItem>
              </Menu>
            </>
          )}
        </Box>
        <Box
          sx={{
            p: 2,
            border: 1,
            borderTop: 0,
            borderBottomRightRadius: 5,
            borderBottomLeftRadius: 5,
            borderColor: "rgba(59, 154, 225, 0.3)",
          }}
        >
          {isEdit ? (
            <Stack spacing={2}>
              <MDEditor value={value} onChange={setValue} preview="edit" height={120} />
              <Stack direction="row-reverse" spacing={1}>
                <Button
                  color="success"
                  disabled={value === review.content || !value}
                  onClick={handleEditClick}
                >
                  리뷰 업데이트하기
                </Button>
                <Button color="error" onClick={toggleEdit}>
                  취소하기
                </Button>
              </Stack>
            </Stack>
          ) : (
            <MDEditor.Markdown source={review.content} />
          )}
        </Box>
      </Stack>
    </Box>
  );
}

export default function ReviewCardContainer({
  solutionId,
  review,
}: {
  solutionId: number;
  review: IReviewEntity;
}) {
  const { userId } = useAuth();
  const deleteReview = useDeleteReview(solutionId);
  const updateReview = useUpdateReview(solutionId);

  const handleDelete = (reviewId: number) => {
    deleteReview(reviewId);
  };

  const handleUpdate = (reviewId: number, content: string) => {
    updateReview({ reviewId, content });
  };

  return (
    <ReviewCard
      review={review}
      editable={userId === review.userId}
      handleDelete={handleDelete}
      handleUpdate={handleUpdate}
    />
  );
}
