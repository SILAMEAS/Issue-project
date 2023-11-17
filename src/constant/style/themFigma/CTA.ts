import {FONT_TYPE} from '@/constant/NGContant';
import {pixelToRem} from '@/utils/common/pxToRem';

export const FigmaCTA = {
  CtaLarge: {
    fontFamily: FONT_TYPE.POPPINS,
    letterSpacing: '1%',
    fontWeight: 500,
    textDecoration: 'none',
    fontSize: pixelToRem(16),
    paragraph: pixelToRem(0),
    lineHeight: pixelToRem(24),
    case: 'original',
  },
  CtaMedium: {
    fontFamily: FONT_TYPE.POPPINS,
    letterSpacing: '1%',
    fontWeight: 600,
    textDecoration: 'none',
    fontSize: pixelToRem(13),
    paragraph: pixelToRem(0),
    lineHeight: pixelToRem(24),
    case: 'original',
  },
  CtaSmall: {
    fontFamily: FONT_TYPE.POPPINS,
    letterSpacing: '1%',
    fontWeight: 600,
    textDecoration: 'none',
    fontSize: pixelToRem(11),
    paragraph: pixelToRem(0),
    lineHeight: pixelToRem(20),
    case: 'original',
  },
};
