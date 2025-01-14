import React from "react";
import Link from "next/link";
import { Button } from "@mantine/core";
import styled from "styled-components";
import { IoArrowForward } from "react-icons/io5";
import { JSONCrackLogo } from "./JsonCrackLogo";

const StyledNavbarWrapper = styled.div`
  z-index: 3;
  transition: background 0.2s ease-in-out;
`;

const StyledNavbar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin: 0 auto;
  padding: 12px 24px;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);

  @media only screen and (max-width: 768px) {
    padding: 16px 24px;
  }
`;

const Left = styled.div`
  width: 100%;
`;

const Right = styled.div`
  display: flex;
  gap: 16px;
`;

export const Navbar = () => {
  return (
    <StyledNavbarWrapper className="navbar">
      <StyledNavbar>
        <Left>
          <JSONCrackLogo />
          <Button
            ml="lg"
            component="a"
            href="https://marketplace.visualstudio.com/items?itemName=AykutSarac.jsoncrack-vscode"
            target="_blank"
            variant="subtle"
            color="black"
            radius="md"
            visibleFrom="sm"
            size="md"
          >
            VS Code
          </Button>
          <Button
            component={Link}
            prefetch={false}
            href="/#pricing"
            variant="subtle"
            color="black"
            radius="md"
            visibleFrom="sm"
            size="md"
          >
            Pricing
          </Button>
          <Button
            component={Link}
            prefetch={false}
            href="/docs"
            variant="subtle"
            color="black"
            radius="md"
            visibleFrom="sm"
            size="md"
          >
            Docs
          </Button>
          <Button
            component={Link}
            prefetch={false}
            href="/#faq"
            variant="subtle"
            color="black"
            radius="md"
            visibleFrom="sm"
            size="md"
          >
            FAQ
          </Button>
        </Left>
        <Right>
          <Button
            variant="default"
            component="a"
            href="https://app.jsoncrack.com/sign-in"
            radius="lg"
            visibleFrom="sm"
            size="md"
            fw={600}
          >
            Sign in
          </Button>
          <Button
            color="brightBlue"
            component={Link}
            prefetch={false}
            href="/#pricing"
            visibleFrom="sm"
            radius="lg"
            size="md"
            fw={600}
            rightSection={<IoArrowForward />}
          >
            Start for free
          </Button>
        </Right>
      </StyledNavbar>
    </StyledNavbarWrapper>
  );
};
