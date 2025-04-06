
import React, { createContext, useState, useContext, useEffect } from "react";
import { toast } from "sonner";

interface User {
  id: string;
  name: string;
  email: string;
}

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (email: string, password: string) => Promise<boolean>;
  signup: (name: string, email: string, password: string) => Promise<boolean>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check if user is already logged in
    const storedUser = localStorage.getItem("airquality-user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setIsLoading(false);
  }, []);

  const login = async (email: string, password: string): Promise<boolean> => {
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // For demo purposes, we'll accept any login with email and password length > 5
      if (email && password.length >= 6) {
        const mockUser = {
          id: Math.random().toString(36).substring(2, 9),
          name: email.split('@')[0],
          email
        };
        
        setUser(mockUser);
        localStorage.setItem("airquality-user", JSON.stringify(mockUser));
        toast.success("Login successful!");
        return true;
      } else {
        toast.error("Invalid credentials");
        return false;
      }
    } catch (error) {
      toast.error("Login failed");
      return false;
    }
  };

  const signup = async (name: string, email: string, password: string): Promise<boolean> => {
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      if (name && email && password.length >= 6) {
        const mockUser = {
          id: Math.random().toString(36).substring(2, 9),
          name,
          email
        };
        
        setUser(mockUser);
        localStorage.setItem("airquality-user", JSON.stringify(mockUser));
        toast.success("Account created successfully!");
        return true;
      } else {
        toast.error("Invalid details provided");
        return false;
      }
    } catch (error) {
      toast.error("Signup failed");
      return false;
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("airquality-user");
    toast.info("Logged out");
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated: !!user,
        isLoading,
        login,
        signup,
        logout
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
