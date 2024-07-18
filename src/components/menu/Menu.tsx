import React from 'react';
import styled from "styled-components";

type MenuPropsType = {
    menuItems: Array<string>
}



export const Menu = (props: {menuItems: Array<string>}) => {
    return (
        <StyledMenu>
            <ul>
                {props.menuItems.map((name, index)=>{
                    return (
                    <li id={index.toString()}><a href="">{name}</a></li>
                    )
                })}
            </ul>
        </StyledMenu>
    );
};

const StyledMenu = styled.nav`
    ul {
        display: flex;
        gap: 30px;
    }
`