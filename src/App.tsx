import { Route, Routes } from 'react-router-dom'
import { Home, Series, Movies } from './pages';
import { useEffect, useState } from 'react';
import { getMovies, getSeries } from './api/apiService';
import { sections } from './constants';

function App() {

  const [isLoading, setIsLoading] = useState(false);
  const [section, setSection] = useState(sections.SERIES);
  const [contentToDisplay, setContentToDisplay] = useState([]);

  useEffect(() => {
    if (section === sections.HOME) {
      setContentToDisplay([]);
      return;
    }
    
    setIsLoading(true);
    
    async function fetchData() {
      try {
        let content;
        
        if (section === sections.SERIES) {
          content = await getSeries();
        } else {
          content = await getMovies();
        }
        
        setContentToDisplay(content);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setIsLoading(false);
      }
    }
  
    fetchData();
  }, [section]);  

  return (
    <Routes>
      <Route path="/" element={ <Home setSection={setSection} />} />
      <Route path="/series" element={ <Series isLoading={isLoading} setSection={setSection} contentToDisplay={contentToDisplay} /> } />
      <Route path="/movies" element={ <Movies isLoading={isLoading} setSection={setSection} contentToDisplay={contentToDisplay} /> } />
    </Routes>
  )
}

export default App
