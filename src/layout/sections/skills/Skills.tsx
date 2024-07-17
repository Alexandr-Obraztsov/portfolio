import React from 'react';
import {FlexWrapper} from "../../../components/FlexWrapper";
import styled from "styled-components";
import {Icon} from "../../../components/icon/Icon";
import {SectionTitle} from "../../../components/SectionTitle";
import {Skill} from "./skill/Skill";

export const Skills = () => {
    return (
        <StyledSkills>
            <SectionTitle>Skills</SectionTitle>
            <FlexWrapper wrap="wrap" justify={"space-evenly"} align={"flex-start"}>
                <Skill iconId={"codeSvg"} title={"html5"} text={""}/>
                <Skill iconId={"cssSvg"} title={"css3"} text={""}/>
                <Skill iconId={"reactSvg"} title={"react"} text={""}/>
                <Skill iconId={"typescriptSvg"} title={"typescript"} text={""}/>
                <Skill iconId={"styledComponentsSvg"} title={"styled components"} text={""}/>
                <Skill iconId={"figmaSvg"} title={'web design'} text={""}/>
            </FlexWrapper>
        </StyledSkills>
    );
};

const StyledSkills = styled.section`
    min-height: 1000px;
    background-color: lightgreen;
`