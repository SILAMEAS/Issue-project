import { $pixelToRem } from "@/utils/common/converter";
import { Switch, SwitchProps } from "@mui/material";
import { styled } from "@mui/material/styles";

export const StyleConstant = {
  line: {
    lineIdentityPage: {
      width: "100%",
      opacity: 0.5,
      borderBottomWidth: 1.5,
      border: "1px solid #E9E9E9",
    },
  },
  box: {
    statusAndDateExpiration: {
      width: "fit-content",
      height: "36px",
      borderRadius: "6px",
      padding: "8px 12px 8px 12px",
      justifyContent: "center",
      alignItems: "center",
      gap: "8px",
    },
    advancedSignature: {
      width: ["100%", "100%", "48%"],
      borderRadius: 1.5,
      display: "flex",
      bgcolor: "white",
      alignItems: "center",
      justifyContent: "space-between",
      cursor: "pointer",
    },
    gridCard: {
      boxShadow: "-1px 0px 1px 10px #00000002 inset",
      backgroundColor: "white",
      borderRadius: "8px",
      padding: "20px",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      height: "140px",
      cursor: "pointer",
      gap: "8px",
    },
    cardIdentity: {
      borderRadius: "8px",
      py: "16px",
      px: "20px",
      gap: "20px",
      bgcolor: "white",
      boxShadow: "0 1px 10px #00000010",
      cursor: "pointer",
    },
  },
  timeLineCircle: {
    mx: 2,
    boxShadow: 0,
    border: 0,
    height: $pixelToRem(40),
    width: $pixelToRem(40),
  },
  timeLineIcon: { ml: $pixelToRem(6), mt: $pixelToRem(5) },
  inputStyleLogin: {
    "& input::placeholder": {
      fontSize: $pixelToRem(12),
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "#E9E9E9",
        borderWidth: "0.1px",
        // background: 'blue',
        height: 40,
        background: "inherit",
      },
      "&:hover fieldset": {
        borderColor: "#E9E9E9",
      },
      "&.Mui-focused fieldset": {
        borderColor: "Primary.main",
        borderWidth: "0.2px",
      },
    },
  },
  inputSelectStyleLogin: {
    "& input::placeholder": {
      fontSize: $pixelToRem(12),
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "#E9E9E9",
        borderWidth: "0.1px",
        // background: 'blue',
        height: 60,
        background: "inherit",
      },
      "&:hover fieldset": {
        borderColor: "#E9E9E9",
      },
      "&.Mui-focused fieldset": {
        borderColor: "Primary.main",
        borderWidth: "0.2px",
      },
    },
  },
  inputField: {
    "& input::placeholder": {
      fontSize: $pixelToRem(12),
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "#E9E9E9",
        borderWidth: "0.1px",
        // background: 'blue',
        height: 40,
        background: "inherit",
      },
      "&:hover fieldset": {
        borderColor: "#E9E9E9",
      },
      "&.Mui-focused fieldset": {
        borderColor: "Primary.main",
        borderWidth: "0.2px",
      },
    },
  },
  root: {
    fontFamily: "consolas, sans-serif",
    textAlign: "center",
    position: "relative",
    width: "50%",
    height: "100%",
  },
  overlay: {
    position: "absolute",
    top: 0,
    right: 30,
    bottom: 0,
    left: 30,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    fontSize: 96,
    color: "#FFFFFF",
    // background: "#FFFFFF33",
    textAlign: "center",
    // This is important to preserve the chart interactivity
    pointerEvents: "none",
  },
  totalLabel: {
    fontSize: 24,
  },
  main: {
    display: "flex",
    width: "100vw",
    height: "100%",
    bgColor: "#f7f7f7",
  },
  left: {
    height: "93vh",
    position: "static",
    top: 0,
    overflowY: "auto",
    overflowX: "hidden",
    "&::-webkit-scrollbar": {
      width: "0.2em",
    },
    "&::-webkit-scrollbar-track": {
      boxShadow: "inset 0 0 6px rgba(0,0,0,0.00)",
      webkitBoxShadow: "inset 0 0 6px rgba(0,0,0,0.00)",
    },
    "&::-webkit-scrollbar-thumb": {
      backgroundColor: "rgba(0,0,0,.3)",
      borderRadius: 10,
    },
  },
  timeLine: {
    height: "50vh",
    position: "static",
    top: 0,
    overflowY: "auto",
    overflowX: "hidden",
    "&::-webkit-scrollbar": {
      width: "0em",
    },
    "&::-webkit-scrollbar-track": {
      boxShadow: "inset 0 0 6px rgba(0,0,0,0.00)",
      webkitBoxShadow: "inset 0 0 6px rgba(0,0,0,0.00)",
    },
    "&::-webkit-scrollbar-thumb": {
      backgroundColor: "rgba(0,0,0,.1)",
      outline: "1px solid slategrey",
    },
  },
  right: {
    height: "90vh",
    position: "static",
    top: 0,
  },
  textBold: {
    fontSize: "15px",
    fontWeight: "bolder",
  },
  textSmall: {
    color: "grey",
    fontWeight: "semi",
    fontSize: "16px",
  },
  layoutDashboard: {
    height: "100%",
    width: "100vw",
    overflow: "hidden",
    display: "flex",
    justifyContent: "center",
    bgColor: "bg.main",
  },
  locate: {
    center: { alignItems: "center", width: "100%" },
    left: { alignItems: "flex-start", width: "100%" },
    right: { alignItems: "flex-end", width: "100%" },
  },
  button: {
    disableActive: {
      "&:disabled": {
        backgroundColor: "secondary.main",
        color: "grey",
        borderColor: "black.main",
      },
      cursor: "pointer",
      border: 1,

      borderRadius: "5px",
      color: "black",
      px: "20px",
      py: "7px",
    },
    disable: {
      "&:disabled": {
        backgroundColor: "secondary.main",
        color: "grey",
        borderColor: "black.main",
      },
      cursor: "not-allowed",
      border: 1,

      borderRadius: "5px",
      color: "grey",
      px: "20px",
      py: "7px",
    },
    enable: {
      backgroundColor: "primary.main",
      color: "#fff",
      "&:hover": {
        backgroundColor: "primary.dark",
      },
      cursor: "pointer",
      border: 1,

      borderRadius: "5px",
      px: "20px",
      py: "7px",
    },
  },
  scrollDashboardEndUser: {
    width: "100%",
    mb: 2,
    overflowY: "scroll",
    height: "50vh",
    "&::-webkit-scrollbar": {
      width: "0.1rem",
    },
    "&::-webkit-scrollbar-track": {
      boxShadow: "inset 0 0 6px rgba(0,0,0,0.00)",
      webkitBoxShadow: "inset 0 0 6px rgba(0,0,0,0.00)",
    },
    "&::-webkit-scrollbar-thumb": {
      backgroundColor: "grey",
      outline: "1px solid slategrey",
    },
  },
  scrollNormal: {
    "&::-webkit-scrollbar": {
      width: "0.01em",
    },
    "&::-webkit-scrollbar-track": {
      boxShadow: "inset 0 0 6px rgba(0,0,0,0.00)",
      webkitBoxShadow: "inset 0 0 6px rgba(0,0,0,0.00)",
    },
    "&::-webkit-scrollbar-thumb": {
      backgroundColor: "grey",
      outline: "1px solid slategrey",
    },
  },
  scrollNoWidth: {
    "&::-webkit-scrollbar": {
      width: "0.00em",
    },
    "&::-webkit-scrollbar-track": {
      boxShadow: "inset 0 0 6px rgba(0,0,0,0.00)",
      webkitBoxShadow: "inset 0 0 6px rgba(0,0,0,0.00)",
    },
    "&::-webkit-scrollbar-thumb": {
      backgroundColor: "grey",
      outline: "1px solid slategrey",
    },
  },
  DataGrid: {
    /* style of row*/

    ".styleRow": {
      py: 2,
    },
    /* hide outline when focus row in table */
    "&.MuiDataGrid-root .MuiDataGrid-cell:focus-within": {
      bgColor: "green",
      outline: "none !important",
    },
  },
  muiInputOtpTelephone: {
    "& input::placeholder": {
      color: "inherit",
    },
    "& .MuiInputBase-input.MuiOutlinedInput-input": {
      height: "55px",
      width: "60px",
      p: 0,
      // borderColor: 'red',
    },
    "& .MuiOutlinedInput-notchedOutline ": {
      borderColor: "Primary.main", // set your desired color here
      borderWidth: "0.2px",
      "&:focus": {
        borderColor: "red",
      },
    },
  },
  inputStyleField: {
    cursor: "pointer",
    minWidth: "280px",
    borderRadius: "6px",
    p: "7.5px",
    background: "white",
    border: "solid 1px #E9E9E9",
  },
  muiInputOtp: {
    "& .MuiInputBase-input.MuiOutlinedInput-input": {
      height: "55px",
      width: "40px",
      p: 0,
      // borderColor: 'red',
    },
    "& .MuiOutlinedInput-notchedOutline ": {
      borderColor: "Primary.main", // set your desired color here
      borderWidth: "0.2px",
      "&:focus": {
        borderColor: "red",
      },
    },
  },
};
export enum M_size {
  h1 = "24px",
  h2 = "20px",
  h3 = "14px",
  h4 = "10px",
  h5 = "16px",
  h01 = "34px",
  h02 = "25px",
}
export const IOSSwitch = styled((props: SwitchProps) => (
  <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
))(({ theme }) => ({
  width: 42,
  height: 26,
  padding: 0,
  "& .MuiSwitch-switchBase": {
    padding: 0,
    margin: 2,
    transitionDuration: "300ms",
    color: "grey",
    "&.Mui-checked": {
      transform: "translateX(16px)",
      color: "#fff",
      "& + .MuiSwitch-track": {
        backgroundColor:
          theme.palette.mode === "dark" ? "secondary.main" : "primary.main",
        opacity: 1,
        border: 0,
      },
      "&.Mui-disabled + .MuiSwitch-track": {
        opacity: 0.5,
      },
    },
    "&.Mui-focusVisible .MuiSwitch-thumb": {
      color: "#33cf4d",
      border: "6px solid #fff",
    },
    "&.Mui-disabled .MuiSwitch-thumb": {
      color:
        theme.palette.mode === "light"
          ? theme.palette.grey[100]
          : theme.palette.grey[600],
    },
    "&.Mui-disabled + .MuiSwitch-track": {
      opacity: theme.palette.mode === "light" ? 0.7 : 0.3,
    },
  },
  "& .MuiSwitch-thumb": {
    boxSizing: "border-box",
    width: 22,
    height: 22,
  },
  "& .MuiSwitch-track": {
    borderRadius: 26 / 2,
    backgroundColor: theme.palette.mode === "light" ? "#E9E9EA" : "#39393D",
    opacity: 1,
    transition: theme.transitions.create(["background-color"], {
      duration: 500,
    }),
  },
}));

// theme, we will move to theme configuration in the future

export const colorPrimary = "#D6056A";
export const colorPrimaryHover = "#D60599";
export const colorDisable = "#6D676A";

export const colorWhite = "#ffffff";
export const colorBlack = "#000000";
export const colorSuccess = "#1C8752";
