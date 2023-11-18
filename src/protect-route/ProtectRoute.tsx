"use client";
import { PropsWithChildren } from "react";

function ProtectRoute({ children }: Readonly<PropsWithChildren>) {
  return <div>{children}</div>;
}

export default ProtectRoute;
