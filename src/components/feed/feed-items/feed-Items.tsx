"use client";
import { Grid } from "@mui/system";
import { Paper } from "@mui/material";
import { FeedItem } from "@/components/feed/feed-item/feed-item";
import { feedItemsMocked } from "@/components/feed/feed-items/feed-items-mocked";

export const FeedItems = () => {
  return (
    <Grid container>
      <Paper
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 3,
          width: "100%",
          p: 3,
          borderRadius: 5,
        }}
      >
        {feedItemsMocked.map((feedItem, index) => (
          <FeedItem key={index} item={feedItem} />
        ))}
      </Paper>
    </Grid>
  );
};
