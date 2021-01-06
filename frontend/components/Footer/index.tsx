import {
  Box,
  Button,
  Center,
  Flex,
  Grid,
  GridItem,
  Heading,
  IconButton,
  Spacer,
  Text,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";

import React from "react";

import styles from "./Footer.module.css";

export const Footer = (): JSX.Element => {
  return (
    <footer className={styles.footer} bg="#343A40">
      <Center mx="15">
        <Grid templateColumns="repeat(8, 1fr)" gap={14}>
          <GridItem colSpan={2}>
            <Text align="center" m="4">
              <Heading size="sm" color="gray.500">© 2020 White Van, Inc.</Heading>
              <Text fontSize="xs" color="white">made with ❤ 
              by pizza van</Text>
            </Text>
          </GridItem>
          <Heading align="center"pt="6" fontSize="sm" color="blue.600" >
            Terms
          </Heading>
          <Heading align="center" pt="6" fontSize="sm" color="blue.600">
            Privacy
          </Heading>
          <Heading align="center" pt="6" fontSize="sm" color="blue.600">
            Help
          </Heading>
          <Heading align="center" pt="6" fontSize="sm" color="blue.600">
            API
          </Heading>
          <Heading align="center" pt="6" fontSize="sm" color="blue.600">
            Status
          </Heading>
          <Heading align="center" pt="6" fontSize="sm" color="blue.600" >
            Blog
          </Heading>
        </Grid>
      </Center>

      {/* <a
        href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
        target="_blank"
        rel="noopener noreferrer"
      >
        
      </a> */}
    </footer>
  );
};
