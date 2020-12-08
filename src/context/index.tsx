import React from 'react'

export type AppProviderProps = {
    children: React.ReactNode
};

export type AppContextPropTypes = {
    accessToken: string | undefined;
    setAccessToken?(_: string): void;
};

export const AppContext = React.createContext<AppContextPropTypes>({
  accessToken: undefined,
  setAccessToken (_: string) {}
})

export const AppProvider = ({ children }: AppProviderProps) => {
  const [accessToken, setAccessToken] = React.useState<string | undefined>(undefined)

  return (
        <AppContext.Provider
            value={{
              accessToken,
              setAccessToken: setAccessToken
            }}>
            {children}
        </AppContext.Provider>
  )
}

export const useApp = () => React.useContext(AppContext)
export default useApp
