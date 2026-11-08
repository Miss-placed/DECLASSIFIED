import { ReactNode } from 'react';

export const withIntelDescription = (text: string | undefined): ReactNode => text ?? '';
