import {
  Box,
  Button,
  Flex,
  Icon,
  IconButton,
  Stat,
  StatArrow,
  StatHelpText,
  Text,
} from "@chakra-ui/react";
import { IoIosCheckmarkCircle, IoMdStats } from "react-icons/io";
import Card from "../../../components/card/Card";
import LineChart from "../../../components/chart/LineChart";

export default function Totalspent() {
  return (
    <>
      <Card>
        <Flex paddingInlineStart={0} paddingInlineEnd={"20px"} pt={"5px"}>
          <Flex
            w={"100%"}
            alignItems={"center"}
            justifyContent={"space-between"}
          >
            <Button
              leftIcon={<IoMdStats />}
              variant="solid"
              boxShadow={"45px 76px 113px 7px rgba(112, 144, 176, 0.08)"}
              h={"2.5rem"}
              w={"auto"}
              minW={"2.5rem"}
              fontSize={"0.875rem"}
              px={"1rem"}
            >
              This month
            </Button>

            <IconButton
              variant="solid"
              aria-label="Search database"
              boxShadow={"45px 76px 113px 7px rgba(112, 144, 176, 0.08)"}
              color={"brand.500"}
              fontSize={"24px"}
              icon={<IoMdStats />}
            />
          </Flex>
        </Flex>

        <Flex w={"100%"} flexDir={{ base: "column", lg: "row" }}>
          <Flex flexDir={"column"} mt={"28px"} marginInlineEnd={"20px"}>
            <Text
              color={"secondaryGray.900"}
              fontSize={"34px"}
              textAlign={"start"}
              fontWeight={"bold"}
              lineHeight={"100%"}
            >
              $37.5K
            </Text>
            <Flex alignItems={"center"} mb={"20px"}>
              <Text
                color={"secondaryGray.600"}
                fontSize={"0.875rem"}
                fontWeight={"normal"}
                mt={"4px"}
                marginInlineEnd={"12px"}
              >
                Total Spent
              </Text>
              <Flex alignItems={"center"}>
                <Stat>
                  <StatHelpText display={"flex"} alignItems={"center"}>
                    <StatArrow w={"0.875rem"} h={"0.875rem"} type="increase" />
                    <Text
                      color={"green.500"}
                      fontSize={"0.875rem"}
                      fontWeight={"bold"}
                    >
                      +2.45%
                    </Text>
                  </StatHelpText>
                </Stat>
              </Flex>
            </Flex>
            <Flex alignItems={"center"}>
              <Icon as={IoIosCheckmarkCircle} color="green.500" me="4px" />
              <Text color="green.500" fontWeight={"bold"} fontSize={"1rem"}>
                On track
              </Text>
            </Flex>
          </Flex>
          <Box minH={"260px"} minW={"75%"} mt={"auto"}>
            <LineChart />
          </Box>
        </Flex>
      </Card>
    </>
  );
}
