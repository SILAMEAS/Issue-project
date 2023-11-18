export const MessageResponse = {
  errorUnknow: "something wenting worng",
  errorNotFound: "Error not Found",
  errorFound: {
    delete: {
      success: "Delete Success",
      unSuccess: "Delete Failed",
    },
    create: {
      success: "Create Success",
      unSuccess: "Create Failed",
    },
    update: {
      success: "Update Success",
      unSuccess: "Update Failed",
    },
  },
};
export enum StatusForntEnd {
  OPEN = "OPEN",
  IN_PROGRESS = "IN_PROGRESS",
  CLOSE = "CLOSE",
}
export enum NameNavBar {
  Dashboard = "Dashboard",
  ISSUE = "Issues",
}
export const COLOR_THEME_ARRAY = [
  "#7065DF",
  "#AF6107",
  "#D83A30",
  "#D3355D",
  "#D6056A",
  "#486BD9",
  "#187AC1",
  "#147F98",
  "#2C8377",
  "#2A8833",
  "#894242",
  "#75737F",
  "#202020",
];
export const defaultColor = "#D6056A";
export enum FONT_TYPE {
  TAHOMA = "Tahoma",
  POPPINS = "poppins",
  FREDOKA = "fredoka",
  VERDANA_BOLD_ITALIC = "verdana-bold-italic",
  VERDANA_BOLD_BOLD = "verdana-bold",
  VERDANA_BOLD = "verdana",
}
