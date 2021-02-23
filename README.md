# React Memory Game

## Project:

This is a memory game created using React. When the user arrives on the page they are presented with a random grid of different cocktails to pick from. When they click on a new cocktail, the score increases and the grid randomly reshuffles. If the user clicks the same cocktail twice, they are told they guessed incorrectly and the game reloads but the high score persists.

[Deployed Link](https://ryankirkland86.github.io/react-memory-game/)

![Image](https://github.com/RyanKirkland86/react-memory-game/blob/main/assets/Landing%20Page%20DEMO.gif)

## Technologies Used:

- [HTML](https://developer.mozilla.org/en-US/docs/Web/HTML)
- [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)
- [JavaScript](https://www.javascript.com/)
- [JSON](https://www.json.org/json-en.html)
- [Bootstrap](https://getbootstrap.com/docs/5.0/getting-started/introduction/)
- [React](https://reactjs.org/)
- [Visual Studio Code](https://code.visualstudio.com/)

## Process:

![Image](https://github.com/RyanKirkland86/react-memory-game/blob/main/assets/Navbar%20DEMO%20GIF.gif)

In this example, the navbar is dynamically updating depending on what the user clicks. When the page loads the message in the center says, "Click on a cocktail to begin" with the score and high score both set to zero. As the user clicks through the memory game, correct answers get a message that says, "You guessed correctly!" and the score and high score update accordingly. When the user clicks a cocktail they've already had before, they get a message that says, "You guessed incorrectly!" and the game reloads with the score set to zero but the high score remains. Code as follows:

```javascript
state = {
    cocktails: cocktails,
    score: 0,
    highScore: 0,
    clicked: [],
    message: "Click on a cocktail to begin",
  };
//===============================================
selectDrink = (id) => {
    let clicked = this.state.clicked;
    let score = this.state.score;
    let highScore = this.state.highScore;
    let message = this.state.message;

    if (clicked.includes(id)) {
      clicked = [];
      score = 0;
      message = "You guessed incorrectly!"
    } else {
      clicked.push(id);
      score += 1;
      message = "You guessed correctly!"
    }
    if (highScore < score) {
      highScore = score;
    }
    this.setState({ 
        clicked: clicked, 
        score: score, 
        highScore: highScore, 
        message: message 
    });
};

```

------------------------------------------------

![Image](https://github.com/RyanKirkland86/react-memory-game/blob/main/assets/shuffleDrinks%20DEMO%20GIF.gif)

In this example, every time a cocktail is clicked, the grid of drinks reshuffles. This happens when the page loads and whenever a drink is clicked, whether or not the answer is correct.

```javascript
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

```

## Deployed Link:

[Deployed Link](https://ryankirkland86.github.io/react-memory-game/)

## Authors:

- Ryan Kirkland
- [GitHub](https://github.com/RyanKirkland86)
- [LinkedIn](https://www.linkedin.com/in/ryan-kirkland-619942200/)
- [Contributors](https://bootcamp.berkeley.edu/coding/)

## License:

This project is licensed under the MIT License.

## Acknowledgements:

Thank you to UCB Extension for the help with this project.