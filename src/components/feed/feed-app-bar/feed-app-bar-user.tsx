"use client";
import { Avatar, Menu, MenuItem, Typography } from "@mui/material";
import { Grid } from "@mui/system";
import { useTheme } from "@mui/material/styles";
import React from "react";

const labels = {
  userName: "Stefan Racic",
};
export const FeedAppBarUser = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const theme = useTheme();

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
      <Grid container sx={{ alignItems: "center", gap: 1 }}>
        <Avatar
          sx={{
            backgroundColor: theme.palette.primary.main,
            cursor: "pointer",
          }}
          onClick={handleClick}
        >
          SR
        </Avatar>
        <Typography variant="body1">{labels.userName}</Typography>
      </Grid>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
      >
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem>
      </Menu>
    </>
  );
};
