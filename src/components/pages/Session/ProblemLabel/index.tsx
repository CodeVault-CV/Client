import { Box } from "@mui/material";

interface ProblemLabelProps {
  platform: string;
}

export default function ProblemLabel({ platform }: ProblemLabelProps) {
  return (
    <Box
      sx={{
        width: "fit-content",
        px: 1.5,
        py: 0.5,
        fontSize: 12,
        fontWeight: 600,
        backgroundColor: "#7057ff",
        color: "whitesmoke",
        borderRadius: 6,
      }}
    >
      {platform}
    </Box>
  );
}
