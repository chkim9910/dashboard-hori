import { Box, Flex, Select, Text } from "@chakra-ui/react";
import Card from "../../../components/card/Card";
import PieChart from "../../../components/chart/PieChart";
import { pieChartOptions, pieChartData } from "../../../variables/charts";

export default function PieCard() {
  return (
    <>
      <Card>
        <Flex
          alignItems={"center"}
          justifyContent={"space-between"}
          px={0}
          w={"100%"}
          mb={"8px"}
        >
          <Text
            color={"secondaryGray.900"}
            fontSize={"1rem"}
            fontWeight={"semibold"}
            mt={"4px"}
          >
            Your Pie Chart
          </Text>
          <Select
            placeholder="Monthly"
            color={"secondaryGray.600"}
            fontSize={"0.875rem"}
            fontWeight={"bold"}
            bg={"transparent"}
            w={"max-content"}
            h={"2.5rem"}
            lineHeight={"normal"}
          >
            <option value="daily">Daily</option>
            <option value="monthly">Monthly</option>
            <option value="yearly">Yearly</option>
          </Select>
        </Flex>

        <Box>
          <PieChart chartOptions={pieChartOptions} chartData={pieChartData} />
        </Box>

        <Flex
          p={"15px"}
          flexDir={"row"}
          w={"100%"}
          bg={"white"}
          boxShadow={"0px 18px 40px rgba(112, 144, 176, 0.12)"}
          mt={"15px"}
        >
          <Flex flexDir={"column"} py={"5px"}>
            <Flex alignItems={"center"}>
              <Box
                h={"8px"}
                w={"8px"}
                borderRadius={"50%"}
                bg={"brand.500"}
                me={"4px"}
              ></Box>
              <Text
                color={"secondaryGray.600"}
                fontWeight={"bold"}
                mb={"5px"}
                fontSize={"0.75rem"}
              >
                Your files
              </Text>
            </Flex>
            <Text
              color={"secondaryGray.900"}
              fontWeight={"bold"}
              fontSize={"1.125rem"}
            >
              63%
            </Text>
          </Flex>
          <Flex mx={"60px"}></Flex>
          <Flex flexDir={"column"} py={"5px"} me={"10px"}>
            <Flex alignItems={"center"}>
              <Box
                h={"8px"}
                w={"8px"}
                borderRadius={"50%"}
                bg={"#6AD2FF"}
                me={"4px"}
              ></Box>
              <Text
                color={"secondaryGray.600"}
                fontWeight={"bold"}
                mb={"5px"}
                fontSize={"0.75rem"}
              >
                System
              </Text>
            </Flex>
            <Text
              color={"secondaryGray.900"}
              fontWeight={"bold"}
              fontSize={"1.125rem"}
            >
              25%
            </Text>
          </Flex>
        </Flex>
      </Card>
    </>
  );
}
