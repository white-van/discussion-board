import { Box, Flex, Link, Heading, MenuItems } from "@chakra-ui/react";
import { Button } from "../Button/Button";
import React, { useState } from "react";

export interface NavbarProps {
  /**
   * Button contents
   */
  /**
   * Optional click handler
   */
  onClick?: () => void;
}
/**
 * Primary UI component for user interaction
 */

export const Navbar: React.FC<NavbarProps> = ({ ...props }: NavbarProps) => {
  const [show, setShow] = useState(false);
  const handleToggle = () => setShow(!show);
  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      padding="1.5rem"
      color="black"
    >
      <Flex align="center" mr={5}>
        <Heading as="h1" size="lg">
          <Link to="/">Hello</Link>
        </Heading>
      </Flex>

      <Box display={{ sm: "block", md: "none" }} onClick={handleToggle}>
        <svg
          fill="white"
          width="12px"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>Menu</title>
          <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
        </svg>
      </Box>

      <Box
        display={{ sm: show ? "block" : "none", md: "block" }}
        width={{ sm: "full", md: "auto" }}
        mt={{ base: 4, md: 0 }}
        alignItems="center"
      ></Box>
    </Flex>
  );
};
