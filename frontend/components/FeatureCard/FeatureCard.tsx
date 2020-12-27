import "./featureCard.module.css";

import { Box as ChakraBox } from "@chakra-ui/react";
import { Center, ChakraProvider, Icon, Text } from "@chakra-ui/react";
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
      bg="white"
      rounded="3xl"
      pt="5"
      pl="5"
      pr="5"
    >
      <Center>
        <Icon as={icon} w={50} h={50} color="brand.100" />
      </Center>
      <Center>
        <Text fontSize="3xl" fontWeight="bold" color="brand.300">
          {title}
        </Text>
      </Center>
      <Center>
        <Text fontSize="md" align="center" color="brand.300">
          {description}
        </Text>
      </Center>
    </ChakraBox>
  );
};
