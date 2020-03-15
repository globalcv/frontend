export interface UserState {
  userId: UserId;
  username: string;
  email: string;
  emailconfirmed: boolean;
  rememberMe: boolean;
  token: string | null;
}

export interface AuthResponse {
  data: {
    token: string;
  };
}

export interface LoginCredentials {
  email: string;
  password: string;
}

export interface RegisterCredentials {
  name: string;
  email: string;
  password: string;
}

export type UserId = string | number;

export type FetchUserDataResponse = Promise<AuthResponse> | Promise<false>;
