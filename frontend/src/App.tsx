import { ThemeProvider } from "@/components/theme-provider"
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from "./pages/Layout"
import Home from "./pages/Home"
import Profile from "./pages/Profile"
import Feed from "./pages/Feed"

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
            <Route path="/profile" element={<Profile />} />
            <Route path="/feed" element={<Feed />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App