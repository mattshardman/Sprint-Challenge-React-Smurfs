import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const HeaderWrapper = styled.div`
    box-sizing: border-box;
    width: 100%;
    height: 66px;
    padding: 0 20%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px #ddd solid;
`;

const LinkWrapper = styled.div`
    width: 200px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

function Header() {
    return (
        <HeaderWrapper>
            <h1>Smurf village</h1>
            <LinkWrapper>
                <NavLink 
                    to="/"
                    style={{ textDecoration: 'none', color: 'deepskyblue' }}
                    activeStyle={{ color: 'skyblue' }}
                >
                    Home
                </NavLink>
                <NavLink 
                    to="/smurf-form"
                    style={{ textDecoration: 'none', color: 'deepskyblue' }}
                    activeStyle={{ color: 'skyblue' }}
                >
                    Add smurf
                </NavLink>
            </LinkWrapper>
        </HeaderWrapper>
    );
}

export default Header;