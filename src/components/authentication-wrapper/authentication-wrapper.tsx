"use client";
import { ReactNode } from "react";
import { Grid } from "@mui/system";
import { Typography, useMediaQuery } from "@mui/material";
import { useRouter } from "next/navigation";
import { AffiliationLogos } from "@/components/affiliation-logos/affiliation-logos";
import { useTheme } from "@mui/material/styles";

const label = {
  yesDoIt: "YES DO IT",
};
export const AuthenticationWrapper = ({
  children,
}: {
  children: ReactNode;
}) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const router = useRouter();
  return (
    <Grid
      container
      sx={{
        backgroundImage: "url(/images/authentication-background.png)",
        p: 3,
        overflow: "hidden",
      }}
      width="100%"
      minHeight="100vh"
    >
      <Grid container width="100%">
        <Grid container sx={{ width: "100%" }} justifyContent="space-between">
          <Grid>
            <Typography
              variant="h4"
              color="primary"
              fontWeight={900}
              onClick={() => router.push("/")}
              sx={{ cursor: "pointer" }}
            >
              {label.yesDoIt}
            </Typography>
          </Grid>
          {!isMobile && <AffiliationLogos />}
        </Grid>
        <Grid container width="100%" height="100%" justifyContent="center">
          {children}
        </Grid>
      </Grid>
      {isMobile && (
        <Grid container>
          <AffiliationLogos />
        </Grid>
      )}
    </Grid>
  );
};
