import {
  Center,
  Grid,
  GridItem,
  Text,
  Heading,
  HStack,
  VStack,
  Avatar,
  Box,
  Link,
  SimpleGrid,
  useBreakpointValue,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { Url } from "url";
import { getContributors } from "../../requests/github";
import styles from "./contributors.module.css";

export interface ContributorIconProps {
  username: string;
  avatar_url: string;
  html_url: string;
}

const ContributorIcon: React.FC<ContributorIconProps> = ({
  username,
  avatar_url,
  html_url,
  ...props
}: ContributorIconProps) => {
  return (
    <Link isExternal href={html_url}>
      <Box
        as="button"
        borderRadius="20px"
        transition="all 0.5s cubic-bezier(0,.5,.5,1)"
        _hover={{ bg: "#bcb3bb" }}
        w="110px"
        h="150px"
      >
        <Avatar size="xl" name={username} src={avatar_url} />
        <br />
        <Text fontSize="sm">@{username}</Text>
      </Box>
    </Link>
  );
};

export const Contributors = () => {
  const [contributorsList, setContributorsList] = useState([]);
  const height = useBreakpointValue({ xs: null, sm: "100vh" });

  useEffect(() => {
    async function retrieveContributors() {
      const response = await getContributors();
      setContributorsList(response);
    }
    retrieveContributors();
  }, []);

  return (
    <Grid
      alignItems="center"
      justify="center"
      className={styles.contributors}
      h={height}
    >
      <VStack>
        <GridItem>
          <Center>
            <Heading w="70%" textAlign={["center"]}>
              Built by students — for students
            </Heading>
          </Center>
        </GridItem>
        <GridItem>
          <Center>
            <Text w={["100%", "70%"]} textAlign={["center"]}>
              Dialog was developed by University of Toronto students & TAs with
              the goal of creating an effective & easy to use online platform
              for student discussion
            </Text>
          </Center>
        </GridItem>
        <GridItem>
          <SimpleGrid
            columns={[1, 2, 3, 4, 5]}
            rows={3}
            spacingX={"20px"}
            spacingY={"5px"}
            justify="center"
            name="list of contributors"
            color="gray.70"
            borderRadius="40px"
            w="70vw"
            backgroundColor="rgba(128,128,128,0.5)"
            boxShadow="dark-lg"
          >
            {contributorsList.map((contributor, index) => {
              return (
                <GridItem margin="auto" key={index}>
                  <ContributorIcon
                    username={contributor.login}
                    avatar_url={contributor.avatar_url}
                    html_url={contributor.html_url}
                  />
                </GridItem>
              );
            })}
          </SimpleGrid>
        </GridItem>
      </VStack>
    </Grid>
  );
};
