import {
  Box,
  Flex,
  Stat,
  StatArrow,
  StatHelpText,
  Text,
} from "@chakra-ui/react";
import Card from "../../../components/card/Card";
import {
  barChartDataDailyTraffic,
  barChartOptionsDailyTraffic,
} from "../../../variables/charts";
import BarChart from "../../../components/chart/BarChart";

export default function DailyTraffic() {
  return (
    <>
      <Card>
        <Flex
          alignItems={"start"}
          justifyContent={"space-between"}
          px={"10px"}
          pt={"5px"}
        >
          <Flex flexDir={"column"} alignItems={"start"} me={"20px"}>
            <Flex w={"100%"}>
              <Text
                color={"secondaryGray.600"}
                fontSize={"0.875rem"}
                fontWeight={"medium"}
              >
                Daily Traffic
              </Text>
            </Flex>
            <Flex alignItems={"end"}>
              <Text
                color={"secondaryGray.900"}
                fontSize={"34px"}
                fontWeight={"bold"}
                lineHeight={"100%"}
              >
                2.579
              </Text>
              <Text
                color={"secondaryGray.600"}
                fontSize={"0.875rem"}
                fontWeight={"medium"}
                ms={"6px"}
              >
                Visitors
              </Text>
            </Flex>
          </Flex>
          <Flex>
            <Stat>
              <StatHelpText>
                <StatArrow type="increase" color={"green.500"} />
                <Text
                  color={"green.500"}
                  fontSize={"0/875rem"}
                  fontWeight={"bold"}
                >
                  +2.45%
                </Text>
              </StatHelpText>
            </Stat>
          </Flex>
        </Flex>

        <Box h={"240px"} mt={"auto"}>
          <Box>
            <BarChart
              chartData={barChartDataDailyTraffic}
              chartOptions={barChartOptionsDailyTraffic}
            />
          </Box>
        </Box>
      </Card>
    </>
  );
}
