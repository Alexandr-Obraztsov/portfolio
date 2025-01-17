import React from 'react';
import {Header} from "./layout/header/Header";
import {Main} from "./layout/sections/main/Main";
import {Skills} from "./layout/sections/skills/Skills";
import {Works} from "./layout/sections/works/Works";
import {Testimony} from "./layout/sections/testimony/Testimony";

function App() {
    return (
        <>
            <Header/>
            <Main/>
            <Skills/>
            <Works/>
            <Testimony/>
        </>
    );
}

export default App;
