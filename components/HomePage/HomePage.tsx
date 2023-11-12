'use client';
import { Anchor, Box, Container, Stack, Text, Title, rem } from '@mantine/core';
import { useStyles } from 'tss-react';
import { mq, theme, vars } from '@/lib/theme';
import { CssPropExample } from '../CssPropExample';
import { ClassesExample } from '../ClassesExample';

export const HomePage = () => {
  const { css } = useStyles();

  return (
    <Box component='main' py={rem(100)} maw={rem(theme.other.maxApplicationWidth)} mx='auto'>
      <Container>
        <Title
          className={css({
            [`${mq.xs}`]: {
              ...vars.headings.h2,
            },
          })}
        >
          Mantine V7 using TSS for styling
        </Title>
        <Text>
          This repo can be used as a template for using Mantine V7 in a Nextjs 14 project with{' '}
          <Anchor href='https://docs.tss-react.dev/api/tss-usestyles' target='_blank'>
            TSS
          </Anchor>{' '}
          for styling.
        </Text>
        <Stack mt='xl'>
          <CssPropExample />
          <ClassesExample />
        </Stack>
      </Container>
    </Box>
  );
};
