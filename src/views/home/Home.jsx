import Title, { TitleH4 } from "../../components/common/Title";
import { Section } from "../../components/layout/Container";
import Layout from "../../components/layout/Layout";
import Info from "./components/Info";
import MainSlide from "./components/MainSlide";
import { Box, Container, Flex, SimpleGrid } from "@chakra-ui/react";
import Minicard from "./components/Minicard";
import Totalspent from "./components/Totalspent";
import WeeklyRevenue from "./components/WeeklyRevenue";

const Home = () => {
  return (
    <>
      {/* <Layout title="home" showTitle={false}> */}
      <Title>Main Dashboard</Title>
      <Minicard />
      <SimpleGrid columns={{ base: 1, md: 2, xl: 2 }} gap="20px" mb={"20px"}>
        <Totalspent />
        <WeeklyRevenue />
      </SimpleGrid>
      <SimpleGrid columns={{ base: 1, md: 1, xl: 2 }} gap="20px" mb={"20px"}>
        <Flex
          p={"20px"}
          flexDirection={"column"}
          w={"100%"}
          position={"relative"}
          borderRadius={"20px"}
          minW={0}
          bg="white"
          justifyContent={"center"}
          mb={0}
          height="345px"
          px={0}
        ></Flex>
        <SimpleGrid columns={{ base: 1, md: 2, xl: 2 }} gap="20px">
          <Flex
            p={"20px"}
            flexDirection={"column"}
            w={"100%"}
            position={"relative"}
            borderRadius={"20px"}
            minW={0}
            bg="white"
          ></Flex>
          <Flex
            p={"20px"}
            flexDirection={"column"}
            w={"100%"}
            position={"relative"}
            borderRadius={"20px"}
            minW={0}
            bg="white"
          ></Flex>
        </SimpleGrid>
      </SimpleGrid>
      <SimpleGrid columns={{ base: 1, md: 1, xl: 2 }} gap="20px" mb={"20px"}>
        <Flex
          p={"20px"}
          flexDirection={"column"}
          w={"100%"}
          position={"relative"}
          borderRadius={"20px"}
          minW={0}
          bg="white"
          justifyContent={"center"}
          mb={0}
          height="345px"
          px={0}
        ></Flex>
        <SimpleGrid columns={2} spacing={10}>
          <Flex
            p={"20px"}
            flexDirection={"column"}
            w={"100%"}
            position={"relative"}
            borderRadius={"20px"}
            minW={0}
            bg="white"
          ></Flex>
          <Flex
            p={"20px"}
            flexDirection={"column"}
            w={"100%"}
            position={"relative"}
            borderRadius={"20px"}
            minW={0}
            bg="white"
          ></Flex>
        </SimpleGrid>
      </SimpleGrid>
    </>
  );
};

export default Home;
