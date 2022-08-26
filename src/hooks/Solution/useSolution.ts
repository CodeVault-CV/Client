import { useQuery } from "@tanstack/react-query";
import Solution from "../../di/Solution";

export default function useSolution(solutionId: number) {
  const { data } = useQuery(["solution", solutionId], () => Solution.getSolution(solutionId));

  return data;
}
