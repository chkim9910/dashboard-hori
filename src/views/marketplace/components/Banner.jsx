import { Button, Flex, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

import BannerSlide from "./BannerSlide";

export default function Banner() {
  return (
    <Flex
    //   flexDir={"column"}
    //   borderRadius={"30px"}
    //   py={{ base: "30px", md: "56px" }}
    //   px={{ base: "30px", md: "64px" }}
    >
      <BannerSlide />
      {/* <Text
        color={"white"}
        mb={"14px"}
        fontWeight={"bold"}
        fontSize={{ base: "24px", md: "34px" }}
        lineHeight={{ base: "32px", md: "42px" }}
        maxW={{ base: "100%", md: "64%", lg: "46%", lg2: "70%" }}
      >
        Discover, collect, and sell extraordinary NFTs
      </Text>
      <Text
        color={"#E3DAFF"}
        mb={"40px"}
        fontWeight={"medium"}
        fontSize={"1rem"}
        lineHeight={"28px"}
        maxW={{ base: "100%", md: "64%", lg: "40%", lg2: "70%" }}
      >
        Enter in this creative world. Discover now the latest NFTs or start
        creating your own!
      </Text>
      <Flex alignItems={"center"}>
        <Button
          display={"inline-flex"}
          alignItems={"center"}
          borderRadius={"16px"}
          fontWeight={"normal"}
          boxShadow={"45px 76px 113px 7px rgba(112, 144, 176, 0.08)"}
          h={"2.5rem"}
          minW={"2.5rem"}
          px={"27px"}
          py={"20px"}
          mr={"38px"}
          bg={"white"}
          color={"black"}
          fontSize={"14px"}
        >
          Discover now
        </Button>
        <Link>
          <Text color={"white"} fontSize={"0.875rem"} fontWeight={"normal"}>
            Watch video
          </Text>
        </Link>
      </Flex> */}
    </Flex>
  );
}
