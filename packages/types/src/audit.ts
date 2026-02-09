export interface AuditI {
  id: number;
  user: string;
  action: string;
  target: string;
  timestamp: string;
  details: string;
}