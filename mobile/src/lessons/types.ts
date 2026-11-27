import type { ComponentType } from 'react';

export type Example = {
  id: string;
  title: string;
  description: string;
  Component: ComponentType;
};

export type Lesson = {
  id: number;
  title: string;
  examples: Example[];
};
