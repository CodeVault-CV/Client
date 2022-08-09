import SessionCardSkeleton from "./SessionCard/SessionCardSkeleton";
import SessionGrid from "./SessionGrid";

export default function SessionGridSkeleton() {
  return(
    <SessionGrid>
      <SessionCardSkeleton />
      <SessionCardSkeleton />
    </SessionGrid>
  )
}