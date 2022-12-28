import { ThemeProvider, createTheme } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import SearchResults from './pages/SearchResults'
import NoMatch from './pages/NoMatch'
import Character from './pages/Character'
import Planet from './pages/Planet'
import Starship from './pages/Starship'
import Vehicle from './pages/Vehicle'
import Film from './pages/Film'

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
})

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="search" element={<SearchResults />} />
          <Route path="people/:id" element={<Character />} />
          <Route path="planets/:id" element={<Planet />} />
          <Route path="starships/:id" element={<Starship />} />
          <Route path="vehicles/:id" element={<Vehicle />} />
          <Route path="films/:id" element={<Film />} />
        </Route>

        <Route path="*" element={<NoMatch />} />
      </Routes>
    </ThemeProvider>
  )
}

export default App
