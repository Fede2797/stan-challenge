import { Route, Routes } from 'react-router-dom'
import { Home, Series, Movies } from './pages';

function App() {

  return (
    <Routes>
      <Route path="/" element={ <Home />} />
      <Route path="/series" element={ <Series />} />
      <Route path="/movies" element={ <Movies />} />
    </Routes>
  )
}

export default App
