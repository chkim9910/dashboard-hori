import {
  Button,
  Flex,
  Grid,
  GridItem,
  Link,
  LinkBox,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";
// import Layout from "../../components/layout/Layout";
// import { motion } from "framer-motion";
// import topImg from "../../assets/images/cnu3j07sra271.png";
import Title from "../../components/common/Title";
import NFT from "../../components/card/NFT";
import Banner from "./components/Banner";

import trend1 from "../../assets/images/trending-1.png";
// 이미지도 변수 잡아서 데이터로 불러줘야 함

const MarketPlace = () => {
  const trendingList = [
    { name: "Art", link: "#art" },
    { name: "Music", link: "#music" },
    { name: "Collectibles", link: "#collectibles" },
    { name: "Sports", link: "#sports" },
  ];

  return (
    <>
      <Title>NFT Marketplace</Title>
      <Grid
        templateColumns={{ base: 0, lg2: "repeat(3, 1fr)" }}
        display={{ base: "block", xl: "grid" }}
        mb={"20px"}
      >
        <Stack
          display={"flex"}
          flexDir={"column"}
          gridArea={{ lg2: "1/1/2/3" }}
        >
          <Banner />
          <Flex flexDir={"column"}>
            <Flex
              flexDir={{ base: "column", md: "row" }}
              alignItems={{ base: "start", md: "center" }}
              justifyContent={"space-between"}
              mt={"45px"}
              mb={"20px"}
            >
              <Text
                color={"secondaryGray.900"}
                fontSize={"1.5rem"}
                ml={"24px"}
                fontWeight={"bold"}
              >
                Trending NFTs
              </Text>
              <Flex
                alignItems={"center"}
                mr={"20px"}
                ml={{ base: "24px", md: "0px" }}
                mt={{ base: "20px", md: "0px" }}
              >
                {trendingList.map((item, index) => (
                  <Link
                    key={index}
                    to={item.link}
                    textDecoration={"none"}
                    color={"brand.500"}
                    fontWeight={"medium"}
                    mr={{ base: "34px", md: "44px" }}
                  >
                    <Text>{item.name}</Text>
                  </Link>
                ))}
              </Flex>
            </Flex>
          </Flex>
          <SimpleGrid
            gridTemplateColumns={{
              base: "repeat(1, minmax(0, 1fr))",
              md: "repeat(3, minmax(0, 1fr))",
            }}
          >
            <NFT img={trend1} />
          </SimpleGrid>
        </Stack>
        <Stack></Stack>
      </Grid>
    </>
  );
};

export default MarketPlace;
