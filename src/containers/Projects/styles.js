import styled from 'styled-components';
import bg from '../../assets/bg-min.webp'

export const MainContainer = styled.div`
  display: flex;
    flex-direction: column;
    align-items: center;
    width: 100vw;
    height: 100vh;
    position: absolute;
    z-index: 1;
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
`
export const Close = styled.p`
  color: #e3b943;
  font-weight: bolder;
  font-size: 69px;
  font-family: "VT323", monospace;
  margin: 0;
  position: absolute;
  right: 40px;
  text-shadow: 2px 2px #00bfa8;
  cursor: pointer;
`
export const ProjectsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
`
export const Project = styled.div`
  width: 100%;
`