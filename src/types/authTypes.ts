export interface IUser {
  id: string;
  name: string;
  email: string;
  token?: string;
}

export interface ISignInValues {
  email: string;
  password: string;
}

export interface ISignUpValues {
  name: string;
  email: string;
  password: string;
}

export interface TAuthState {
  user: IUser | null;
  isAuthenticated: boolean;
  error: string | null;
  isLoading: boolean;
}

export type TAuthAction =
  | { type: 'loading' }
  | { type: 'rejected'; payload: string }
  | { type: 'signin' | 'signup' | 'user/loaded'; payload: IUser }
  | { type: 'logout' };

export interface TAuthContextType {
  user: IUser | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  signin: (values: ISignInValues) => Promise<void>;
  signup: (values: ISignUpValues) => Promise<void>;
  logout: () => Promise<void>;
  getUser: () => Promise<void>;
}
