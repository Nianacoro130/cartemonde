import React from 'react';
import Logo from '../components/Logo';
import Navigation from '../components/Navigation';

const About = () => {
    return (
        <div>
            <Navigation/>
            <Logo/>
            <h1>A propos</h1>
            <br/>
            <p>
                Initialisation d'un project react, affichage des
                cartes des pays du monde avec leurs differents drapeaux
                2021
            </p>
            <br/>
            <p>
                Nianacoro Konaré
            </p>
        </div>
    );
};

export default About;