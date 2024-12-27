"use client";
import { Grid } from "@mui/system";
import {
  Button,
  Divider,
  Drawer,
  Link,
  Tooltip,
  Typography,
  useMediaQuery,
} from "@mui/material";
import {
  AccountBoxOutlined,
  ChevronLeft,
  ChevronRight,
  DynamicFeedOutlined,
  SchoolOutlined,
} from "@mui/icons-material";
import { AffiliationLogos } from "@/components/affiliation-logos/affiliation-logos";
import { makeStyles } from "@mui/styles";
import { useTheme } from "@mui/material/styles";
import { usePathname, useRouter } from "next/navigation";

const useStyles = makeStyles({
  button: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    gap: 8,
    padding: 10,
  },
  buttonClosed: {
    justifyContent: "center",
  },
});

const SidebarButton = ({
  isOpen,
  title,
  icon,
  label,
  url,
}: {
  isOpen: boolean;
  title: string;
  icon: React.ReactNode;
  label: string;
  url: string;
}) => {
  const classes = useStyles();
  const router = useRouter();
  const pathname = usePathname();
  const isActive = pathname === `/dashboard/${url}`;
  const buttonActive: "contained" | "text" = isActive ? "contained" : "text";
  return (
    <Tooltip title={!isOpen && title} placement="right" arrow>
      <Button
        variant={buttonActive}
        classes={{ root: isOpen ? classes.button : classes.buttonClosed }}
        fullWidth
        aria-label={title}
        onClick={() => router.push(url)}
      >
        {icon}
        {isOpen && <Typography variant="body2">{label}</Typography>}
      </Button>
    </Tooltip>
  );
};

export const SIDEBAR_WIDTH = 240;

export const Sidebar = ({
  open,
  setOpen,
  sidebarRef,
}: {
  open: boolean;
  setOpen: (open: boolean) => void;
  sidebarRef: React.MutableRefObject<HTMLDivElement | null>;
}) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <Drawer
      variant="permanent"
      anchor="left"
      open={open}
      hidden={isMobile && !open}
      onClose={() => setOpen(false)}
    >
      <Grid
        container
        flexDirection="column"
        justifyContent="space-between"
        height="100%"
        sx={{
          pt: 3,
          pb: 3,
          pl: 2,
          pr: 2,
        }}
        ref={sidebarRef}
      >
        <Grid container flexDirection="column" gap={3}>
          <Grid container justifyContent="center">
            <Typography variant="h5" color="primary">
              {open ? "YES DO IT" : "YDI"}
            </Typography>
          </Grid>
          <Grid
            container
            flexDirection="column"
            alignItems="flex-start"
            width="100%"
            gap={1}
          >
            <SidebarButton
              isOpen={open}
              title="Feed"
              icon={<DynamicFeedOutlined />}
              label="Feed"
              url="feed"
            />
            <SidebarButton
              isOpen={open}
              title="Profile"
              icon={<AccountBoxOutlined />}
              label="Profile"
              url="profile"
            />
            <SidebarButton
              isOpen={open}
              title="Educations"
              icon={<SchoolOutlined />}
              label="Educations"
              url="educations"
            />
          </Grid>
        </Grid>
        <Grid container flexDirection="column" gap={1}>
          <Grid container justifyContent="Center">
            {open ? (
              <Button
                variant="text"
                onClick={() => setOpen(false)}
                fullWidth
                aria-label="Close"
              >
                <ChevronLeft />
                <Typography variant="body1">Close</Typography>
              </Button>
            ) : (
              <Button
                variant="text"
                onClick={() => setOpen(true)}
                fullWidth
                sx={{ mb: 33 }}
                aria-label="Open"
              >
                <ChevronRight />
              </Button>
            )}
          </Grid>
          {open && <Divider />}
          {open && (
            <Grid container flexDirection="column">
              <Link underline="none" sx={{ cursor: "pointer" }}>
                <Typography variant="body2">Support</Typography>
              </Link>

              <Typography variant="body2">Version 1.0 Beta</Typography>
              <Typography variant="body2">All copyrights reserved.</Typography>
            </Grid>
          )}
          {open && <AffiliationLogos position="column" />}
        </Grid>
      </Grid>
    </Drawer>
  );
};
