import styled from 'styled-components';
import bg from '../../assets/bg.jpg'

export const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100vw;
    height: 100vh;
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
    animation: slow .9s 1 0s ease;

    @media(max-width: 769px){
        font-size: 1.5rem;
    }

    @media(max-width: 496px){
        font-size: 1.2rem;
    }
    
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

`
export const Quote = styled.p`
    font-family: "Space Mono", monospace;
    text-align: center;
    color: #008b68;
    text-shadow: none;
    margin-bottom: 6em;
    margin-top: 3em;
    animation: slow .9s 1 0s ease;

    @media(max-width: 769px){
        padding: 0 3rem;
        margin-bottom: 3em;
    }
    

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
    animation: slow .9s 1 0s ease;

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
`