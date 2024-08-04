import React, { createContext, useState } from "react";
import { App, Product } from "./declarations";
import { appMock } from "./mock";

export const AppContext = createContext<[App, any]>([appMock, null])

export default function AppProvider({ children }: { children: React.ReactNode }) {
  const [app, setApp] = useState(appMock)
  return <AppContext.Provider value={[app, setApp]}>
    {children}
  </AppContext.Provider>
}