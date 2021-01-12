import { Box, SimpleGrid, Text, useColorModeValue } from "@chakra-ui/react";
import React from "react";
import { BiPalette } from "react-icons/bi";
import { FaUniversity } from "react-icons/fa";
import { ImWrench } from "react-icons/im";
import { IoAccessibility } from "react-icons/io5";
import { RiCodeSSlashLine } from "react-icons/ri";
import { RiOpenSourceFill } from "react-icons/ri";
import { defineMessages, useIntl } from "react-intl";

import { locales } from "../../content/locale";
import { FeatureCard } from "../FeatureCard/FeatureCard";

const messages = defineMessages({
  featuresHeading: {
    id: "featuresHeading",
    description: "Features Heading",
    defaultMessage: locales.en.featuresHeading,
  },
  feature1: {
    id: "feature1",
    description: "Feature 1 Title",
    defaultMessage: locales.en.feature1,
  },
  featureMsg1: {
    id: "featureMsg1",
    description: "Feature 1 Description",
    defaultMessage: locales.en.featureMsg1,
  },
  feature2: {
    id: "feature2",
    description: "Feature 2 Title",
    defaultMessage: locales.en.feature2,
  },
  featureMsg2: {
    id: "featureMsg2",
    description: "Feature 2 Description",
    defaultMessage: locales.en.featureMsg2,
  },
  feature3: {
    id: "feature3",
    description: "Feature 3 Title",
    defaultMessage: locales.en.feature3,
  },
  featureMsg3: {
    id: "featureMsg3",
    description: "Feature 3 Description",
    defaultMessage: locales.en.featureMsg3,
  },
  feature4: {
    id: "feature4",
    description: "Feature 4 Title",
    defaultMessage: locales.en.feature4,
  },
  featureMsg4: {
    id: "featureMsg4",
    description: "Feature 4 Description",
    defaultMessage: locales.en.featureMsg4,
  },
  feature5: {
    id: "feature5",
    description: "Feature 5 Title",
    defaultMessage: locales.en.feature5,
  },
  featureMsg5: {
    id: "featureMsg5",
    description: "Feature 5 Description",
    defaultMessage: locales.en.featureMsg5,
  },
  feature6: {
    id: "feature6",
    description: "Feature 6 Title",
    defaultMessage: locales.en.feature6,
  },
  featureMsg6: {
    id: "featureMsg6",
    description: "Feature 6 Description",
    defaultMessage: locales.en.featureMsg6,
  },
});

export const FeaturesList = (): JSX.Element => {
  const { formatMessage } = useIntl();
  const icons = [
    BiPalette,
    ImWrench,
    FaUniversity,
    IoAccessibility,
    RiCodeSSlashLine,
    RiOpenSourceFill,
  ];

  return (
    <div>
      <Box
        w="100%"
        h="100%"
        bg={useColorModeValue("primary.light", "primary.light")}
        p={10}
      >
        <Text
          fontSize="3xl"
          align="center"
          colorScheme="gray"
          fontWeight="bold"
        >
          {formatMessage(messages.featuresHeading)}
        </Text>
        <br></br>
        <br></br>
        <SimpleGrid columns={{ sm: 2, md: 3 }} spacing={20}>
          {icons.map((icon, index) => {
            return (
              <FeatureCard
                key={index}
                title={formatMessage(messages[`feature${index + 1}`])}
                description={formatMessage(messages[`featureMsg${index + 1}`])}
                icon={icon}
              />
            );
          })}
        </SimpleGrid>
      </Box>
    </div>
  );
};
