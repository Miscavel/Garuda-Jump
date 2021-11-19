import React, { useEffect } from 'react';
import styled from 'styled-components';

interface ResultProps {
  goToGameplay: () => void;
}

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  position: relative;
  background-color: #040F23;
  background-image: url('https://cdn.jsdelivr.net/gh/Miscavel/Garuda-Jump@master/public/assets/bg-hero-top3.png');
  background-repeat: no-repeat;
  background-size: contain;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  padding: 32px 64px;
`;

const Gameover = styled.div`
  width: 80vw;
  height: 17vw;
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
background-image: url('https://cdn.jsdelivr.net/gh/Miscavel/Garuda-Jump@master/public/assets/image-gameover.png');
`;

const HighscoreTitle = styled.div`
  font-weight: bold;
  font-size: 9vw;
  color: #fff;
`;

const Button = styled.div`
  font-size: 11vw;
  padding: 12px 0;
  color: #fff;
  background: #EA3953;
  box-shadow: 0 8px #9A0319;
  width: 100%;
  text-align: center;
  border-radius: 8px;
  margin-top: 64px;
`;

const Result: React.FC<ResultProps> = ({ goToGameplay }) => {
  return (
    <Container>
      <Content>
        <Gameover />
        <HighscoreTitle>Your Score: 34</HighscoreTitle>
        <HighscoreTitle>Highscore: 120</HighscoreTitle>
        <Button onClick={goToGameplay}>Play Again</Button>
        <Button onClick={goToGameplay}>Buy Kacang</Button>
        <Button onClick={goToGameplay}>garudahacks.com</Button>
      </Content>
    </Container>
  );
};

export default Result;
