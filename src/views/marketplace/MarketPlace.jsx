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
import trend2 from "../../assets/images/trending-2.png";
import trend3 from "../../assets/images/trending-3.png";
import trend4 from "../../assets/images/trending-4.png";
import trend5 from "../../assets/images/trending-5.png";
import trend6 from "../../assets/images/trending-6.png";
import TableTopCreator from "./components/TableTopCreator";
import HistoryItem from "./components/HistoryItem";
import Card from "../../components/card/Card";
// 이미지도 변수 잡아서 데이터로 불러줘야 함

const MarketPlace = () => {
  const trendingList = [
    { name: "Art", link: "#art" },
    { name: "Music", link: "#music" },
    { name: "Collectibles", link: "#collectibles" },
    { name: "Sports", link: "#sports" },
  ];
  const NFTList = [
    {
      name: "Abstract Colors",
      author: "Esthera Jackson",
      img: trend1,
      bid: 0.91,
      history: "58s",
    },
    {
      name: "ETH AI Brain",
      author: "Nick Wilson",
      img: trend2,
      bid: 0.75,
      history: "1m",
    },
    {
      name: "Mesh Gradients",
      author: "Will Smith",
      img: trend3,
      bid: 0.98,
      history: "2m",
    },
  ];
  const NFTAddList = [
    {
      name: "Swipe Circles",
      author: "Peter Will",
      img: trend4,
      bid: 0.91,
      history: "1m",
    },
    {
      name: "Colorful Heaven",
      author: " Manny Gates",
      img: trend5,
      bid: 0.75,
      history: "30s",
    },
    {
      name: "3D Cubes Art",
      author: "Will Smith",
      img: trend6,
      bid: 0.98,
      history: "3m",
    },
  ];

  return (
    <>
      <Title>NFT Marketplace</Title>
      <Grid
        templateColumns={{ base: 0, lg2: "repeat(3, 1fr)" }}
        display={{ base: "block", xl: "grid" }}
        mb={"20px"}
        gridGap={"20px"}
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
            gridGap={"20px"}
          >
            {NFTList.map((item, index) => (
              <NFT
                key={index}
                name={item.name}
                author={item.author}
                img={item.img}
                bid={item.bid}
              />
            ))}
          </SimpleGrid>

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
                Recently Added
              </Text>
            </Flex>
          </Flex>
          <SimpleGrid
            gridTemplateColumns={{
              base: "repeat(1, minmax(0, 1fr))",
              md: "repeat(3, minmax(0, 1fr))",
            }}
            gridGap={"20px"}
          >
            {NFTAddList.map((item, index) => (
              <NFT
                key={index}
                name={item.name}
                author={item.author}
                img={item.img}
                bid={item.bid}
              />
            ))}
          </SimpleGrid>
        </Stack>
        <Stack
          display={"flex"}
          flexDir={"column"}
          gridArea={{ lg2: "1/3/2/4" }}
        >
          <TableTopCreator />
          <Card>
            <Flex
              flexDir={"column"}
              w={"100%"}
              overflowX={{ base: "scroll", lg: "hidden" }}
            >
              <Flex
                justifyContent={"space-between"}
                w={"100%"}
                px={"22px"}
                pb={"20px"}
                mb={"10px"}
                boxShadow={"0px 40px 58px -20px rgba(112, 144, 176, 0.26)"}
              >
                <Text
                  fontSize={"1.25rem"}
                  fontWeight={"bold"}
                  color={"navy.700"}
                >
                  History
                </Text>
                <Button
                  display={"inline-flex"}
                  alignItems={"center"}
                  justifyContent={"center"}
                  w={"auto"}
                  lineHeight={1.2}
                  borderRadius={"50px"}
                  fontWeight={"medium"}
                  boxShadow={"45px 76px 113px 7px rgba(112, 144, 176, 0.08)"}
                  px={"1rem"}
                  bg={"secondaryGray.300"}
                  color={"brand.500"}
                  fontSize={"1rem"}
                  h={"2.5rem"}
                  minW={"2.5rem"}
                >
                  See all
                </Button>
              </Flex>
              <HistoryItem
                name={NFTAddList[1].name}
                author={NFTAddList[1].author}
                img={NFTAddList[1].img}
                bid={NFTAddList[1].bid}
                history={NFTAddList[1].history}
              />
              <HistoryItem
                name={NFTList[0].name}
                author={NFTList[0].author}
                img={NFTList[0].img}
                bid={NFTList[0].bid}
                history={NFTList[0].history}
              />
              <HistoryItem
                name={NFTList[1].name}
                author={NFTList[1].author}
                img={NFTList[1].img}
                bid={NFTList[1].bid}
                history={NFTList[1].history}
              />
              <HistoryItem
                name={NFTAddList[0].name}
                author={NFTAddList[0].author}
                img={NFTAddList[0].img}
                bid={NFTAddList[0].bid}
                history={NFTAddList[0].history}
              />
              <HistoryItem
                name={NFTList[2].name}
                author={NFTList[2].author}
                img={NFTList[2].img}
                bid={NFTList[2].bid}
                history={NFTList[2].history}
              />
              <HistoryItem
                name={NFTAddList[2].name}
                author={NFTAddList[2].author}
                img={NFTAddList[2].img}
                bid={NFTAddList[2].bid}
                history={NFTAddList[2].history}
              />
            </Flex>
          </Card>
        </Stack>
      </Grid>
    </>
  );
};

export default MarketPlace;
