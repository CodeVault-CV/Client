import { Typography } from "@mui/material";
import formatDateLabel from "../../../utils/formatDateLabel";

interface DateLabelProps {
  start: Date,
  end: Date,
}

export default function DateLabel({ start, end }: DateLabelProps) {
  return (
    <Typography variant="caption" color="text.secondary">
      {formatDateLabel(new Date(start), new Date(end))}
    </Typography>
  );
}
