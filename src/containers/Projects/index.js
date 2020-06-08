import React from 'react';

import { MainContainer, Close, ProjectsContainer,Project } from './styles';

const Projects = ({click}) =>  {

  return (
    <MainContainer>
        <Close onClick={click} >x</Close>
      <ProjectsContainer>
        <Project>
          Este es un proyecto
        </Project>
      </ProjectsContainer>
    </MainContainer>
  )
}

export default Projects;
