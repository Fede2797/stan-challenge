import { Route, Routes } from 'react-router-dom'
import { Home, Series, Movies } from './pages';
import { useEffect, useState } from 'react';
import { getMovies } from './api/apiService';

function App() {

  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    getMovies();
  }, [])
  

  return (
    <Routes>
      <Route path="/" element={ <Home />} />
      <Route path="/series" element={ <Series isLoading={isLoading}/>} />
      <Route path="/movies" element={ <Movies isLoading={isLoading}/>} />
    </Routes>
  )
}

export default App
