import { FeedAppBar } from "@/components/feed/feed-app-bar/feed-app-bar";
import { FeedItems } from "@/components/feed/feed-items/feed-Items";
import styles from "../../../app/register/register.module.css";
import { Box } from "@mui/material";

const Feed = () => {
  return (
    <Box className={styles.wrapper}>
      <FeedAppBar />
      <FeedItems />
    </Box>
  );
};

export default Feed;
