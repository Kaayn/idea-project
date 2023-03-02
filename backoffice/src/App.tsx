import { User } from "firebase/auth";
import { createContext, Dispatch, useReducer } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AuthPage } from "./pages/AuthPage";
import { HomePage } from "./pages/HomePage"

type AuthDataType = {
  user: User | null;

};

export enum ContextAction {
  setUser
}

type Action =
  | {
      type: ContextAction.setUser;
      newValue: User;
    };

type ContextType = {
  data: AuthDataType;
  dispatchData: Dispatch<Action>;
};

const defaultReducerValues: AuthDataType = {
  user: null
};

const defaultContextValues = {
  data: defaultReducerValues,
  dispatchData: () => null,
};

export const AuthDataContext =
  createContext<ContextType>(defaultContextValues);

const reducer = (state: AuthDataType, action: Action) => {
  switch (action.type) {
    case ContextAction.setUser:
      return { ...state, user: action.newValue };

    default:
      return state;
  }
};

export const App = () => {

  const [data, dispatchData] = useReducer(reducer, defaultReducerValues);

  const contextValues = {
    data,
    dispatchData,
  };

  return (
    <BrowserRouter>
      <AuthDataContext.Provider value={contextValues}>
        <Routes>
          <Route path="/" element={<AuthPage />} />
          <Route path="/home" element={<HomePage />} />
        </Routes>
      </AuthDataContext.Provider>
    </BrowserRouter>
  );
};
