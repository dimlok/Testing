import React from "react";
import styled from "styled-components";
import { router } from "../routers";
import NavItem from "../NavItem";

const NavContainer = styled.div``;
export default function Navigation() {
  return (
    <NavContainer>
      <NavItem to={router.Home} marked>
        Home
      </NavItem>
      <NavItem to={router.Aboud}>Aboud</NavItem>
      <NavItem to={router.Contact}>Contact</NavItem>
    </NavContainer>
  );
}
