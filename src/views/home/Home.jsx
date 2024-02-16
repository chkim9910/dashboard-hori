import Title, { TitleH4 } from "../../components/common/Title";
import { Section } from "../../components/layout/Container";
import Layout from "../../components/layout/Layout";
import Info from "./components/Info";
import MainSlide from "./components/MainSlide";
import { Box, Container, Flex, SimpleGrid } from "@chakra-ui/react";
import Minicard from "./components/Minicard";
import Totalspent from "./components/Totalspent";
import WeeklyRevenue from "./components/WeeklyRevenue";
import CheckTable from "./components/CheckTable";
import { columnsDataCheck, columnsDataComplex } from "./variables/columnsData";
import tableDataCheck from "./variables/tableDataCheck.json";
import DailyTraffic from "./components/DailyTraffic";
import PieCard from "./components/PieCard";
import ComplexTable from "./components/ComplexTable";
import Task from "./components/Task";

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
        <CheckTable columnsData={columnsDataCheck} tableData={tableDataCheck} />
        <SimpleGrid columns={{ base: 1, md: 2, xl: 2 }} gap="20px">
          <DailyTraffic />
          <PieCard />
        </SimpleGrid>
      </SimpleGrid>
      <SimpleGrid columns={{ base: 1, md: 1, xl: 2 }} gap="20px" mb={"20px"}>
        <ComplexTable />
        <SimpleGrid columns={2} spacing={10}>
          <Task />
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
