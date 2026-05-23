import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';
import pb from '@/lib/pocketbaseClient';

const AuthContext = createContext(null);

export function useAuth() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used inside AuthProvider');
  }

  return context;
}

const getAuthModel = () => pb.authStore.model || null;

const getIsAdmin = (user) => {
  return (
    user?.role === 'admin' ||
    user?.isAdmin === true ||
    user?.collectionName === '_superusers'
  );
};

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(getAuthModel);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;

    const checkAuth = async () => {
      try {
        if (!pb.authStore.isValid) {
          if (isMounted) setCurrentUser(null);
          return;
        }

        try {
          await pb.collection(pb.authStore.model?.collectionName || 'users').authRefresh();
        } catch {
          pb.authStore.clear();
        }

        if (isMounted) {
          setCurrentUser(getAuthModel());
        }
      } catch (error) {
        console.error('Auth check failed:', error);
        pb.authStore.clear();

        if (isMounted) {
          setCurrentUser(null);
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    };

    checkAuth();

    const unsubscribe = pb.authStore.onChange((_token, model) => {
      if (isMounted) {
        setCurrentUser(model || null);
      }
    });

    return () => {
      isMounted = false;
      unsubscribe();
    };
  }, []);

  const login = async (email, password) => {
    const cleanEmail = email?.trim();

    if (!cleanEmail || !password) {
      throw new Error('Email and password required');
    }

    const authData = await pb.collection('users').authWithPassword(cleanEmail, password);
    setCurrentUser(authData.record || pb.authStore.model);
    return authData;
  };

  const signup = async (email, password, passwordConfirm) => {
    const cleanEmail = email?.trim();

    if (!cleanEmail || !password || !passwordConfirm) {
      throw new Error('Email, password and confirm password required');
    }

    const data = {
      email: cleanEmail,
      password,
      passwordConfirm,
      emailVisibility: true,
    };

    const record = await pb.collection('users').create(data);
    await login(cleanEmail, password);

    return record;
  };

  const logout = () => {
    pb.authStore.clear();
    setCurrentUser(null);
  };

  const resetPassword = async (email) => {
    const cleanEmail = email?.trim();

    if (!cleanEmail) {
      throw new Error('Email required');
    }

    return pb.collection('users').requestPasswordReset(cleanEmail);
  };

  const value = useMemo(
    () => ({
      currentUser,
      isAuthenticated: !!currentUser && pb.authStore.isValid,
      isAdmin: getIsAdmin(currentUser),
      login,
      signup,
      logout,
      resetPassword,
      loading,
    }),
    [currentUser, loading]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}