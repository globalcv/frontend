export interface UserState {
  userId: UserId;
  username: string;
  email: string;
  emailconfirmed: boolean;
  rememberMe: boolean;
}

export type UserId = string | number;
