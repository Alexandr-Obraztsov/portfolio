import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Menu} from "../../../components/menu/Menu";
import {Work} from "./work/Work";
import proj1 from  "../../../assets/images/proj-1.webp";
import proj2 from  "../../../assets/images/proj-2.webp";
const menuItems = ["All", "landing page", "React", "Spa"];

export const Works = () => {
    return (
        <StyledWorks>
            <SectionTitle>Works</SectionTitle>
            <Menu menuItems={menuItems}/>
            <FlexWrapper justify="space-evenly">
                <Work imgSrc={proj1} title="Social Network" description="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit."/>
                <Work imgSrc={proj2} title="Timer" description="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit  ut labore et dolore magna aliqua Ut enim"/>
            </FlexWrapper>
        </StyledWorks>
    );
};




const StyledWorks = styled.section`

`