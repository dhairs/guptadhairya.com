import { extendTheme } from '@chakra-ui/react';

const config = {
  initialColorMode: 'light',
  useSystemColorMode: true,
  fontFamily: 'Inter'
};

const theme = extendTheme({ config });

export default theme;
