import { Stack } from "@mui/material";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

import { useAuth } from "../../../../hoc/AuthContext";
import Solution from "../../../../di/Solution";
import Button from "../../../atoms/Button";
import Loading from "../../../blocks/Loading";
import SolutionViewer from "./SolutionViewer";
import useSolution from "../../../../hooks/Solution/useSolution";

type SolutionViewerContainerProps = {
  solutionId: number;
};

export default function SolutionViewerContainer({ solutionId }: SolutionViewerContainerProps) {
  const { userId } = useAuth();
  const solution = useSolution(solutionId);

  const navigate = useNavigate();
  const { isLoading, mutate } = useMutation(() => Solution.deleteSolution(solutionId), {
    onSuccess: () => {
      navigate("./../../");
    },
  });

  const handleDelete = () => {
    let result = window.confirm("깃허브에서도 풀이가 삭제됩니다. 삭제하시겠습니까?");
    if (result) {
      mutate();
    }
  };

  return (
    <>
      <SolutionViewer solution={solution} />
      {solution?.userId === userId && (
        <Stack direction="row-reverse" spacing={1}>
          <Button onClick={handleDelete}>삭제하기</Button>
          {/* <Button>수정하기</Button> */}
        </Stack>
      )}
      {isLoading && <Loading />}
    </>
  );
}
