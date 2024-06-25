import { clsx } from '@nextui-org/shared-utils';
import { Chip } from '@nextui-org/react';

import { COLORS_BY_DIFFICULTY } from '@/config/site';
interface Props {
  category: string;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export function DifficultyBadge({ className, category, size = 'sm' }: Props) {
  return (
    <Chip
      size={size}
      radius='md'
      className={clsx(
        `duration-300 dark:bg-default-200  ${COLORS_BY_DIFFICULTY[category]} `,
        className
      )}
    >
      {category}
    </Chip>
  );
}
