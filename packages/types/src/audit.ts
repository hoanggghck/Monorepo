export const AUDIT_ACTION = {
  CREATE_DEPARTMENT: 1,
  APPROVE_LEAVE: 2,
  UPDATE_PERMISSION: 3,
  SCHEDULE_WORKFLOW: 4,
  CREATE_USER: 5,
  UPDATE_POLICY: 6,
  SUBMIT_EXPENSE: 7,
  UPDATE_WORKFLOW: 8,
} as const;
export interface AuditI {
  id: number;
  user: string;
  action: number; // dùng number như bạn yêu cầu
  target: string;
  timestamp: string;
  details: string;
}
