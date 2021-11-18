import React, { useEffect } from 'react';
import styled from 'styled-components';

interface LandingProps {
  goToGameplay: () => void;
}

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  position: relative;
  background-color: #0B1728;
  background-image: url('https://cdn.jsdelivr.net/gh/Miscavel/Garuda-Jump@master/public/assets/bg-hero-top2.png');
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

const Logo = styled.div`
  width: 80vw;
  height: 17vw;
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
background-image: url('https://cdn.jsdelivr.net/gh/Miscavel/Garuda-Jump@master/public/assets/logo-garuda-jump.png');
`;

const HighscoreTitle = styled.div`
  font-weight: bold;
  font-size: 10vw;
  color: #fff;
`;

const HighscoreText = styled.div`
  font-weight: bold;
  font-size: 15vw;
  color: #fff;
`;

const HeroBot = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  background-image: url('https://cdn.jsdelivr.net/gh/Miscavel/Garuda-Jump@master/public/assets/bg-hero-bot.png');
  width: 100%;
  height: 20vh;
  background-size: cover;
  background-repeat: no-repeat;
`;

const Button = styled.div`
  font-size: 12vw;
  color: #fff;
  background: #EA3953;
  box-shadow: 0 8px #9A0319;
  width: 100%;
  text-align: center;
  border-radius: 8px;
`;

const LogoSponsor = styled.div`
  width: 80vw;
  height: 17vw;
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  background-image: url('https://cdn.jsdelivr.net/gh/Miscavel/Garuda-Jump@master/public/assets/logo-garuda-shopee.png');
`;

const Landing: React.FC<LandingProps> = ({ goToGameplay }) => {
  return (
    <Container>
      <Content>
        <Logo />
        <HighscoreTitle>Highscore</HighscoreTitle>
        <HighscoreText>130</HighscoreText>
        <Button onClick={goToGameplay}>Play</Button>
        <LogoSponsor />
      </Content>
      <HeroBot />
    </Container>
  );
};

export default Landing;
