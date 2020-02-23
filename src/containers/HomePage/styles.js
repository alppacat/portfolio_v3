import styled from 'styled-components';
import bg from '../../assets/bg.jpg'

export const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100vw;
    height: 100vh;
    position: relative;
    background: radial-gradient(
        circle at bottom,
        rgb(139, 0, 91, 0.9),
        rgb(96, 26, 85, 0.9),
        rgb(58, 29, 69, 0.9),
        rgb(30, 24, 44, 0.9),
        rgb(12, 12, 14, 0.9)
      ), url(${bg});
    background-size: cover;
    background-repeat: no-repeat; 

    @media(max-width: 769px){
        min-height: 100vh;
        height: 100%;
    }
`;

export const TitleContainer = styled.div`
    margin-top: 6rem;
    color: #d90474;
    text-shadow: 2px 2px #00bfa8;
    font-size: 9rem;
    font-weight: 900;
    font-family: "VT323", monospace;
    @media(max-width: 769px){
        font-size: 6rem;
    }
    @media(max-width: 496px){
        font-size: 7rem;
        text-align: center;
        margin-top: 3rem;
    }

`
export const Subtitle = styled.p`
    font-size: 3rem;
    font-family: "Space Mono", monospace;
    color: #00bfa8;
    text-shadow: 2px 2px #d90474;
    font-weight: bolder;
    margin: 0;

    @media(max-width: 769px){
        font-size: 1.5rem;
    }

    @media(max-width: 496px){
        font-size: 1.2rem;
    }

`;
export const Content = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center; 
   animation: slow .9s 1 0s ease;
   @keyframes slow{
        0%{
        opacity: 0;
        }
        70%{
            opacity: 0.3;
        }
        80%{
            opacity: 0.5;
        }
        90%{
            opacity: 0.8;
        }
    }
`;
export const Quote = styled.p`
    font-family: "Space Mono", monospace;
    text-align: center;
    color: #008b68;
    text-shadow: none;
    margin-bottom: 3em;
    margin-top: 3em;

    @media(max-width: 769px){
        padding: 0 3rem;
    }
    
    @media(max-width: 375px){
        margin-bottom: 1em;
        font-size: 12px;
    }
    
`
export const Button = styled.div`
    padding: 1.5rem;
    font-size: 1.5rem;
    background-image: linear-gradient(0deg,#e3b943,#e3ca4b,#e2dc56,#deed63,#d9ff74);
    box-shadow: 1px 3px #d90474;
    border-radius: 2rem;
    font-weight: bolder;
    color: #3f1942;
    text-decoration: none;
    font-family: VT323,monospace;
    text-shadow: 2px 2px #00bfa8;

    @media(max-width: 496px){
        margin-bottom: 1rem;
    }
    :hover{
    cursor: pointer;
    color: #3f1942;
    background-image: linear-gradient(
      to bottom,
      #e3b943,
      #e3ca4b,
      #e2dc56,
      #deed63,
      #d9ff74
    );
  }
`

export const IconsContainer = styled.div`
  display: flex;
`
export const IconContainer = styled.a`
  opacity: 0.7;
  margin: 10px;
  padding: 5px;
  cursor: pointer;
  
  :hover {
      opacity: 1;
      animation: hover 1s 1 0s ease-out;
      @keyframes hover{
        0%{
            transform: translateY(-15px);
        }
        100%{
            transform: translateY(-15px);
        }
    }
  }
`
export const ShakeEffect = styled.div`
    font-family: "VT323", monospace;
    color: #d90474;
    text-shadow: 2px 2px #00bfa8;
  
    font-size: 18px;
    font-weight: 900;
    text-decoration: none;
    color: white;
  
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    -moz-background-clip: text;
    -moz-text-fill-color: transparent;
    -ms-background-clip: text;
    -ms-text-fill-color: transparent;
    background-clip: text;
    text-fill-color: transparent;
    background-image: linear-gradient(45deg, #7794ff, #44107a, #ff1361, #fff800);
    -webkit-animation: 0.8s shake infinite alternate;
    animation: 0.8s shake infinite alternate;
  }
  
  @keyframes shake {
    0% {
      transform: skewX(-15deg);
    }
    5% {
      transform: skewX(15deg);
    }
    10% {
      transform: skewX(-15deg);
    }
    15% {
      transform: skewX(15deg);
    }
    20% {
      transform: skewX(0deg);
    }
    100% {
      transform: skewX(0deg);
    }
`;
export const AboutMeContainer = styled.div`
    display: flex;
    align-items: baseline;
    margin-top: 60px;

    @media(max-width: 375px){
        margin-top: 15px;
    }
`;
export const AboutMe = styled.p`
    font-size: 16px;
    font-family: "Space Mono",monospace;
    color: #e3b943;
    margin: 0 10px;
    cursor: pointer;
`;