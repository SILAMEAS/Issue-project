import { MSText } from "@/components/ms-text/MSText";
import { Button } from "@mui/material";
import { IMSButtonCom } from "../interfaceComponent";

export function MSButton({
  borderTop = 1,
  borderBottom = 1,
  borderLeft = 1,
  borderRight = 1,
  title,
  type,
  form,
  bgColor = "primary",
  color = ["white", "white"],
  size,
  variant = "contained",
  borderStyle = "none",
  fontSize = "14px",
  fontWeight,
  borderColor,
  icon = <></>,
  myStyle,
  locationIcon = "start",
  disabled = false,
  onClick,
  textSx,
  btnProps,
}: IMSButtonCom) {
  return (
    <Button
      {...btnProps}
      type={type}
      disabled={disabled}
      onClick={onClick}
      variant={variant}
      color={bgColor}
      form={form}
      sx={{
        textTransform: "none",
        borderTop,
        borderBottom,
        borderRight,
        borderLeft,
        borderStyle,
        borderColor,
        ...myStyle,
      }}
      size={size}
    >
      {locationIcon === "start" && icon}
      {color.length === 0 ? (
        <MSText
          text={title}
          myStyle={{ color: color[0], fontSize, fontWeight, ...textSx }}
        />
      ) : (
        <MSText
          text={title}
          myStyle={{
            color: disabled ? color[0] : color[1],
            fontSize,
            fontWeight,
            ...textSx,
          }}
        />
      )}

      {locationIcon === "end" && icon}
    </Button>
  );
}
