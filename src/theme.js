import {
  defaultTheme,
  aliasColor,
  generateHexAlphaVariants,
} from '@xstyled/styled-components';

export default {
  ...defaultTheme,
  animations: {
    ...defaultTheme.animations,
    backdrop: 'backdrop 1s ease-in-out infinite',
  },
  colors: {
    ...defaultTheme.colors,
    ...generateHexAlphaVariants({
      cardinal: '#CC213D',
      'persian-green': '#18A890',
      'dark-sienna': '#460B15',
    }),
    ...aliasColor('primary', 'cardinal'),
    ...aliasColor('secondary', 'persian-green'),
    ...aliasColor('text-primary', 'dark-sienna'),
  },
};
