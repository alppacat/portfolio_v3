import React, { useState, useEffect } from 'react';
import Typewriter from "typewriter-effect";

import Terminal from '../../components/Terminal';
import TerminalAboutMe from '../../components/AboutMe';

import LinkedIn from '../../assets/icons/icons8-linkedin-circled-50.png';
import Resume from '../../assets/icons/icons8-resume-50.png';
import Github from '../../assets/icons/icons8-github-50.png';
import Portfolio from '../../assets/icons/icons8-portfolio-50.png'

import { MainContainer, 
    TitleContainer, 
    Quote, 
    Subtitle, 
    Button, 
    Content, 
    IconsContainer, 
    IconContainer, 
    ShakeEffect, 
    AboutMeContainer,
    AboutMe } from './styles';


function HomePage(){

const [loading, setLoading] = useState(true);
const [onTerminal, setOnTerminal] = useState(false);

const  handleClickAway = ()=> setOnTerminal(!onTerminal);

    return(
        <MainContainer>
            {
                onTerminal && <Terminal click={handleClickAway}>
                    <TerminalAboutMe/>
                </Terminal>
            }
            <TitleContainer>
                <Typewriter 
                    onInit={(typewriter) => {
                        typewriter.typeString('Tzu Pratts')
                        .callFunction(()=> {
                            setLoading(false)
                        })
                        .pauseFor(2500)
                        .start();
                    }}
                />
            </TitleContainer>
            {
                !loading &&
                <Content>
                    <Subtitle>Front-end Developer</Subtitle>
                    <Quote>"Any sufficiently advanced technology is indistinguishable from magic" <br/> -Arthur C. Clarke</Quote>
                    {/* <Button>PRESS TO ENTER</Button> */}
                    <IconsContainer>
                        <IconContainer href="https://www.linkedin.com/in/tzupratts/" target="_blank">
                            <img src={LinkedIn} alt="Linkedin"/>
                        </IconContainer>
                        <IconContainer>
                            <img src={Resume} alt="Resume"/>
                        </IconContainer>
                        <IconContainer href="https://github.com/alppacat" target="_blank">
                            <img src={Github} alt="Github" />
                        </IconContainer>
                        <IconContainer>
                            <img src={Portfolio} alt="Portfolio" />
                        </IconContainer>
                    </IconsContainer>
                    <AboutMeContainer>                    
                        <ShakeEffect> {'>>'}</ShakeEffect>
                        <AboutMe onClick={()=> setOnTerminal(!onTerminal)} >About me</AboutMe>
                        <ShakeEffect> {'<<'} </ShakeEffect>
                    </AboutMeContainer>
                </Content>
                
            }
        </MainContainer>
    )
}

export default HomePage;