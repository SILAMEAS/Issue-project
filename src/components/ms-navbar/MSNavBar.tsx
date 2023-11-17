"use client";
import { NameNavBar } from "@/constant/Constant";
import { ConstantRoute } from "@/constant/Route";
import { Button, Stack } from "@mui/material";
import { usePathname, useRouter } from "next/navigation";
import { FaBug } from "react-icons/fa";
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
export function MSNavBar() {
  const currentPathname = usePathname();
  const router = useRouter();
  return (
      <Stack spacing={2} direction={"row"}>
        <Button onClick={() => {}} sx={{ color: "black" }}>
          <FaBug />
        </Button>
        {NavLink.map((item) => (
          <Button
            key={item.label}
            sx={{ color: "black" }}
            onClick={() => {
              router.push(item.href);
            }}
            style={{ fontWeight: currentPathname === item.href ? 600 : 500 }}
          >
            {item.label}
          </Button>
        ))}
      </Stack>
  );
}
