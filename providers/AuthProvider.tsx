import { IPayLoadLogIn, useLogIn } from "@/hooks/useLogIn";
import { setAuthorizationHeader } from "@/utils/setAuthorizationHeader";
import { setCookie, deleteCookie, getCookie } from "cookies-next";
import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import toast from "react-hot-toast";

export const USER_TOKEN = "USER_TOKEN";

type TLogin = (
  variables: IPayLoadLogIn,
  options?: {
    onSuccess?: () => void;
    onError?: () => void;
    onSettled?: () => void;
  },
) => void;

interface IAuthContext {
  user: any;
  setUser: Dispatch<SetStateAction<any>>;
  saveUserToken: (token: string) => void;
  deleteUserToken: () => void;
  login: TLogin;
  getUserToken: () => string | undefined;
  isLoadingLogin: boolean;
}

const AuthContext = createContext<IAuthContext>({
  user: null,
  setUser: () => {},
  saveUserToken: () => {},
  deleteUserToken: () => {},
  login: () => {},
  getUserToken: () => "",
  isLoadingLogin: false,
});

const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const { mutate: mutateLogin, isPending: isLoadingLogin } = useLogIn();

  const [user, setUser] = useState();

  const saveUserToken = (token: string) => {
    setCookie(USER_TOKEN, token);
  };

  const deleteUserToken = () => {
    deleteCookie(USER_TOKEN);
  };

  const getUserToken = () => {
    return getCookie(USER_TOKEN);
  };

  const login: TLogin = (values: IPayLoadLogIn, options) => {
    mutateLogin(values, {
      onSuccess: ({ data: dataResponse }) => {
        saveUserToken(dataResponse.jwt);
        setAuthorizationHeader(dataResponse.jwt);
        options?.onSuccess && options?.onSuccess();
      },
      onError: () => {
        toast.error("Datos invalidos!");
      },
    });
  };

  useEffect(() => {
    const userToken = getUserToken();
    if (userToken) {
      setAuthorizationHeader(userToken);
    }
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        saveUserToken,
        deleteUserToken,
        login,
        getUserToken,
        isLoadingLogin,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const value = useContext(AuthContext);

  return value;
};

export default AuthProvider;
