export interface BriqUser {
  username?: string;
  name: string;
  role: string;
  company: string;
  avatar?: string;
}

export type BriqLoginResult = BriqUser | false;
