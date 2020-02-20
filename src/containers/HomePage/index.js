import React, { useState, useEffect } from 'react';
import Typewriter from "typewriter-effect";

import { MainContainer, TitleContainer, Quote, Subtitle, Button } from './styles';


function HomePage(){

const [loading, setLoading] = useState(true);

    return(
        <MainContainer>
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
                <React.Fragment>
                    <Subtitle>Front-end Developer</Subtitle>
                    <Quote>"Any sufficiently advanced technology is indistinguishable from magic" <br/> -Arthur C. Clarke</Quote>
                    <Button>PRESS TO ENTER</Button>
                </React.Fragment>
                
            }
        </MainContainer>
    )
}

export default HomePage;