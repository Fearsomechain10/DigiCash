import { Avatar, Box, Stack, VStack, Text } from "@chakra-ui/react";
import React from "react";
import img from "../assets/founder.jpg";

const Footer = () => {
  return (
    <Box
      bgColor={"blackAlpha.900"}
      color={"whiteAlpha.700"}
      minH={"48"}
      px={"16"}
      py={["16", "8"]}
    >
      <Stack
        p={"8"}
        direction={["column", "row"]}
        h={"full"}
        alignItems={"center"}
      >
        <VStack w={"full"} alignItems={["center", "flex-start"]}>
          <Text fontWeight={"bold"}>About Us</Text>
          <Text
            fontSize={"sm"}
            letterSpacing={"widset"}
            textAlign={["center", "left"]}
          >
            We are the best crypto trading app in India, we provide our guidance
            at a very reasonable price.
          </Text>
        </VStack>
        <VStack>
          <Avatar src={img} boxSize={"28"} mt={["4", "0"]} />
          <Text>Founder</Text>
        </VStack>
      </Stack>
    </Box>
  );
};

export default Footer;
