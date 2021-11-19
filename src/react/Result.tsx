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
  font-size: 6vw;
  padding: 12px 0;   
  width: 100%;
  text-align: center;
  border-radius: 8px;
  margin-top: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-transform: uppercase;
  background: ${(props) =>
    props.shopee ? '#EE4D2D' : props.garudahacks ? '#F5DF4D' : '#EA3953'};
  box-shadow: 0 8px ${(props) =>
    props.shopee ? '#9D2612' : props.garudahacks ? '#9A8707' : '#9A0319'};
  color: ${(props) => (props.garudahacks ? '#0B1728' : '#fff')};
`;

const Sponsor = styled.div`
  width: 35vw;
  height: 17vw;
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  margin-top: 64px;
  background-image: url('https://cdn.jsdelivr.net/gh/Miscavel/Garuda-Jump@master/public/assets/image-sponsor.png');
`;

const Icon = styled.div`
  width: 32px;
  height: 32px;
  margin-right: 12px;  
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  background-image: ${(props) =>
    props.shopee
      ? "url('https://cdn.jsdelivr.net/gh/Miscavel/Garuda-Jump@master/public/assets/icon-shopee.png')"
      : "url('https://cdn.jsdelivr.net/gh/Miscavel/Garuda-Jump@master/public/assets/icon-garudahacks.png')"};
`;

const Result: React.FC<ResultProps> = ({ goToGameplay }) => {
  return (
    <Container>
      <Content>
        <Gameover />
        <HighscoreTitle>Your Score: 34</HighscoreTitle>
        <HighscoreTitle>Highscore: 120</HighscoreTitle>
        <Sponsor />
        <Button onClick={goToGameplay}>Play Again</Button>
        <Button shopee onClick={goToGameplay}>
          <Icon shopee />
          Buy Kacang
        </Button>
        <Button garudahacks onClick={goToGameplay}>
          <Icon garudahacks />
          Garudahacks
        </Button>
      </Content>
    </Container>
  );
};

export default Result;
