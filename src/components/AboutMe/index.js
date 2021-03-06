import React from "react";

import { MainContainer, Paragraph } from "./styles";

const AboutMe = () => (
  <MainContainer>
    <Paragraph
      size="22px"
      margin="10px 0"
      spacing="-1px"
      weight="bolder"
      align="center"
    >
      Front end developer based in Mexico City.
    </Paragraph>
    <Paragraph
      align="justify"
      margin="10px 0 0 0"
      font={`"Space Mono", monospace`}
    >
      I'm a bootcamp graduate and Sociology student, I love technology and programming. 
    </Paragraph>
    <Paragraph align="justify" font={`"Space Mono", monospace`}>
      Science fiction, videogames and books lover.
    </Paragraph>
    <Paragraph align="justify" margin="15px 0" font={`"Space Mono", monospace`}>
      Feel free to check out my portfolio, github and resume.
    </Paragraph>
    <Paragraph
      align="center"
      color="#00bfa8"
      weight="bolder"
      font-size="18px"
      margin="10px 0 0 0"
    >
      Avaible for freelance work.
    </Paragraph>
    <Paragraph align="center" font-size="16px" spacing="-1px" margin="15px 0">
      tzupratts@gmail.com
    </Paragraph>
  </MainContainer>
);

export default AboutMe;
