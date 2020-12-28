import {
  Box,
  Button,
  Flex,
  Heading,
  Spacer,
  Switch,
  useColorMode,
} from "@chakra-ui/react";
import React from "react";

export const Navbar = (): JSX.Element => {
  const { toggleColorMode } = useColorMode();

  return (
    <Flex w="100%" m="2" mb="4">
      <Box p="2">
        <Heading size="md">Dialog</Heading>
      </Box>
      <Spacer />
      <Box>
        <Button mr="4" size="sm">
          Sign Up
        </Button>
        <Button mr="4" size="sm">
          Login
        </Button>
        <Switch color="gray" onChange={() => toggleColorMode()} />
      </Box>
    </Flex>
  );
};
