import { createContext, useCallback, useState, useContext, useLayoutEffect } from 'react';
import api from '../lib/api';

const SESSION = 'session';

const SessionContext = createContext(null);

let setContextValue = () => {};

export const Provider = ({ children }) => {
  const [state, setState] = useState(getSession());

  useLayoutEffect(() => {
    api.configure({ accessToken: state?.accessToken });
  }, [state])

  setContextValue = useCallback(
    (value) => setState(value),
    [setState]
  );

  return (
    <SessionContext.Provider value={state}>
      {children}
    </SessionContext.Provider>
  );
}

export default function useSession() {
  return useContext(SessionContext);
};

export async function login({ email, password }) {
  const response = await api.login({ email, password });

  if (response.token) {
    const session = {
      accessToken: response.token
    };

    setSession(session);
    setContextValue(session);
  }
}

export async function logout() {
  removeSession();
  setContextValue(undefined);
}

function getSession() {
  return JSON.parse(sessionStorage.getItem(SESSION));
}

function setSession(session) {
  sessionStorage.setItem(SESSION, JSON.stringify(session));
}

function removeSession() {
  sessionStorage.removeItem(SESSION);
}
