import { Box as ChakraBox, useColorModeValue } from "@chakra-ui/react";
import { Center, Icon, Text } from "@chakra-ui/react";
import React from "react";
import { IconType } from "react-icons";

export interface FeatureCardProps {
  /**
   * Box contents
   */
  title: string;
  description: string;
  icon: IconType;
}

/**
 * Primary UI component for user interaction
 */
export const FeatureCard: React.FC<FeatureCardProps> = ({
  title,
  description,
  icon,
}: FeatureCardProps) => {
  return (
    <ChakraBox
      boxShadow="5px 5px 0px 0px #4e93bb, -15px -20px 0px 0px #96cfee"
      width="270px"
      height="200px"
      position="relative"
      bg={useColorModeValue("white.light", "white.dark")}
      rounded="3xl"
      pt="5"
      pl="5"
      pr="5"
    >
      <Center>
        <Icon
          as={icon}
          w={50}
          h={50}
          color={useColorModeValue("primary.light", "primary.dark")}
        />
      </Center>
      <Center>
        <Text
          fontSize="3xl"
          fontWeight="bold"
          color={useColorModeValue("gray.charcoal", "white.light")}
        >
          {title}
        </Text>
      </Center>
      <Center>
        <Text
          fontSize="md"
          align="center"
          color={useColorModeValue("gray.charcoal", "white.light")}
        >
          {description}
        </Text>
      </Center>
    </ChakraBox>
  );
};
