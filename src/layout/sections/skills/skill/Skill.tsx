import React from 'react';
import {Icon} from "../../../../components/icon/Icon";
import styled from "styled-components";

type SkillPropsType = {
    iconId: string,
    title: string,
    text?: string
}


export const Skill = (props : SkillPropsType) => {
    return (
        <StyledSkill>
            <Icon iconId={props.iconId}/>
            <SkillTitle>{props.title}</SkillTitle>
            <SkillText>{props.text || "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim"}</SkillText>
        </StyledSkill>
    );
};

const StyledSkill = styled.div`
    max-width: 30%;
    
    border: 1px solid black;
    
`

const SkillTitle = styled.h3``

const  SkillText = styled.p`
`