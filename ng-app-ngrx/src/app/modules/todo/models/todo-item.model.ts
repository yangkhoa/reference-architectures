export interface TodoItem {
  title: string | null;
  note: string | null;
  priority: PriorityLevel;
  reminder: string | null;
  done: boolean;
}

export enum PriorityLevel {
  None = 0,
  Low = 1,
  Medium = 2,
  High = 3,
}
