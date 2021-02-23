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

  //Method for shuffling drinks
  shuffleDrinks = () => {
    let cocktails = this.state.cocktails;
    for (let i = cocktails.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      let temp = cocktails[i];
      cocktails[i] = cocktails[j];
      cocktails[j] = temp
    }
    this.setState({ cocktails: cocktails })
  };

  //Shuffles drinks when page first loads
  componentDidMount() {
    this.shuffleDrinks();
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
