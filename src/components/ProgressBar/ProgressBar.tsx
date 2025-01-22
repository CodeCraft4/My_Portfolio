import { styled } from "@mui/material/styles";
import Stack from "@mui/material/Stack";
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";
import { COLORS } from "@muc/constants";
import { Box, Typography } from "@mui/material";

type ProgressType = {
  title: string;
  percentage: number;
};

const ProgressBar = (props: ProgressType) => {
  const { title, percentage } = props || {};
  return (
    <Stack spacing={2} sx={{ flexGrow: 1 }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography variant="h5">{title}</Typography>
        <Typography variant="h5" color={COLORS.primary.main}>
          {percentage}%
        </Typography>
      </Box>
      <BorderLinearProgress variant="determinate" value={percentage} />
      <br />
    </Stack>
  );
};

export default ProgressBar;

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 13,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: theme.palette.grey[200],
    ...theme.applyStyles("light", {
      backgroundColor: theme.palette.grey[800],
    }),
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: COLORS.primary.main,
    ...theme.applyStyles("light", {}),
  },
}));
