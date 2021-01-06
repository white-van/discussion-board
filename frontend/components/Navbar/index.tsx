import {
  Box,
  Button,
  Flex,
  Heading,
  IconButton,
  Spacer,
  useColorMode,
  useColorModeValue,
  LightMode,
} from "@chakra-ui/react";
import React from "react";
import { FaMoon, FaSun } from "react-icons/fa";

export const Navbar = (): JSX.Element => {
  const { toggleColorMode } = useColorMode();
  const SwitchIcon = useColorModeValue(FaMoon, FaSun);
  const nextMode = useColorModeValue("dark", "light");

  const titleColor = useColorModeValue("white", "white");
  const boxColor = useColorModeValue("#343A40", "#343A40");

  return (
    <Flex w="101%" mb="4" bg={boxColor} boxShadow="lg">
      <Box m="4" color={titleColor}>
        <Heading size="md">Dialog</Heading>
      </Box>
      <Spacer />
      <Box m="1">
        <Button m="1" size="sm" colorScheme="blue">
          Sign Up
        </Button>
        <Button m="1" size="sm" colorScheme="blue">
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
