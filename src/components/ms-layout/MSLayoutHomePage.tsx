import { NameNavBar } from "@/constant/Constant";
import { ConstantRoute } from "@/constant/Route";
import { Box, Stack } from "@mui/material";
import { PropsWithChildren } from "react";
import { MSNavBar } from "../ms-navbar/MSNavBar";
interface Ilink {
  label: string;
  href: string;
}
const NavLink: Ilink[] = [
    {
      label: NameNavBar.Dashboard,
      href: ConstantRoute.Home,
    },
    {
      label: NameNavBar.ISSUE,
      href: ConstantRoute.ISSUE.home,
    },
  ];
  
export function MSLayoutHomePage({ children }:Readonly<PropsWithChildren>) {
  return (
    <Stack>
      <MSNavBar/>
      <Box p={4}>
      {children}
      </Box>
    </Stack>
  );
}
