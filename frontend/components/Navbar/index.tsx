import {
  Box,
  Button,
  Flex,
  Heading,
  IconButton,
  Spacer,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";
import { FaMoon, FaSun } from "react-icons/fa";

export const Navbar = (): JSX.Element => {
  const { toggleColorMode } = useColorMode();
  const SwitchIcon = useColorModeValue(FaMoon, FaSun);
  const nextMode = useColorModeValue("dark", "light");

  return (
    <Flex w="100%" m="2" mb="4">
      <Box m="2">
        <Heading size="md">Dialog</Heading>
      </Box>
      <Spacer />
      <Box>
        <Button
          m="1"
          size="sm"
          variant={useColorModeValue("primary", "primaryDark")}
        >
          Sign Up
        </Button>
        <Button
          m="1"
          size="sm"
          variant={useColorModeValue("primary", "primaryDark")}
        >
          Login
        </Button>
        <IconButton
          size="md"
          fontSize="lg"
          aria-label={`Switch to ${nextMode} mode`}
          variant="ghost"
          color="current"
          margin="1"
          onClick={toggleColorMode}
          icon={<SwitchIcon />}
        />
      </Box>
    </Flex>
  );
};
