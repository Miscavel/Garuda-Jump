import React, { Component } from 'react';
import { render } from 'react-dom';
import PhaserWrapper from './src/react/PhaserWrapper';
import Landing from './src/react/Landing';
import './style.css';

interface AppProps {}
interface AppState {
  name: string;
  isLanding: boolean;
  isGameplay: boolean;
  isResult: boolean;
}

class App extends Component<AppProps, AppState> {
  constructor(props) {
    super(props);
    this.state = {
      name: 'React',
      isLanding: true,
      isGameplay: false,
      isResult: false,
    };
  }

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

  render() {
    const { isLanding, isGameplay, isResult } = this.state;

    return (
      <>
        {isLanding && <Landing goToGameplay={this.goToGameplay} />}
        {isGameplay && <PhaserWrapper />}
      </>
    );
  }
}

render(<App />, document.getElementById('root'));
