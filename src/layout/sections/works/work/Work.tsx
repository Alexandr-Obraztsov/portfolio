import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../../../../components/FlexWrapper";

type WorkPropsType = {
    imgSrc: string,
    title: string,
    description: string
}

export const Work = (props: WorkPropsType) => {
    return (
        <StyledWork>
            <Image src={props.imgSrc} alt=""/>
            <Title>{props.title}</Title>
            <Description>{props.description}</Description>
            <FlexWrapper>
                <Link>Demo</Link>
                <Link>Code</Link>
            </FlexWrapper>
        </StyledWork>
    );
};

const Image = styled.img`
    width: 100%;
    height: 260px;
    object-fit: cover;
`

const StyledWork =  styled.div`
    height: 443px;
    max-width: 540px;
    width: 100%;
`

const Title = styled.h3`
    
`
const Description = styled.p`

`

const Link = styled.a`

`

