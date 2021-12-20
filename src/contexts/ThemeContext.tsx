import * as React from 'react';
import useLocalStorage from 'hooks/useLocalStorage';

interface themeContextProviderProps {
  children: React.ReactNode;
}

interface themeContextValue {
  isDarkTheme: boolean;
  toggleTheme: () => void;
}

export const ThemeContext = React.createContext<themeContextValue>(
  {} as themeContextValue
);

export const ThemeContextProvider = ({
  children,
}: themeContextProviderProps) => {
  const [isDarkTheme, setDarkTheme] = useLocalStorage<boolean>(
    'darkTheme',
    true
  );

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const toggleTheme = () => {
    setDarkTheme((prevValue: boolean) => !prevValue);
  };

  const provider = React.useMemo<themeContextValue>(
    () => ({
      isDarkTheme,
      toggleTheme,
    }),
    [isDarkTheme, toggleTheme]
  );

  return (
    <ThemeContext.Provider value={provider}>{children} </ThemeContext.Provider>
  );
};

export const useTheme = () => React.useContext(ThemeContext);
