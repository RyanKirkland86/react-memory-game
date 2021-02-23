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
    score: 0,
    highScore: 0,
    clicked: []
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

  //Select drink function
  selectDrink = (id) => {
    let clicked = this.state.clicked;
    let score = this.state.score;
    let highScore = this.state.highScore;

    if (clicked.includes(id)) {
      clicked = [];
      score = 0;
    } else {
      clicked.push(id);
      score += 1;
    }
    if (highScore < score) {
      highScore = score;
    }
    this.setState({ clicked: clicked, score: score, highScore: highScore });
  };

  handleClick = event => {
    event.preventDefault();
    let id = event.target.getAttribute("data-id");
    this.selectDrink(id);
    this.shuffleDrinks();
  };

  render() {
    return (
      <Wrapper>
        <Navbar 
          score = { this.state.score }
          highScore = { this.state.highScore }
        />
        <Header />
        <div className="container row">
          {this.state.cocktails.map(cocktail => (
            <CocktailCard
              id={cocktail.id}
              key={cocktail.id}
              name={cocktail.name}
              image={cocktail.image}
              shuffleDrinks={this.shuffleDrinks}
              handleClick={this.handleClick}
            />
          ))}
        </div>
      </Wrapper>
    );
  }
}

export default App;
