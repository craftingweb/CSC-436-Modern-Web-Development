import React, { useEffect } from 'react'
import { useState } from 'react'
import SearchBar from './components/SearchBar'
import Movies from './components/Movies'
import movieData from './utils/movies'




//movieData is alias because we exporting by default 
//<> React.fragment instead of div 
function App() {


  
  






  //we gonna create new piece of state, that piece of state will be {movies} that we render. We will update that piece of state any time search piece of state changes.

  const [search, setSearch] = useState('');
  // seardh will be available here and in SearchBar. If state had been created in SearchBar component it would be only accessible in SearchBar component and we could not use it in order to filter movies, because movies in App component
  // if this slice below movie slice it won't work

  // const movies = movieData.filter(movie => {
  //   return movie.title.toUpperCase().includes(search.toUpperCase());
    //because title and what we search different case so we have to make them same with help of toUpperCase()
    // and we looping through whole movie array of objects not looping through only movie.title but we looping through movie and checking if title match our search
    // if it is true we keep it if not we left out from array
    // we have to save somewhere that we returning: const movies
    // then this value we passing in Movies component through prop
    // filter does not modify original array just return condition and we have to assign to variable to get that value
  //})
 
  const [movies, setMovies] = useState([]);
  //creating state to filter by movie length and passing to SearchBar
  const [maxLength, setMaxLength] = useState(0);

  const [ascending, setAscending] = useState(true);
  
  //const length = movieData.filter((item)=>item.length>100) we are not creating new filter for length but adding to title filter and we can skip second filter by using && operator. It will filter by title and by length

  useEffect(() => {
    // useEffect is a cleaner way for listening for event for search component
    //lets make shallow copy of movie data, pass by reference/value; if we do not make clone of movieData we actually update movieData so we have use spread ...
   // const moviesClone = [...movieData];
    // const filteredMovies = moviesClone.filter(movie => {
    //   return movie.title.toUpperCase().includes(search.toUpperCase()) && ([NaN, 0].includes(parseInt(maxLength, 10)) || parseInt(maxLength, 10) >= movie.length)
    // })
      // samething without parseInt (maxLength>0 && maxLength <= movie.length)
      //10 based 10 system
      // parseInt(maxLength,10)>0 -- to check if there is value in there
      // we have to add in useEffect [maxLength] in order to listen
    
    setMovies(movieData.filter(movie => {
      return movie.title.toUpperCase().includes(search.toUpperCase()) && ([NaN, 0].includes(parseInt(maxLength, 10)) || parseInt(maxLength, 10) >= movie.length)
    })).sort((a, b) => {
      if (ascending) {
        return a.length - b.length;
      } else {
        return b.length - a.length;
      }
    });
  }, [search, maxLength, ascending]);
  // useEffect is similar useState same principle listen for chamge and fire code when something happens. The way it workds you pass call back and an array []. Lets say array is variable that you want to listen. And if it is empty array it means when copmonent originally mounts. We actually want to listen for search state [search]
 
  return (
    //you can pass not just variable but functions as well to other comp
    <>
      <SearchBar
        search={search}
        setSearch={setSearch}
        maxLength={maxLength}
        setMaxLength={setMaxLength}
        ascending={ascending}
        setAscending={setAscending}
      /> 
       
      <Movies movies={movies} />
   
      
      {/* {people.sort((a, b) => a.id - b.id).map(task=> 
      <div key={task.id}>
        {task.id}-{task.name}
      </div>
        )
      } */}
      
      
      {/* <div>{people.sort((a,b)=>a.id-b.id)}</div> */}
  </>
  )
}

export default App
