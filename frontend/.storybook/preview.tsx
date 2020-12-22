import {
  ChakraProvider,
  useColorMode,
  useColorModeValue,
  Flex,
  IconButton,
} from "@chakra-ui/react";
import * as React from "react";
import { FaMoon, FaSun } from "react-icons/fa";

const ColorModeToggleBar = () => {
  const { toggleColorMode } = useColorMode();
  const SwitchIcon = useColorModeValue(FaMoon, FaSun);
  const nextMode = useColorModeValue("dark", "light");

  return (
    <Flex justify="flex-end">
      <IconButton
        size="md"
        fontSize="lg"
        aria-label={`Switch to ${nextMode} mode`}
        variant="ghost"
        color="current"
        marginLeft="2"
        onClick={toggleColorMode}
        icon={<SwitchIcon />}
      />
    </Flex>
  );
};

const withChakra = (StoryFn: Function) => (
  <ChakraProvider>
    <ColorModeToggleBar />
    <StoryFn />
  </ChakraProvider>
);

export const decorators = [withChakra];

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
};
