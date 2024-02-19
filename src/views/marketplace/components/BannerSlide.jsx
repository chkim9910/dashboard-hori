import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";
import { Box, Button, Flex, Img, Link, Text } from "@chakra-ui/react";
import topImg from "../../../assets/images/NftBanner1.87062366f75bedd52bd2.png";

export default function BannerSlide() {
  return (
    <>
      <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
        <SwiperSlide>
          <Box
            position={"absolute"}
            zIndex={-1}
            bgImage={topImg}
            w={"100%"}
            h={"100%"}
            bgSize={"cover"}
            borderRadius={"30px"}
          />
          <Box
            py={{ base: "30px", md: "56px" }}
            px={{ base: "30px", md: "64px" }}
          >
            <Text
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
              Enter in this creative world. Discover now the latest NFTs or
              start creating your own!
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
                <Text
                  color={"white"}
                  fontSize={"0.875rem"}
                  fontWeight={"normal"}
                >
                  Watch video
                </Text>
              </Link>
            </Flex>
          </Box>
        </SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
      </Swiper>
    </>
  );
}
