import { useQuery } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hoc/AuthContext";

import Study from "../../di/Study";

export default function useStudyList() {
  const { logout } = useAuth();
  const navigate = useNavigate();
  const { isLoading, data } = useQuery(["studyList"], () => Study.getStudyList(), {
    retry: false,
    onError: ({ response }) => {
      if (response.status === 401) {
        alert("로그인이 만료됐습니다. 다시 로그인 해주세요.");
        logout();
        navigate("/");
      }
    },
  });

  return {
    isLoading,
    studyList: data,
  };
}
