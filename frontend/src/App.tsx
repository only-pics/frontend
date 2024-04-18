import { ThemeProvider } from "@/components/theme-provider"
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from "./pages/Layout"
import Home from "./pages/Home"

function App() {

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={
            <Layout
            />
          }>
            <Route path="/" element={<Home />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App