import Box from "@mui/material/Box";
import LinearProgress, {
  type LinearProgressProps,
} from "@mui/material/LinearProgress";
import * as React from "react";
import { Txt } from "../Txt";
import { Stack } from "@mui/material";

function LinearProgressWithLabel(
  props: LinearProgressProps & { value: number }
) {
  return (
    <Stack gap="5px">
      <Box display="flex" justifyContent="space-between">
        <Txt size="s" color="secondary">
          Новый креатив готовится...
        </Txt>
        <Txt size="s" color="secondary">{`${Math.round(props.value)}%`}</Txt>
      </Box>
      <Box sx={{ width: "100%" }}>
        <LinearProgress
          variant="determinate"
          sx={{
            borderRadius: "2px",
            "& .MuiLinearProgress-bar1Determinate": {
              background: "linear-gradient(45deg, #FF6417, #7000FFF0)",
              borderRadius: "2px",
            },
            "& .MuiLinearProgress-barColorPrimary": {
              backgroundColor: "grey",
            },
          }}
          {...props}
        />
      </Box>
    </Stack>
  );
}

export function Progressbar({
  timerMin = 15,
  startTime,
}: {
  timerMin?: number;
  startTime: number;
}) {
  const [progress, setProgress] = React.useState(0);
  const totalTime = timerMin * 60 * 1000;

  React.useEffect(() => {
    const timer = setInterval(() => {
      const currentTime = Date.now();
      const elapsedTime = currentTime - startTime;
      const newProgress = (elapsedTime / totalTime) * 100;

      if (newProgress >= 100) {
        setProgress(100);
        clearInterval(timer);
      } else {
        setProgress(newProgress);
      }
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, [startTime, totalTime]);

  return (
    <Box sx={{ width: "100%" }}>
      <LinearProgressWithLabel value={progress} />
    </Box>
  );
}
