import { useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { useNavigate } from "react-router-dom";
import { getStudyList } from "../../api";
import { useAuth } from "../../hoc/AuthContext";
import Study from "../../types/Study";

export default function useStudyList() {
  const { logout } = useAuth();
  const navigate = useNavigate()
  const { isLoading, data } = useQuery<Study[], AxiosError>(
    ["studyList"],
    () => getStudyList().then((res) => res.data),
    {
      retry: false,
      onError: (error) => {
        const { status } = error.request;
        if(status === 401) {
          alert("로그인이 만료됐습니다. 다시 로그인 해주세요.");
          logout();
          navigate("/");
        }
      }
    }
  );

  return {
    isLoading,
    studyList: data,
  };
}
