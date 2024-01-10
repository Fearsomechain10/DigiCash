import { Box, Image, Text } from "@chakra-ui/react";
import React from "react";
import btcSrc from "../assets/Digicash.png";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <Box bgColor={"blackAlpha.900"} w={"full"} h={"85vh"}>
      <motion.div
        style={{
          height: "80vh",
        }}
        animate={{
          translateY: "20px",
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      >
        <Image w={"full"} h={"full"} objectFit={"contain"} src={btcSrc} />
      </motion.div>

      <Text
        p={"4"}
        fontSize={"5xl"}
        textAlign={"center"}
        color={"whiteAlpha.700"}
      >
        DigiCash
      </Text>
    </Box>
  );
};

export default Home;
