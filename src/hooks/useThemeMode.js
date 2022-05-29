import { useCallback, useEffect, useState } from "react"

export default function useThemeMode() {
  const getInitialMode = useCallback(() => {
    let theme = window.localStorage.getItem("theme")
    if (theme !== "dark" && theme !== "light") {
      const { matches } = window.matchMedia("(prefers-color-scheme: dark)")
      theme = matches ? "dark" : "light"
    }
    return theme
  }, [])

  const [theme, setTheme] = useState(getInitialMode)

  const toggleTheme = useCallback(() => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"))
  }, [])

  useEffect(() => {
    window.localStorage.setItem("theme", theme)
  }, [theme])

  return [theme, toggleTheme]
}
