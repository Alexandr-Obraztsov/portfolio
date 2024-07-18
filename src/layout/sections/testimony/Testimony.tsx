import React from 'react';
import styled from "styled-components";
import {Icon} from "../../../components/icon/Icon";
import sprite from "../../../assets/images/icons-sprite.svg"
import {SectionTitle} from "../../../components/SectionTitle";
import {Slider} from "../../../components/slider/Slider";
import {FlexWrapper} from "../../../components/FlexWrapper";

export const Testimony = () => {
    return (
        <StyledTestimony>
            <SectionTitle>Testimony</SectionTitle>
            <FlexWrapper align="center" direction="column">
                <Icon iconId='quoteSvg'/>
                <Slider />
            </FlexWrapper>
        </StyledTestimony>
    );
};

const StyledTestimony = styled.section`
    min-height: 615px;
    background-color: lightgreen;
`
