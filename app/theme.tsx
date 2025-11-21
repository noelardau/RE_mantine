import { createTheme } from '@mantine/core';

export const theme = createTheme({
  colors: {
    reny: [
      '#fdf2f2', // 0 - très clair
      '#f9d9d9', // 1
      '#f4b6b6', // 2
      '#ee8e8e', // 3
      '#e86c6c', // 4
      '#d95a5a', // 5 - votre couleur originale
      '#c44b4b', // 6
      '#a83d3d', // 7
      '#8a3030', // 8
      '#6b2525', // 9 - très foncé
    ],
  },
  
  primaryColor: 'reny',
  primaryShade: 5,
});