import { useQuery } from "@tanstack/react-query";
import { useAuth } from "../../../../../../hoc/AuthContext";
import ProblemCard from "./ProblemCard";
import Solution from "../../../../../../di/Solution";

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
  const { userId } = useAuth();
  const { isLoading, data: solvedList = [] } = useQuery([`solutionList`, id], () =>
    Solution.getSolutionList(id)
  );

  return (
    <ProblemCard
      id={id}
      name={name}
      platform={platform}
      solved={solvedList.find(({ userId: id }) => id === userId)}
      solvedList={solvedList.filter(({ userId: id }) => id !== userId)}
      problemLink={getProblemLink(platform, number)}
      isLoading={isLoading}
    />
  );
}
