import {
  Button,
  Flex,
  Heading,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";

export interface PlaygroundProps {
  theme: string;
}

export const Playground: React.FC<PlaygroundProps> = ({
  theme,
}: PlaygroundProps) => {
  return (
    <Flex direction="column" align="center" width="lg">
      <Heading as="h1" mb={2} colorScheme="gray" textAlign="center">
        Hello there
      </Heading>
      <Text
        mb={8}
        align="center"
        color={useColorModeValue("gray.600", "gray.400")}
      >
        Howdy
      </Text>
      <Button variant={useColorModeValue(`${theme}`, `${theme}Dark`)}>
        Sign Up
      </Button>
    </Flex>
  );
};
