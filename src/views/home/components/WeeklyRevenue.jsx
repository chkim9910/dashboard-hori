import { Box, Flex, IconButton, Text } from "@chakra-ui/react";
import Card from "../../../components/card/Card";
import { IoMdStats } from "react-icons/io";
import ColumnChart from "../../../components/chart/ColumnChart";

export default function WeeklyRevenue() {
  return (
    <>
      <Card>
        <Flex w={"100%"} alignItems={"center"} px={"15px"} py={"10px"}>
          <Text
            me={"auto"}
            color={"secondaryGray.900"}
            fontSize={"1.25rem"}
            fontWeight={"bold"}
            lineHeight={"100%"}
          >
            Weekly Revenue
          </Text>
          <IconButton
            variant="solid"
            aria-label="Search database"
            boxShadow={"45px 76px 113px 7px rgba(112, 144, 176, 0.08)"}
            color={"brand.500"}
            fontSize={"24px"}
            icon={<IoMdStats />}
          />
        </Flex>

        <Box h={"240px"} mt={"auto"}>
          <ColumnChart />
        </Box>
      </Card>
    </>
  );
}
