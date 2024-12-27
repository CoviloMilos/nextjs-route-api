"use client";
import { Typography, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { Grid } from "@mui/system";
import { useEffect } from "react";

const label = {
  yesDoIt: "YES DO IT",
};

export const LoadingScreen = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("/api/users", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: "miloscovilons+dev@gmail.com",
            password: "Password!23",
            repeatPassword: "Password!23",
            userType: "individual",
            firstName: "Milos",
            lastName: "Covilo",
            country: "Serbia",
            city: "Belgrade",
          }),
        });
        if (!response.ok) {
          throw new Error(`Error: ${response.statusText}`);
        }

        console.log(await response.json());
      } catch (err: unknown) {
        const errorMessage = err instanceof Error ? err.message : "Unknown error";
        console.log(errorMessage);
      }
    }

    fetchData();
  }, []);

  return (
    <Grid
      container
      justifyContent='center'
      alignItems='center'
      sx={{
        height: "100vh",
        width: "100vw",
        background: "linear-gradient(0deg, rgb(3, 98, 76, 0.3), rgb(3, 98, 76, 0.3)), url(/images/loading-screen.png)",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}>
      <Grid>
        <Typography
          variant='h1'
          color={theme.palette.common.white}
          fontWeight={900}
          fontSize={isMobile ? 48 : 140}
          sx={{ textTransform: "uppercase" }}>
          {label.yesDoIt}
        </Typography>
      </Grid>
    </Grid>
  );
};
