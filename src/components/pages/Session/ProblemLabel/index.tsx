import { Box } from "@mui/material";

interface ProblemLabelProps {
  platform: string;
}

const getLabelColor = (platform: string) => {
  switch (platform.toLowerCase()) {
    case "programmers":
      return "#7057ff";
    case "boj":
      return "#0075ca"    
    default:
      return "#333333"
  }
}

const getPlatform = (platform: string) => {
  switch (platform.toLowerCase()) {
    case "programmers":
      return "Programmers";
    case "boj":
      return "BOJ"    
    default:
      return "Unknown"
  }
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
        backgroundColor: `${getLabelColor(platform)}`,
        color: "whitesmoke",
        borderRadius: 6,
      }}
    >
      {getPlatform(platform)}
    </Box>
  );
}
