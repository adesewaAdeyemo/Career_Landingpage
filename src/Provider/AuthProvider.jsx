import React, { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

export default function AuthProvider({children}) {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const user = localStorage.getItem('user');
        if (user) {
          setUser(JSON.parse(user));
        }
        setLoading(false);
    }, []);

  const signIn = (email, password) => {
    const testUser = { email, id: 1 };
    setUser(testUser);
    localStorage.setItem('user', JSON.stringify(testUser));
  };

  const signOut = () => {
    setUser(null);
    localStorage.removeItem('user');
  };
  return (
    <AuthContext.Provider value={{ user, signIn, signOut, loading }}>
      {!loading && children}
    </AuthContext.Provider>
  );
}
