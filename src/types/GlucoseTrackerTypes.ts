
export type SensorReading = {
  session_id: string;
  sqv: number;
  slot: number;
  direction: string;
  date: Date;
  date_string: string;
};

export interface SensorTrackerConfig {
  auth_info: Record<string, string>;
  client?: any;
}

export interface Authinfo {
  email: string;
  pass: string;
}