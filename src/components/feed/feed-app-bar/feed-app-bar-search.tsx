import { TextField } from "@mui/material";
import { Grid } from "@mui/system";

const labels = {
  searchPlaceholder: "Search",
};

export const FeedAppBarSearch = () => {
  return (
    <Grid>
      <TextField
        size="small"
        placeholder={labels.searchPlaceholder}
        fullWidth
        sx={{ minWidth: 250 }}
      />
    </Grid>
  );
};
