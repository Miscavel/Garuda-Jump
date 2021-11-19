import React, { Component } from 'react';
import { render } from 'react-dom';
import PhaserWrapper from './react/PhaserWrapper';
import Landing from './react/Landing';
import Result from './react/Result';
import './style.css';

interface AppProps {}
interface AppState {
  name: string;
  isLanding: boolean;
  isGameplay: boolean;
  isResult: boolean;
  highscore: number;
  currentScore: number;
}

class App extends Component<AppProps, AppState> {
  constructor(props) {
    super(props);
    this.state = {
      name: 'React',
      isLanding: true,
      isGameplay: false,
      isResult: false,
      highscore: 0,
      currentScore: 0,
    };
  }

  updateHighscore = (highscore) => {
    this.setState({
      highscore: highscore,
    });
  };

  updateCurrentScore = (currentScore) => {
    this.setState({
      currentScore: currentScore,
    });
  };

  goToGameplay = () => {
    this.setState({
      isGameplay: true,
      isLanding: false,
      isResult: false,
    });
  };

  goToResult = () => {
    this.setState({
      isResult: true,
      isGameplay: false,
      isLanding: false,
    });
  };

  goToLanding = () => {
    this.setState({
      isResult: true,
      isGameplay: false,
      isLanding: false,
    });
  };

  isGameplay = () => {
    return this.state.isGameplay;
  };

  getHighscore = () => {
    return this.state.highscore;
  }

  render() {
    const { isLanding, isGameplay, isResult, highscore, currentScore } =
      this.state;

    return (
      <>
        {isLanding && (
          <Landing highscore={highscore} goToGameplay={this.goToGameplay} />
        )}
        {isGameplay && (
          <PhaserWrapper
            isGameplay={this.isGameplay}
            getHighscore={this.getHighscore}
            updateCurrentScore={this.updateCurrentScore}
            updateHighScore={this.updateHighscore}
            goToResult={this.goToResult}
          />
        )}
        {isResult && (
          <Result
            currentScore={currentScore}
            highscore={highscore}
            goToGameplay={this.goToGameplay}
          />
        )}
      </>
    );
  }
}

render(<App />, document.getElementById('root'));
