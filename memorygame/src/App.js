import React, { Component } from "react";
import Wrapper from "./components/Wrapper";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import CocktailCard from "./components/CocktailCard";
import cocktails from "./cocktails.json";

class App extends Component {
  // Setting this.state.cocktails to the cocktails json array
  state = {
    cocktails: cocktails,
    // score: score,
    // highScore: highScore,
    // clicked: []
  };

  render() {
    return (
      <Wrapper>
        <Navbar 
          score = { this.state.score }
          highscore = { this.state.highScore }
        />
        <Header />
        <div className="container row">
          {this.state.cocktails.map(cocktail => (
            <CocktailCard
              id={cocktail.id}
              key={cocktail.id}
              name={cocktail.name}
              image={cocktail.image}
            />
          ))}
        </div>
      </Wrapper>
    );
  }
}

export default App;
