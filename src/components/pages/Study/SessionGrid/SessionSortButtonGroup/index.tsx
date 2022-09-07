import { MouseEvent } from "react";
import { ToggleButtonGroup, ToggleButton } from "@mui/material";

export default function SessionSortButtonGroup({
  order,
  criterion,
  handleCriterion,
  handleOrder,
}: {
  order: string;
  criterion: string;
  handleCriterion(value: string): void;
  handleOrder(value: string): void;
}) {
  const handleCriterionClick = (event: MouseEvent<HTMLElement>, value: string) => {
    if (value) {
      handleCriterion(value);
    }
  };

  const handleOrderClick = (event: MouseEvent<HTMLElement>, value: string) => {
    if (value) {
      handleOrder(value);
    }
  };

  return (
    <>
      <ToggleButtonGroup
        color="primary"
        value={order}
        exclusive
        onChange={handleOrderClick}
        aria-label="sorting order"
        size="small"
      >
        <ToggleButton value="descending">최신순</ToggleButton>
        <ToggleButton value="ascending">오래된순</ToggleButton>
      </ToggleButtonGroup>
      <ToggleButtonGroup
        color="primary"
        value={criterion}
        exclusive
        onChange={handleCriterionClick}
        aria-label="sorting criterion"
        size="small"
      >
        <ToggleButton value="start">시작일</ToggleButton>
        <ToggleButton value="end">마감일</ToggleButton>
      </ToggleButtonGroup>
    </>
  );
}
