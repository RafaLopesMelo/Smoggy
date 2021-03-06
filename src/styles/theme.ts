import { theme, DefaultTheme } from '@chakra-ui/core';

const customTheme: DefaultTheme = {
    ...theme,
    fonts: {
        body: 'Roboto, system-ui, sans-serif',
        heading: 'Roboto, system-ui, sans-serif',
        mono: 'Mento, monospace'
    },
};

export default customTheme;
