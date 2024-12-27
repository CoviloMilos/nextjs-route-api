"use client";
import { Sidebar, SIDEBAR_WIDTH } from "@/components/sidebar/sidebar";
import { ReactNode, useEffect, useRef, useState } from "react";
import { Box, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { MobileAppbar } from "@/components/appbar/mobile-appbar";

export const DashboardLayout = ({ children }: { children: ReactNode }) => {
  const [open, setOpen] = useState(false);
  const sidebarRef = useRef<HTMLDivElement | null>(null);
  const [width, setWidth] = useState<number>(SIDEBAR_WIDTH);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  useEffect(() => {
    if (sidebarRef.current) {
      setWidth(sidebarRef.current?.clientWidth ?? 0);
    }
  }, [open]);

  return (
    <>
      {isMobile && <MobileAppbar open={open} setOpen={setOpen} />}
      <Sidebar open={open} setOpen={setOpen} sidebarRef={sidebarRef} />
      <Box sx={{ pl: !isMobile ? `${width}px` : 0 }}>{children}</Box>
    </>
  );
};
