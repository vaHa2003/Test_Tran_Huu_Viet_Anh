import { createContext, ReactNode, useState } from "react";
import { jwtDecode } from "jwt-decode"; // Correct import
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AxiosInstance from "../api/axiosInstance";

export interface SignInPayload {
  username: string;
}

interface SignInProviderProps {
  children: ReactNode;
}

interface SignInContextType {
  signin: (payload: SignInPayload) => Promise<void>;
  user: string | null;
  getUser: () => string | null;
}

export const SignInContext = createContext<SignInContextType | undefined>(
  undefined
);

const getUser = (): string | null => {
  const token = localStorage.getItem("token");
  if (token) {
    try {
      const decodedToken = jwtDecode<string>(token);
      return decodedToken;
    } catch (error) {
      console.error("Invalid token:", error);
      return null;
    }
  }
  return null;
};

export const SignInProvider = ({ children }: SignInProviderProps) => {
  const [user, setUser] = useState<string | null>(getUser());

  // Sign-in function
  const signin = async (payload: SignInPayload) => {
    try {
      const res = await AxiosInstance.post("/auth/login", payload);

      if (res.data.accessToken) {
        const decodedToken = jwtDecode<string>(res.data.accessToken);
        setUser(decodedToken);

        // Save accessToken to localStorage
        localStorage.setItem("token", JSON.stringify(res.data));
        toast.success("Login successfully", {
          position: "top-right",
          autoClose: 2800,
          closeOnClick: true,
        });
      } else if (res.data.code === 401) {
        toast.error("User not found", {
          position: "top-right",
          autoClose: 2800,
          closeOnClick: true,
        });
      } else {
        console.log(res.data.error);
      }
    } catch (error) {
      console.error("Error during sign-in:", error);
      toast.error("Sign-in failed", {
        position: "top-right",
        autoClose: 2800,
        closeOnClick: true,
      });
    }
  };

  return (
    <SignInContext.Provider value={{ signin, user, getUser }}>
      {children}
    </SignInContext.Provider>
  );
};

export default { SignInContext, SignInProvider };
