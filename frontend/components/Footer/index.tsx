import {
  Center,
  Flex,
  GridItem,
  Heading,
  HStack,
  SimpleGrid,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import React from "react";

import styles from "./Footer.module.css";

export const footerLinks = [
  "Terms",
  "Privacy",
  "Help",
  "API",
  "Status",
  "Blog",
];

export const Footer = (): JSX.Element => {
  const verticalOffset = useBreakpointValue({ sm: "", md: "6" });
  const spacing = useBreakpointValue({ xs: 6, sm: 14 });

  return (
    <Flex className={styles.footer}>
      <Center>
        <SimpleGrid columns={[1, 1, 2]}>
          <GridItem align="center" m="4">
            <Heading size="sm" color="gray.500">
              © 2020 White Van, Inc.
            </Heading>
            <Text fontSize="xs" color="white">
              made with ❤ by pizza van
            </Text>
          </GridItem>
          <GridItem>
            <HStack pt={verticalOffset} spacing={spacing}>
              {footerLinks.map((link, index) => {
                return (
                  <Heading
                    key={index}
                    align="center"
                    fontSize="sm"
                    color="blue.600"
                  >
                    {link}
                  </Heading>
                );
              })}
            </HStack>
          </GridItem>
        </SimpleGrid>
      </Center>
    </Flex>
  );
};
