import Title, { TitleH4 } from "../../components/common/Title";
import { Section } from "../../components/layout/Container";
import Layout from "../../components/layout/Layout";
import Info from "./components/Info";
import MainSlide from "./components/MainSlide";
import { Box, Button, Container, Flex, SimpleGrid } from "@chakra-ui/react";
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
import MiniCalendar from "../../components/calendar/MiniCalendar";
import { useEffect, useState } from "react";
const Home = () => {
  // useEffect(()=>{},[의존성 배열])
  // 1. 컴포넌트 마운트될 때 배경색 노랑으로 변경
  useEffect(() => {
    document.body.style.backgroundColor = "palegoldenrod";
    document.body.id = "intro";
    document.body.classList.add("intro");

    // 2. 컴포넌트 언마운트될 때 원래 흰 배경색으로 변경
    return () => {
      document.body.style.backgroundColor = "";
      document.body.id = "";
      document.body.classList.remove("intro");
    };
  }, []);

  // 3. 업데이트 : 버튼 클릭 시 배경색 변경
  // 업데이트 시 useEffect는 의존성 배열 필요
  const [color, setColor] = useState("palegoldenrod");
  const toggleColor = () => {
    setColor((prevColor) =>
      prevColor === "palegoldenrod" ? "ligtblue" : "palegoldenrod"
    );
  };

  // color가 변경될 때마다 함수 실행
  useEffect(() => {
    // document.body.backgroundColor = color;
    console.log("색상이 변경됨", color);
  }, [color]);

  return (
    <>
      {/* <Layout title="home" showTitle={false}> */}
      <Title>Main Dashboard</Title>
      <Button color={"black"} onClick={toggleColor}>
        배경색 변경
      </Button>
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
          <MiniCalendar />
        </SimpleGrid>
      </SimpleGrid>
    </>
  );
};

export default Home;
