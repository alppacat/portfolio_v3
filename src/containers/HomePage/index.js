import React, { useState } from "react";
import Typewriter from "typewriter-effect";

import Terminal from "../../components/Terminal";
import TerminalAboutMe from "../../components/AboutMe";
import Projects from "../Projects";

import LinkedIn from "../../assets/icons/icons8-linkedin-circled-50.webp";
import Resume from "../../assets/icons/icons8-resume-50.webp";
import Github from "../../assets/icons/icons8-github-50.webp";
import Portfolio from "../../assets/icons/icons8-portfolio-50.webp";

import {
  MainContainer,
  TitleContainer,
  Quote,
  Subtitle,
  Button,
  Content,
  ContentIcons,
  IconsContainer,
  IconContainer,
  ShakeEffect,
  AboutMeContainer,
  Parragraph,
  AboutMe,
} from "./styles";

function HomePage() {
  const [loading, setLoading] = useState(true);
  const [onTerminal, setOnTerminal] = useState(false);
  const [onProjects, setOnProjects] = useState(false);

  const handleClickAway = () => setOnTerminal(!onTerminal);
  const handleOnProject = () => setOnProjects(!onProjects);

  return (
    <MainContainer>
      {onTerminal && (
        <Terminal click={handleClickAway}>
          <TerminalAboutMe />
        </Terminal>
      )}
      {onProjects && <Projects click={handleOnProject} />}
      <TitleContainer>
        <Typewriter
          onInit={(typewriter) => {
            typewriter
              .typeString("Tzu Pratts")
              .callFunction(() => {
                setLoading(false);
              })
              .pauseFor(2500)
              .start();
          }}
        />
      </TitleContainer>
      {!loading && (
        <Content>
          <Subtitle>Front-end Developer</Subtitle>
          <Quote>
            "Any sufficiently advanced technology is indistinguishable from
            magic" <br /> -Arthur C. Clarke
          </Quote>
          {/* <Button>PRESS TO ENTER</Button> */}
          <IconsContainer>
            <ContentIcons>
              <a
                href="https://www.linkedin.com/in/tzupratts/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Parragraph>LinkedIn</Parragraph>
              </a>
              <IconContainer className="hover">
                <img
                  href="https://www.linkedin.com/in/tzupratts/"
                  target="_blank"
                  src={LinkedIn}
                  alt="Linkedin"
                />
              </IconContainer>
            </ContentIcons>
            <ContentIcons>
              <a href="" rel="noopener noreferrer">
                <Parragraph>Resume</Parragraph>
              </a>
              <IconContainer className="hover">
                <img src={Resume} alt="Resume" />
              </IconContainer>
            </ContentIcons>
            <ContentIcons>
              <a
                href="https://github.com/alppacat"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Parragraph>Github</Parragraph>
              </a>
              <IconContainer className="hover">
                <img
                  href="https://github.com/alppacat"
                  target="_blank"
                  src={Github}
                  alt="Github"
                />
              </IconContainer>
            </ContentIcons>
            {/* <IconContainer onClick={handleOnProject} >
                            <img src={Portfolio} alt="Portfolio" />
                        </IconContainer> */}
          </IconsContainer>
          <AboutMeContainer>
            <ShakeEffect> {">>"}</ShakeEffect>
            <AboutMe onClick={() => setOnTerminal(!onTerminal)}>
              About me
            </AboutMe>
            <ShakeEffect> {"<<"} </ShakeEffect>
          </AboutMeContainer>
        </Content>
      )}
    </MainContainer>
  );
}

export default HomePage;
