import {
  Avatar,
  Box,
  Center,
  Grid,
  GridItem,
  Heading,
  Link,
  SimpleGrid,
  Text,
  useBreakpointValue,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { defineMessages, useIntl } from "react-intl";

import { locales } from "../../content/locale";
import { ContributorProps, getContributors } from "../../requests/github";

const messages = defineMessages({
  contributorsHeading: {
    id: "contributorsHeading",
    description: "Contributors Heading",
    defaultMessage: locales.en.contributorsHeading,
  },
  contributorsText: {
    id: "contributorsText",
    description: "Contributors Message",
    defaultMessage: locales.en.contributorsText,
  },
});

const ContributorIcon: React.FC<ContributorProps> = ({
  login,
  avatar_url,
  html_url,
}: ContributorProps) => {
  return (
    <Link isExternal href={html_url}>
      <Box
        as="button"
        borderRadius="20px"
        transition="all 0.5s cubic-bezier(0,.5,.5,1)"
        _hover={{ bg: "#bcb3bb" }}
        w="130px"
        h="150px"
      >
        <Avatar size="xl" name={login} src={avatar_url} />
        <br />
        <Text fontSize="sm">@{login}</Text>
      </Box>
    </Link>
  );
};

export const Contributors = (): JSX.Element => {
  const { formatMessage } = useIntl();
  const gradient = useColorModeValue(
    "linear(to-b, #FFFFFF, #2D9CDB)",
    "linear(to-b, #1a202c, #90cdf4)"
  );
  const [contributorsList, setContributorsList] = useState<ContributorProps[]>(
    []
  );
  const height = useBreakpointValue({ xs: null, sm: "100vh" });
  useEffect(() => {
    async function retrieveContributors(): Promise<void> {
      const response = await getContributors();
      setContributorsList(response);
    }
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    retrieveContributors();
  }, []);

  return (
    <Grid
      alignItems="center"
      justify="center"
      bgGradient={gradient}
      w="100vw"
      h={height}
    >
      <VStack>
        <GridItem>
          <Center>
            <Heading w="70%" textAlign={["center"]}>
              {formatMessage(messages.contributorsHeading)}
            </Heading>
          </Center>
        </GridItem>
        <GridItem>
          <Center>
            <Text w={["100%", "70%"]} textAlign={["center"]}>
              {formatMessage(messages.contributorsText)}
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
                    login={contributor.login}
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
