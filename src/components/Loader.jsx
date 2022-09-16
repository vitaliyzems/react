import { CircularProgress } from "@mui/material";

export const Loader = () => {
  return (
    <div style={{ width: "fit-content", margin: "50px auto 0" }}>
      <CircularProgress size={60} sx={{ color: "rgb(43, 129, 129)" }} />
    </div>
  );
};
