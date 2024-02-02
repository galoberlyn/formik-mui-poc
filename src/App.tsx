import { ThemeProvider } from "@emotion/react"
import RegisterationLayout from "./components/Register"
import { useCustomTheme } from "./hooks/useCustomTheme"

function App() {

  const { theme }  = useCustomTheme();

  return (
    <ThemeProvider theme={theme}>
      <RegisterationLayout />
    </ThemeProvider>
  )
}

export default App
