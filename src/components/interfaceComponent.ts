import { ButtonProps, SxProps, TypographyProps } from "@mui/material";
import {
  ButtonPropsColorOverrides,
  ButtonPropsVariantOverrides,
} from "@mui/material/Button/Button";
import { OverridableStringUnion } from "@mui/types";
import { ReactNode } from "react";

import { TypographyPropsVariantOverrides } from "@mui/material/Typography/Typography";
import { Variant } from "@mui/material/styles/createTypography";

export interface IMSButtonCom {
  disabled?: boolean;
  onClick?: () => void;
  color?: string[] | string;
  title: string | ReactNode;
  myStyle?: SxProps;
  type?: "button" | "submit" | "reset";
  form?: string;
  variant?: OverridableStringUnion<
    "text" | "outlined" | "contained",
    ButtonPropsVariantOverrides
  >;
  bgColor?: OverridableStringUnion<
    | "inherit"
    | "primary"
    | "secondary"
    | "success"
    | "error"
    | "info"
    | "warning",
    ButtonPropsColorOverrides
  >;
  size?: "small" | "medium" | "large";
  icon?: ReactNode;
  locationIcon?: "start" | "end";
  fontWeight?:
    | "bold"
    | "normal"
    | "lighter"
    | "bolder"
    | Omit<"bold" | "normal" | "lighter" | "bolder", number | string>;
  fontSize?:
    | "12px"
    | "24px"
    | "32px"
    | "64px"
    | Omit<"12px" | "24px" | "32px" | "64px", string>;
  borderStyle?: "dashed" | "solid" | "none";
  borderTop?: number;
  borderBottom?: number;
  borderLeft?: number;
  borderRight?: number;
  borderColor?: string;
  textSx?: SxProps;
  btnProps?: ButtonProps;
}

export interface IMSTextCom extends TypographyProps {
  disable?: boolean;
  iconStart?: ReactNode;
  iconEnd?: ReactNode;
  dataMulti?: string[];
  multiLine?: boolean;
  propsParentMulti?: SxProps;
  propsChildMulti?: SxProps;
  rows?: number;
  text: string | ReactNode;
  font?:
    | "Tahoma"
    | "poppins"
    | "fredoka"
    | "verdana-bold-italic"
    | "verdana-bold"
    | "verdana";
  fontWeight?: "100" | "200" | "300" | "400" | "500" | "600";

  myStyle?: SxProps;
  variant?: OverridableStringUnion<
    Variant | "inherit",
    TypographyPropsVariantOverrides
  >;
  component?: React.ElementType;
  styleTextHaveIcon?: SxProps;
}
