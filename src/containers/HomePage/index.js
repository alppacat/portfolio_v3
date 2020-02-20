import React, { useState, useEffect } from 'react';
import Typewriter from "typewriter-effect";

import { MainContainer } from './styles';


function HomePage(){

const [loading, setLoading] = useState(true);

    return(
        <MainContainer>
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
            {
                !loading &&
                <p>"Any sufficiently advanced technology is indistinguishable from magic" <br/> -Arthur C. Clarke</p>
            }
        </MainContainer>
    )
}

export default HomePage;