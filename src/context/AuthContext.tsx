'use client';

import {
  getUserApi,
  logoutApi,
  signinApi,
  signupApi,
} from '@/services/api/authServise';
import {
  ISignInValues,
  ISignUpValues,
  TAuthAction,
  TAuthContextType,
  TAuthState,
} from '@/types/authTypes';
import { useRouter } from 'next/router';
import React, {
  createContext,
  useContext,
  useEffect,
  useReducer,
  ReactNode,
} from 'react';
import toast from 'react-hot-toast';
import { AxiosError } from 'axios'; // Import AxiosError

const AuthContext = createContext<TAuthContextType>({} as TAuthContextType);

const initialState: TAuthState = {
  user: null,
  isAuthenticated: false,
  error: null,
  isLoading: true,
};

function authReducer(state: TAuthState, action: TAuthAction): TAuthState {
  switch (action.type) {
    case 'loading':
      return {
        ...state,
        isLoading: true,
      };
    case 'rejected':
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    case 'signin':
    case 'signup':
    case 'user/loaded':
      return {
        ...state,
        user: action.payload,
        isAuthenticated: true,
        isLoading: false,
        error: null,
      };
    case 'logout':
      return {
        ...state,
        user: null,
        isAuthenticated: false,
        isLoading: false,
        error: null,
      };
    default:
      throw new Error('Unknown action!');
  }
}

export default function AuthProvider({ children }: { children: ReactNode }) {
  const router = useRouter();

  const [{ user, isAuthenticated, isLoading }, dispatch] = useReducer(
    authReducer,
    initialState
  );

  async function signin(values: ISignInValues) {
    dispatch({ type: 'loading' });
    try {
      const {
        data: { message, user },
      } = await signinApi(values);
      dispatch({ type: 'signin', payload: user });
      toast.success(message);
      router.push('/profile');
    } catch (err) {
      const error =
        (err as AxiosError<{ message: string }>)?.response?.data?.message ||
        'An error occurred during sign-in.';
      dispatch({ type: 'rejected', payload: error });
      toast.error(error);
    }
  }

  async function signup(values: ISignUpValues) {
    dispatch({ type: 'loading' });
    try {
      const {
        data: { message, user },
      } = await signupApi(values);
      dispatch({ type: 'signup', payload: user });
      toast.success(message);
      router.push('/profile');
    } catch (err) {
      const error =
        (err as AxiosError<{ message: string }>)?.response?.data?.message ||
        'An error occurred during sign-up.';
      dispatch({ type: 'rejected', payload: error });
      toast.error(error);
    }
  }

  async function getUser() {
    dispatch({ type: 'loading' });
    try {
      const {
        data: { user },
      } = await getUserApi();
      dispatch({ type: 'user/loaded', payload: user });
    } catch (err) {
      const error =
        (err as AxiosError<{ message: string }>)?.response?.data?.message ||
        'Failed to fetch user data.';
      dispatch({ type: 'rejected', payload: error });
    }
  }

  async function logout() {
    try {
      await logoutApi();
      dispatch({ type: 'logout' });
      router.push('/');
    } catch (err) {
      const error =
        (err as AxiosError<{ message: string }>)?.response?.data?.message ||
        'Failed to logout.';
      toast.error(error);
    }
  }

  useEffect(() => {
    getUser();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated,
        isLoading,
        signin,
        signup,
        logout,
        getUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth(): TAuthContextType {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
