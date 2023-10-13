export * from '@mantine/core';

declare module '@mantine/core' {
  export interface MantineThemeOther {
    maxApplicationWidth: number;
  }
}
