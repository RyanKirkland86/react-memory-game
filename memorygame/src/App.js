import React, { Component } from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
// import CocktailCard from "./components/CocktailCard";
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
      <div className="container-fluid">
        <Navbar />
        <Header />
      </div>
    );
  }
}

export default App;
