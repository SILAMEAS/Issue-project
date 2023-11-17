

import { COLOR_THEME_ARRAY, defaultColor } from '@/constant/Constant';
import { InputBase, Stack, Theme, alpha, styled } from '@mui/material';
import { PaletteOptions, createTheme } from '@mui/material/styles';

declare module '@mui/material/styles' {
  interface Palette {
    buttonLogin: Palette['primary'];
    buttonNewProject: Palette['primary'];
    Text2: Palette['primary'];
    bg: Palette['primary'];
    black: Palette['primary'];
    boxModel: Palette['primary'];
    blue: Palette['primary'];
    whiteColor: Palette['primary'];
    buttonWhite: Palette['primary'];
    Primary: Palette['primary'];
    Black: Palette['primary'];
    DarkGrey: Palette['primary'];
    Grey: Palette['primary'];
    LightGray: Palette['primary'];
    White: Palette['primary'];
    OffWhite: Palette['primary'];
    Danger: Palette['primary'];
    Success: Palette['primary'];
    Info: Palette['primary'];
    Warning: Palette['primary'];
    Dark: Palette['primary'];
    Light: Palette['primary'];
    Placeholder: Palette['primary'];
    ColorDisabled: Palette['primary'];
    ColorHover: Palette['primary'];
    Color10: Palette['primary'];
    Color35: Palette['primary'];
    Color50: Palette['primary'];
    Color100: Palette['primary'];
    Color250: Palette['primary'];
    Color950: Palette['primary'];
    BlueGray: Palette['primary'];
  }
  interface PaletteOptions {
    buttonLogin: PaletteOptions['primary'];
    buttonNewProject: PaletteOptions['primary'];
    Text2: PaletteOptions['primary'];
    bg: PaletteOptions['primary'];
    boxModel: PaletteOptions['primary'];
    black: PaletteOptions['primary'];
    blue: PaletteOptions['primary'];
    whiteColor: PaletteOptions['primary'];
    buttonWhite: PaletteOptions['primary'];
    Primary: PaletteOptions['primary'];
    Black: PaletteOptions['primary'];
    DarkGrey: PaletteOptions['primary'];
    Grey: PaletteOptions['primary'];
    LightGray: PaletteOptions['primary'];
    White: PaletteOptions['primary'];
    OffWhite: PaletteOptions['primary'];
    Danger: PaletteOptions['primary'];
    Success: PaletteOptions['primary'];
    Info: PaletteOptions['primary'];
    Warning: PaletteOptions['primary'];
    Dark: PaletteOptions['primary'];
    Light: PaletteOptions['primary'];
    Placeholder: PaletteOptions['primary'];
    ColorDisabled: PaletteOptions['primary'];
    ColorHover: PaletteOptions['primary'];
    Color10: PaletteOptions['primary'];
    Color35: PaletteOptions['primary'];
    Color50: PaletteOptions['primary'];
    Color100: PaletteOptions['primary'];
    Color250: PaletteOptions['primary'];
    Color950: PaletteOptions['primary'];
    BlueGray: PaletteOptions['primary'];
  }
  interface BreakpointOverrides {
    xs: true; // removes the `xs` breakpoint

    sm: true;
    md: true;
    lg: true;
    xl: true;
    xxl: true; // adds the `mobile` breakpoint
  }
}
declare module '@mui/material/Button' {
  interface ButtonPropsColorOverrides {
    buttonWhite: true;
    black: true;
    buttonLogin: true;
    buttonNewProject: true;
    disableButton: true;
  }
}

export const light: Theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1441,
      xxl: 2300,
    },
  },
  typography: {
    fontFamily: 'Poppins',
  },
  palette: {
    mode: 'light',
    Primary: {
      main: defaultColor,
      contrastText: '#FFFFFF',
    },
    Black: {
      main: '#000000',
      dark: '#A9A9A9',
    },
    black: {
      main: '#000000',
      dark: '#A9A9A9',
    },
    DarkGrey: {
      main: '#676767',
    },
    Grey: {
      main: '#BABABA',
    },
    LightGray: {
      main: '#E9E9E9',
    },
    White: {
      main: '#FFFFFF',
    },
    OffWhite: {
      main: '#F0F2F5',
    },
    Danger: {
      // main: '#CE0500',
      main: COLOR_THEME_ARRAY[3],
    },
    Success: {
      main: '#197B4A',
    },
    Info: {
      main: '#0065E0',
    },
    Warning: {
      main: '#D14900',
    },
    Dark: {
      main: '#000000',
    },
    Light: {
      main: '#525050',
    },
    Placeholder: {
      main: '#767676',
    },
    ColorDisabled: {
      main: '#CE0500',
    },
    ColorHover: {
      main: 'rgba(0,0,0,0.20)',
    },
    Color10: {
      main: 'rgba(255,255,255,0.98)',
    },
    Color35: {
      main: 'rgba(255,255,255,0.93)',
    },
    Color50: {
      main: 'rgba(255,255,255,0.90)',
    },
    Color100: {
      main: 'rgba(255,255,255,0.80)',
    },
    Color250: {
      main: 'rgba(255,255,255,0.50)',
    },
    Color950: {
      main: 'rgba(0,0,0,0.90)',
    },
    BlueGray: {
      main: '#EDF2FA',
    },
    //================================================
    boxModel: {
      main: '#E83977',
    },
    blue: {main: '#0065E0', dark: '#0065E0', light: '#EDF4FD'},
    info: {
      main: defaultColor,
      light: '#F7CDE1',
    },
    secondary: {
      main: '#F0F1F3',
      dark: '#FAFBFE',
    },
    bg: {
      main: '#F0F2F5',
    },

    Text2: {
      main: '#71717A',
      dark: '#F0F2F5',
    },
    buttonNewProject: {
      main: '#E83977',
      dark: '#121232',
      light: '#29A8FF',
      contrastText: '#FFFFFF',
    },
    buttonWhite: {
      main: '#FFFFFF',
      dark: '#ccc',
      light: '#29A8FF',
      contrastText: '#FFFFFF',
    },
    buttonLogin: {
      main: '#121232',
      dark: '#121232',
      light: '#29A8FF',
      contrastText: '#FFFFFF',
    },
    whiteColor: {
      main: '#FFFFFF',
      dark: 'rgba(255, 255, 255, 0.98);',
      light: 'rgba(255, 255, 255, 0.99);',
    },
  },
});
export const dark: any = createTheme({
  typography: {
    fontFamily: 'MyCustomFont, Arial, sans-serif',
  },
  palette: {
    mode: 'dark',
    Primary: {
      main: defaultColor,
      contrastText: '#FFFFFF',
    },
    Black: {
      main: '#000000',
      dark: '#A9A9A9',
    },
    primary: {
      main: defaultColor,
      contrastText: '#FFFFFF',
    },
    black: {
      main: '#000000',
      dark: '#A9A9A9',
    },
    DarkGrey: {
      main: '#676767',
    },
    Grey: {
      main: '#BABABA',
    },
    LightGray: {
      main: '#E9E9E9',
    },
    White: {
      main: '#FFFFFF',
    },
    OffWhite: {
      main: '#F0F2F5',
    },
    Danger: {
      main: '#CE0500',
    },
    Success: {
      main: '#197B4A',
    },
    Info: {
      main: '#0065E0',
    },
    Warning: {
      main: '#D14900',
    },
    Dark: {
      main: '#000000',
    },
    Light: {
      main: '#525050',
    },
    Placeholder: {
      main: '#767676',
    },
    ColorDisabled: {
      main: '#CE0500',
    },
    ColorHover: {
      main: 'rgba(0,0,0,0.20)',
    },
    Color10: {
      main: 'rgba(255,255,255,0.98)',
    },
    Color35: {
      main: 'rgba(255,255,255,0.93)',
    },
    Color50: {
      main: 'rgba(255,255,255,0.90)',
    },
    Color100: {
      main: 'rgba(255,255,255,0.80)',
    },
    Color250: {
      main: 'rgba(255,255,255,0.50)',
    },
    Color950: {
      main: 'rgba(0,0,0,0.90)',
    },
    BlueGray: {
      main: '#EDF2FA',
    },
    //================================================
    info: {
      main: '#E83977',
      light: '#F7CDE1',
    },
    blue: {main: '#ffff', dark: '#FAFBFE'},

    boxModel: {
      main: '#E83977',
    },
    secondary: {
      main: '#F0F1F3',
      dark: '#717582',
    },
    bg: {
      main: '#FEF3F7',
    },
    Text2: {
      main: '#71717A',
      dark: '#71717A',
    },
    buttonNewProject: {
      main: '#121232',
      dark: '#121232',
      light: '#29A8FF',
      contrastText: '#FFFFFF',
    },
    buttonWhite: {
      main: '#FFFFFF',
      dark: '#FFFFFF',
      light: '#29A8FF',
      contrastText: '#FFFFFF',
    },
    buttonLogin: {
      main: '#121232',
      dark: '#121232',
      light: '#29A8FF',
      contrastText: '#FFFFFF',
    },
    whiteColor: {main: '#0065E0', dark: '#0065E0', light: '#EDF4FD'},
  },
});

export const BootstrapInput = styled(InputBase)(({theme}) => ({
  'label + &': {
    marginTop: theme.spacing(3),
  },
  '& .MuiInputBase-input': {
    borderRadius: 4,
    position: 'relative',
    backgroundColor: theme.palette.mode === 'light' ? '#fcfcfb' : '#2b2b2b',
    border: '1px solid #ced4da',
    fontSize: 16,
    width: 'auto',
    padding: '10px 12px',
    transition: theme.transitions.create([
      'border-color',
      'background-color',
      'box-shadow',
    ]),
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:focus': {
      boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
      borderColor: theme.palette.primary.main,
    },
  },
}));

export const resetTheme: Omit<PaletteOptions, 'Primary'> = {
  Black: {
    main: '#000000',
    dark: '#A9A9A9',
  },
  black: {
    main: '#000000',
    dark: '#A9A9A9',
  },
  DarkGrey: {
    main: '#676767',
  },
  Grey: {
    main: '#BABABA',
  },
  LightGray: {
    main: '#E9E9E9',
  },
  White: {
    main: '#FFFFFF',
  },
  OffWhite: {
    main: '#F0F2F5',
  },
  Danger: {
    // main: '#CE0500',
    main: COLOR_THEME_ARRAY[3],
  },
  Success: {
    main: '#197B4A',
  },
  Info: {
    main: '#0065E0',
  },
  Warning: {
    main: '#D14900',
  },
  Dark: {
    main: '#000000',
  },
  Light: {
    main: '#525050',
  },
  Placeholder: {
    main: '#767676',
  },
  ColorDisabled: {
    main: '#CE0500',
  },
  ColorHover: {
    main: 'rgba(0,0,0,0.20)',
  },
  Color10: {
    main: 'rgba(255,255,255,0.98)',
  },
  Color35: {
    main: 'rgba(255,255,255,0.93)',
  },
  Color50: {
    main: 'rgba(255,255,255,0.90)',
  },
  Color100: {
    main: 'rgba(255,255,255,0.80)',
  },
  Color250: {
    main: 'rgba(255,255,255,0.50)',
  },
  Color950: {
    main: 'rgba(0,0,0,0.90)',
  },
  BlueGray: {
    main: '#EDF2FA',
  },
  //================================================
  boxModel: {
    main: '#E83977',
  },
  blue: {main: '#0065E0', dark: '#0065E0', light: '#EDF4FD'},
  info: {
    main: '#D6056A',
    light: '#F7CDE1',
  },
  secondary: {
    main: '#F0F1F3',
    dark: '#FAFBFE',
  },
  bg: {
    main: '#F0F2F5',
  },

  Text2: {
    main: '#71717A',
    dark: '#F0F2F5',
  },
  buttonNewProject: {
    main: '#E83977',
    dark: '#121232',
    light: '#29A8FF',
    contrastText: '#FFFFFF',
  },
  buttonWhite: {
    main: '#FFFFFF',
    dark: '#ccc',
    light: '#29A8FF',
    contrastText: '#FFFFFF',
  },
  buttonLogin: {
    main: '#121232',
    dark: '#121232',
    light: '#29A8FF',
    contrastText: '#FFFFFF',
  },
  whiteColor: {
    main: '#FFFFFF',
    dark: 'rgba(255, 255, 255, 0.98);',
    light: 'rgba(255, 255, 255, 0.99);',
  },
};

export const Center = styled(Stack)(() => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
}));
export const VStack = styled(Stack)(() => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
}));
export const HStack = styled(Stack)(() => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'row',
}));
export const Text = styled('span')(() => ({
  color: '#000000',
  variant: 'subtitle',
  fontWeight: 600,
}));
