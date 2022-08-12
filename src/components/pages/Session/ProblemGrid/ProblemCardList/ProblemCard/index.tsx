import { useQuery } from "@tanstack/react-query";
import { getSolutionList } from "../../../../../../api";
import { useAuth } from "../../../../../../hoc/AuthContext";
import Solved from "../../../../../../types/Solved";
import ProblemCard from "./ProblemCard";

export interface ProblemCardContainerProps {
  id: number;
  number: string;
  name: string;
  platform: string;
}

function getProblemLink(platform: string, number: string) {
  switch (platform.toLocaleLowerCase()) {
    case "programmers":
      return `https://school.programmers.co.kr/learn/courses/30/lessons/${number}`;
    case "boj":
      return `https://www.acmicpc.net/problem/${number}`;
    default:
      return "";
  }
}

export default function ProblemCardContainer({
  id,
  number,
  name,
  platform,
}: ProblemCardContainerProps) {
  const { name: username } = useAuth();
  const { isLoading, data: solvedList = [] } = useQuery([`solutionList`, id], () =>
    getSolutionList(id).then((res) => res.data)
  );

  return (
    <ProblemCard
      name={name}
      platform={platform}
      solved={solvedList.find(({ name }: Solved) => name === username)}
      solvedList={solvedList.filter(({ name }: Solved ) => name !== username)}
      problemLink={getProblemLink(platform, number)}
      isLoading={isLoading}
    />
  );
}
