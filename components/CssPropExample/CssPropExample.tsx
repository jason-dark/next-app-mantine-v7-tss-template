import { mq, vars } from '@/lib/theme';
import { Card, Code, Text } from '@mantine/core';
import { useStyles } from 'tss-react';

export const CssPropExample = () => {
  const { css } = useStyles();

  return (
    <Card
      className={css({
        padding: `${vars.spacing.xl} ${vars.spacing.md}`,
        [`${mq.sm}`]: {
          padding: `${vars.spacing.lg} ${vars.spacing.md}`,
        },
      })}
    >
      <Text size='sm'>
        This component is an example of styling using the <Code>css</Code> prop.
      </Text>
    </Card>
  );
};
