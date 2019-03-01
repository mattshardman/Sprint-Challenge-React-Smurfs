import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import styled from 'styled-components';

const HeaderWrapper = styled.div`
    box-sizing: border-box;
    position: fixed;
    background: #fff;
    width: 100%;
    height: 66px;
    padding: 0 20%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px #ddd solid;
    box-shadow: 0 1px 1px rgba(0,0,0,.1);
`;

const LinkWrapper = styled.div`
    width: 200px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const LogoWrapper = styled.div`
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
`

function Header() {
    return (
        <HeaderWrapper>
            <Link to="/" style={{ textDecoration: 'none' }}>
                <LogoWrapper>
                    <img src="https://i.pinimg.com/originals/af/2d/8a/af2d8a40c0fa454a713b2a6d5f55e524.png" alt="" height={60}/>
                    <h1 style={{ margin: 0, marginLeft: 20, color: 'deepskyblue' }}>Smurf village</h1>
                </LogoWrapper>
            </Link>
           
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