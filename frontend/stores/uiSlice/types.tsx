export interface Snack {
  key: number;
  message: string;
  options: {
    variant: string;
  };
  dismissed: boolean;
}
