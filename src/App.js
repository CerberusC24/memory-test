import React from 'react';
import swal from '@sweetalert/with-react';
import CharacterCard from './components/CharacterCard';
import NavBar from './components/NavBar';
import Wrapper from './components/Wrapper';
import characters from './characters.json';
import './App.css';

class App extends React.Component {

  // set up state and have it keep track of our imported characterList
  state = {
    characterList: characters,
    counter: 0,
    topScore: 0,
  }

  // create method to re-order the array on card click:
  handleClick = (characterID) => {

    // make a copy
    const characterListCopy = [...this.state.characterList];
    console.log(characterListCopy)

    // create a logical flag
    let isCorrect = false;

    // iterate through characterListCopy
    characterListCopy.forEach(character => {
      if (character.id === characterID) {
        if (!character.isClicked) {
          isCorrect = true;
          character.isClicked = true;
        }
      }
    })

    // if isCorrect is true, run logic for increasing point
    if (isCorrect) {

      
      const counter = this.state.counter + 1;
      // increase count by one, check if top score should be updated, and shuffle cards
      this.setState({
        counter: counter,
        topScore: (counter >= this.state.topScore) ? (counter) : (this.state.topScore),
        characterList: characterListCopy.sort(() => .5 - Math.random())
      })
    }
    else if (this.state.topScore === 32) {
      this.setState({
        counter: 0,
        characterList: characterListCopy.sort(() => 0.5 - Math.random())
      })
      swal(
        <div>
          <h1>You Win!</h1>
          <h3>Play Again?</h3>
        </div>
      )
    }
    else {
      // reset characters
      characterListCopy.forEach(character => {
        character.isClicked = false;
      })
      this.setState({
        counter: 0,
        characterList: characterListCopy.sort(() => 0.5 - Math.random())
      })
      swal(
        <div>
          <h1>You Lose!</h1>
          <h3>Continue?</h3>
        </div>
      )
    }
  }

  render() {
    // save ref to friendList in state
    const { characterList } = this.state;

    return (
      <div>
        <NavBar
          counter={this.state.counter}
          topScore={this.state.topScore}>
        </NavBar>

        <h1 className="justify-content-around">Kombatants</h1>

        <Wrapper>
          {
            characterList.map(kombatant => {
              return (
                <CharacterCard
                  key={kombatant.id}
                  image={kombatant.image}
                  id={kombatant.id}
                  handleClick={this.handleClick}
                />
              )
            })
          }
        </Wrapper>
      </div>
    );
  }
}

export default App;