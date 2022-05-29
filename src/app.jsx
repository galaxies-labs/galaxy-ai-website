import React from "react"
import { Routes, Route } from "react-router-dom"
import Main from "./pages/main"
import Write from "./pages/write"
import { ThemeProvider, createTheme, CssBaseline } from "@mui/material"
import { ColorModeContext } from "./context/colorMode"
import useThemeMode from "./hooks/useThemeMode"
import { darkTheme, lightTheme } from "./constants"

function App() {
  return (
    <div>
      <Routes>
        <Route path='/write' element={<Write />} />
        <Route path='/' element={<Main />} />
      </Routes>
    </div>
  )
}

export default function ThemeApp() {
  const [mode, setMode] = useThemeMode()

  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"))
      },
    }),
    []
  )

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode,
          ...(mode === "light" ? lightTheme : darkTheme),
        },
      }),
    [mode]
  )

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <App />
      </ThemeProvider>
    </ColorModeContext.Provider>
  )
}
