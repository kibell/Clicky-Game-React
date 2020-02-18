import React,{useState} from "react";
import {
  Wrapper,
  AnimeCard,
  Element

} from './components';

import anime from "./anime.json";

// const [anime, setanime] = useState(0);

const App = () => {
  const [animeList, setanimeList] = useState(anime)
  return (
    <React.Fragment>
      
    <Element>
    </Element>
        
    

    <Wrapper>
      {animeList.map(anime => (
        <AnimeCard 
        id ={anime.id}
        name ={anime.name}
        image={anime.image}
        series={anime.series}
      />
        
     


      ))}
      
     
    </Wrapper>
    </React.Fragment>

  );
}

export default App;
