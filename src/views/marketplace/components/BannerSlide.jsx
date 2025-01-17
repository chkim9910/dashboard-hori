import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";
import { Box, Button, Flex, Img, Link, Text } from "@chakra-ui/react";
import fstImg from "../../../assets/images/NftBanner1.87062366f75bedd52bd2.png";
import sndImg from "../../../assets/images/NftBanner2.png";
import trdImg from "../../../assets/images/NftBanner3.png";
import styled from "styled-components";

export default function BannerSlide() {
  return (
    <>
      <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
        <SwiperSlide>
          <Box
            position={"absolute"}
            zIndex={-1}
            bgImage={fstImg}
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
        <SwiperSlide>
          <Box
            position={"absolute"}
            zIndex={-1}
            bgImage={sndImg}
            w={"100%"}
            h={"100%"}
            bgSize={"100%"}
            bgPosition={"0% 30%"}
            borderRadius={"30px"}
          />
          Slide 2<ButtonStyle $primary>see all</ButtonStyle>
        </SwiperSlide>
        <SwiperSlide>
          <Box
            position={"absolute"}
            zIndex={-1}
            bgImage={trdImg}
            w={"100%"}
            h={"100%"}
            bgSize={"100%"}
            // bgPosition={"0% 30%"}
            borderRadius={"30px"}
          />
          Slide 3<ButtonStyle>see all</ButtonStyle>
        </SwiperSlide>
      </Swiper>
    </>
  );
}

const ButtonStyle = styled.button`
  /* Adapt the colors based on primary prop */
  background: ${(props) => (props.$primary ? "brand.500" : "white")};
  color: ${(props) => (props.$primary ? "white" : "brand.500")};
  display: inline-flex;
  align-items: center;
  border-radius: 16px;
  font-weight: 500;
  box-shadow: 45px 76px 113px 7px rgba(112, 144, 176, 0.08);
  height: 40px;
  min-width: 2.5rem;
  padding: 20px 27px;
  margin-right: 38px;
  margin-top: 50px;
  font-size: 14px;
  line-height: 14px;
`;
