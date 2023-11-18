import { StyleConstant } from "@/constant/style/StyleConstant";
import { $ok } from "@/utils/common/checkValidate";

import { Typography } from "@mui/material";
import Stack from "@mui/material/Stack";
import { IMSTextCom } from "../interfaceComponent";

export const MSText = ({
  text,
  font = "poppins",
  variant,
  myStyle,
  fontWeight,
  component = "span",
  multiLine = false,
  dataMulti,
  propsParentMulti,
  propsChildMulti,
  iconStart,
  iconEnd,
  disable,
  styleTextHaveIcon,
  ...props
}: IMSTextCom) => {
  /** When have Icon **/
  const handleHaveIcon = () => {
    if (!$ok(iconEnd) && !$ok(iconStart)) {
      return (
        <Typography
          component={component}
          sx={{
            color: "black.main",
            ...myStyle,
            opacity: !disable ? 1 : 0.5,
            fontFamily: font,
          }}
          variant={variant}
          fontWeight={fontWeight}
          {...props}
        >
          {text}
        </Typography>
      );
    } else {
      return (
        <Stack
          direction={"row"}
          alignItems={"center"}
          width={"100%"}
          justifyContent={"flex-start"}
          sx={{ ...styleTextHaveIcon }}
        >
          {$ok(iconStart) && iconStart}
          <Typography
            component={component}
            sx={{
              color: "black.main",
              ...myStyle,
              opacity: !disable ? 1 : 0.5,
              fontFamily: font,
            }}
            variant={variant}
            fontWeight={fontWeight}
            {...props}
          >
            {text}
          </Typography>
          {$ok(iconEnd) && iconEnd}
        </Stack>
      );
    }
  };
  return (
    <>
      {multiLine ? (
        <Typography
          sx={{ lineHeight: 1, ...propsParentMulti }}
          component={component}
        >
          {multiLine &&
            dataMulti?.map((i) => (
              <Typography
                key={i}
                sx={{
                  ...StyleConstant.textSmall,
                  fontWeight: "bold",
                  opacity: !disable ? 1 : 0.5,
                  ...propsChildMulti,
                  fontFamily: font,
                }}
              >
                {i}
              </Typography>
            ))}
        </Typography>
      ) : (
        handleHaveIcon()
      )}
    </>
  );
};
