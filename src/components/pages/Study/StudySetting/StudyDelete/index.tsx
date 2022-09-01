import { useState } from "react";
import { Alert, Stack, Typography } from "@mui/material";
import { Error } from "@mui/icons-material";

import Button from "../../../../atoms/Button";
import Modal from "../../../../blocks/Modal";
import useDeleteStudy from "../../../../../hooks/Study/useDeleteStudy";
import Loading from "../../../../blocks/Loading";

interface StudyDeletionProps {
  id: string;
}

export default function StudyDelete({ id }: StudyDeletionProps) {
  const { isLoading, deleteStudy } = useDeleteStudy();
  const [openModal, setOpenModal] = useState(false);
  const handleOpenModal = () => setOpenModal(true);
  const handleCloseModal = () => setOpenModal(false);

  const handleClick = () => {
    deleteStudy(id);
    handleCloseModal();
  };

  return (
    <>
      <Alert severity="warning" sx={{ mt: 2, mb: 4 }}>
        스터디 관련 모든 정보(Git Repository 포함)를 영구적으로 삭제합니다. 삭제된 데이터는 복구할
        수 없습니다.
      </Alert>
      <Stack alignItems="center">
        <Button color="error" onClick={handleOpenModal} sx={{ width: 100 }}>
          스터디 삭제
        </Button>
      </Stack>
      <Modal open={openModal} onClose={handleCloseModal}>
        <Stack width={400} spacing={3} alignItems="center">
          <Typography variant="h6" color="error">
            <Stack direction="row" alignItems="center">
              <Error sx={{ marginRight: 1 }} /> 스터디를 정말로 삭제하시겠습니까?
            </Stack>
          </Typography>
          <Typography>확인을 누르면 스터디가 영구적으로 삭제됩니다.</Typography>
          <Button color="error" onClick={handleClick}>
            확인
          </Button>
        </Stack>
      </Modal>
      {isLoading && <Loading />}
    </>
  );
}
