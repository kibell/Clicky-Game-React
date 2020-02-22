

import React, { Component } from "react";
import AnimeCard from "./components/animeCard";
import Wrapper from "./components/Wrapper";
import Header from "./components/Element";
import animes from "./anime.json";
import "./App.css";

// export default App;


class App extends Component {
  // Setting this.state.cards to the cards json array
  state = {
    animes,
    score: 0,
    highscore: 0
  };

  gameOver = () => {
    if (this.state.score > this.state.highscore) {
      this.setState({highscore: this.state.score}, function() {
        console.log(this.state.highscore);
      });
    }
    this.state.animes.forEach(card => {
      card.count = 0;
    });
    alert(`Game Over :( \nscore: ${this.state.score}`);
    this.setState({score: 0});
    return true;
  }

  clickCount = id => {
    this.state.animes.find((o, i) => {
      if (o.id === id) {
        if(animes[i].count === 0){
          animes[i].count = animes[i].count + 1;
          this.setState({score : this.state.score + 1}, function(){
            console.log(this.state.score);
          });
          this.state.animes.sort(() => Math.random() - 0.5)
          return true; 
        } else {
          this.gameOver();
        }
      }
    });
  }
  // Map over this.state.cards and render a cardCard component for each card object
  render() {
    return (
      <React.Fragment>
      <Header score={this.state.score} highscore={this.state.highscore}>Anime Clicky Game</Header>
      <Wrapper>
        
        {this.state.animes.map(card => (
          <AnimeCard
            clickCount={this.clickCount}
            id={card.id}
            key={card.id}
            image={card.image}
            name={card.name}
            series={card.series}
          />
        ))}
      </Wrapper>
      </React.Fragment>
    );
  }
}

export default App;