import React, { useState } from "react";
import styled from "styled-components";
import { TbPlayHandball } from "react-icons/tb";
import logoClub from '../../assets/icons/logo-club.png';
import changeImg from '../../assets/icons/ball.png'
import BurgerButton from './BurgerButton';

export const Header = () => {

  //Manejo del menu hamburguesa
  const [clicked, setClicked] = useState(false);
  const handleClick = () => {
    //cuando esta en estado true lo pasa a estado false, y viceversa
    setClicked(!clicked);
  }

  //Manejo del cambio de imagen de la derecha
  const [hovered, setHovered] = useState(false);

  const handleMouseEnter = () => {
    setHovered(true);
  }

  const handleMouseLeave = () => {
    setHovered(false);
  }

  return (
    <>
      <NavContainer>
        <img src={logoClub} alt="Logo Club" className='logo'/>
        <div className={`links ${clicked ? 'active' : ''}`}>
          <a onClick={handleClick} href="#h">Masculino</a>
          <a onClick={handleClick} href="#h">Femenino</a> 
          <a onClick={handleClick} href="#h">Nosotros</a>
          <a onClick={handleClick} href="#h">Contacto</a>
        </div>
        {hovered ? (
          <img
            src={changeImg}
            alt="Nueva Imagen"
            className="header__logo-ball"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          />
        ) : (
          <TbPlayHandball
            className="header__logo-sport"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          />
        )}
        <div className='burger'>
          <BurgerButton clicked={clicked} handleClick={handleClick}/>
        </div>
        <BgDiv className={`initial ${clicked ? 'active' : ''}`}></BgDiv>
      </NavContainer>
    </>
  );
}

const NavContainer = styled.nav`
  padding: 1rem 3rem;
  background-color: #333;
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 999;
  position: fixed;
  width: 100%;
  a {
    color: #fff;
    text-decoration: none;
    margin-right: 2rem;
    font-size: 1.2em;
    font-weight: 500;
  }
  .logo{
    width: 5rem;
  }
  .header__logo-sport {
    color: #fff;
    font-size: 3em;
  }
  .links {
    position: absolute;
    top: -700px;
    left: -2000px;
    right: 0;
    margin-left: auto;
    margin-right: auto:
    text-aling: center;
    transition: all .5s ease;
    a{
      font-size: 1.2rem;
      margin-top: 1rem;
      display: block;
      color: #fff;
      &:hover {
        color: #30954f;
        transition: .2s ease-in-out;
      }
    }
    @media(min-width: 768px){
      position: initial;
      margin: 0;
      a {
        font-size: 1.2rem;
        color: #fff;
        display: inline;
      }
    }
  }
  .links.active{
    width: 100%;
    display: block;
    position: absolute;
    margin-right: auto;
    margin-right: auto;
    top: 30%;
    left: 0;
    right: 0;
    text-align: center;
    z-index: -1;
    a{
      color: #fff;
      &:hover {
        color: #96c296;
        transition: .2s ease-in-out;
      }
    }
  }
  .burger{
    @media(min-width: 768px){
      display: none;
    }
  }
  .header__logo-ball{
    width: 48px;
    color: #fff;
  }
`

const BgDiv = styled.div`
  position: absolute;
  background-color: #222;
  top: -700px;
  left: -1000px;
  width: 100%;
  height: 100%;
  z-index: -2;
  transition: all .6s ease;

  &.active {
    border-radius: 0 0 80% 0;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`