export interface RequestI {
  id: number;
  type: string;
  employee: string;
  dates?: string;
  amount?: string;
  description?: string;
  status: string;
  submitted: string;
}