import {
  Box,
  Button,
  Flex,
  Heading,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";
import { defineMessages, useIntl } from "react-intl";

import { locales } from "../../content/locale";

const messages = defineMessages({
  heroHeading: {
    id: "heroHeading",
    description: "Hero Heading",
    defaultMessage: locales.en.heroHeading,
  },
  heroText: {
    id: "heroText",
    description: "Hero Message",
    defaultMessage: locales.en.heroText,
  },
  getStartedBtn: {
    id: "getStartedBtn",
    description: "Get Started Button",
    defaultMessage: locales.en.getStartedBtn,
  },
});

export const HeroSection = (): JSX.Element => {
  const { formatMessage } = useIntl();

  return (
    <Flex direction="column" align="center" width="lg" h="50vw">
      <Heading mb={2} align="center" colorScheme="gray">
        {formatMessage(messages.heroHeading, {
          span: function renderSpan(...parts) {
            return (
              <Box as="span" color="blue.500">
                {parts.join("")}
              </Box>
            );
          },
        })}
      </Heading>
      <Text
        mb={8}
        align="center"
        color={useColorModeValue("gray.600", "gray.400")}
      >
        {formatMessage(messages.heroText)}
      </Text>
      <Button colorScheme="blue">
        {formatMessage(messages.getStartedBtn)}
      </Button>
    </Flex>
  );
};
