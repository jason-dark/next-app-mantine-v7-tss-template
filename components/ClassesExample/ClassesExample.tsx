import { Card, Code, Text } from '@mantine/core';
import { tss } from 'tss-react';
import { mq, vars } from '@/lib/theme';

export const ClassesExample = () => {
  const { classes } = useStyles();

  return (
    <Card className={classes.cardWrapper}>
      <Text size='sm'>
        This component is an example of styling using <Code>classes</Code> from{' '}
        <Code>useStyles()</Code>.
      </Text>
    </Card>
  );
};

const useStyles = tss.create(() => ({
  cardWrapper: {
    padding: `${vars.spacing.xl} ${vars.spacing.md}`,
    [`${mq.sm}`]: {
      padding: `${vars.spacing.lg} ${vars.spacing.md}`,
    },
  },
}));
