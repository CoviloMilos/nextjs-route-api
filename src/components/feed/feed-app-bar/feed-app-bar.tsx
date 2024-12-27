"use client";
import { Grid } from "@mui/system";
import { FeedAppBarFilters } from "@/components/feed/feed-app-bar/feed-app-bar-filters";
import { FeedAppBarSearch } from "@/components/feed/feed-app-bar/feed-app-bar-search";
import { FeedAppBarCreatePostButton } from "@/components/feed/feed-app-bar/feed-app-bar-create-post-button";
import { FeedAppBarWelcome } from "@/components/feed/feed-app-bar/feed-app-bar-welcome";
import { FeedAppBarUser } from "@/components/feed/feed-app-bar/feed-app-bar-user";
import { useState } from "react";
import { CreatePostModal } from "@/components/modals/create-post-modal";

export const FeedAppBar = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const handleOpen = () => {
    setModalOpen(true);
  };

  const handleClose = () => {
    setModalOpen(false);
  };

  return (
    <>
      <Grid
        container
        sx={{
          p: 3,
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Grid container sx={{ gap: 3 }}>
          <FeedAppBarWelcome />
          <Grid container sx={{ alignItems: "center", gap: 1 }}>
            <FeedAppBarFilters />
            <FeedAppBarSearch />
            <FeedAppBarCreatePostButton onClick={handleOpen} />
          </Grid>
        </Grid>
        <FeedAppBarUser />
      </Grid>
      <CreatePostModal modalOpen={modalOpen} handleClose={handleClose} />
    </>
  );
};
