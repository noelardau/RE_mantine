import { createTheme } from '@mantine/core';

export const theme = createTheme({

 
  colors: {
  
   reny: [
  "oklch(97% 0.03 27.325)",   // 0
  "oklch(94% 0.06 27.325)",   // 1
  "oklch(88% 0.11 27.325)",   // 2
  "oklch(80% 0.17 27.325)",   // 3
  "oklch(71% 0.22 27.325)",   // 4
  "oklch(57.7% 0.245 27.325)", // 5 ← TA COULEUR EXACTE
  "oklch(50% 0.245 27.325)",   // 6
  "oklch(44% 0.24 27.325)",    // 7
  "oklch(38% 0.23 27.325)",    // 8
  "oklch(32% 0.22 27.325)"     // 9
]
  },

  primaryColor: 'reny',
  primaryShade: 5,     // ou 6 selon ton goût, 5 est plus lumineux
});
