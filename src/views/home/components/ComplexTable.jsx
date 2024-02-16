import {
  Flex,
  Icon,
  Progress,
  Table,
  Tbody,
  Td,
  Text,
  Tfoot,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import Card from "../../../components/card/Card";
import Banner from "../../../components/menu/MainMenu";
import { complexTableList } from "../../../variables/tables";
import {
  IoIosArrowDropdownCircle,
  IoIosCloseCircle,
  IoIosWarning,
} from "react-icons/io";

export default function ComplexTable() {
  return (
    <>
      <Card>
        <Flex px="25px" justify="space-between" align="center">
          <Text
            color="secondaryGray.900"
            fontSize="22px"
            fontWeight="700"
            lineHeight="100%"
          >
            Complex Table
          </Text>
          <Banner />
        </Flex>
        <Table>
          <Thead>
            <Tr>
              <Th>NAME</Th>
              <Th>STATUS</Th>
              <Th>DATE</Th>
              <Th>PROGRESS</Th>
            </Tr>
          </Thead>
          <Tbody>
            {complexTableList.map((item, index) => (
              <Tr key={index}>
                <Td py={"8px"}>
                  <Text
                    fontSize={"0.875rem"}
                    color={"secondaryGray.900"}
                    fontWeight={"bold"}
                  >
                    {item.name}
                  </Text>
                </Td>
                <Td display={"flex"} alignItems={"center"} py={"8px"}>
                  <Icon
                    as={
                      item.status === "Approved"
                        ? IoIosArrowDropdownCircle
                        : item.status === "Error"
                        ? IoIosWarning
                        : item.status === "Disable"
                        ? IoIosCloseCircle
                        : "none"
                    }
                    color={
                      item.status === "Approved"
                        ? "green"
                        : item.status === "Error"
                        ? "orange"
                        : item.status === "Disable"
                        ? "red"
                        : "none"
                    }
                    fontSize={"24px"}
                  />
                  <Text
                    fontSize={"0.875rem"}
                    color={"secondaryGray.900"}
                    fontWeight={"bold"}
                  >
                    {item.status}
                  </Text>
                </Td>
                <Td py={"8px"}>
                  <Text
                    fontSize={"0.875rem"}
                    color={"secondaryGray.900"}
                    fontWeight={"bold"}
                  >
                    {item.date}
                  </Text>
                </Td>
                <Progress
                  value={item.progress}
                  w={"100px"}
                  p={"1.1rem"}
                  h={"45px"}
                  background={"none"}
                />
              </Tr>
            ))}
          </Tbody>
        </Table>
      </Card>
    </>
  );
}

{
  /* <Tr>
              <Td>inches</Td>
              <Td>Approved</Td>
              <Td>25.4</Td>
              <Progress
                value={40}
                w={"100px"}
                p={"1rem"}
                h={"45px"}
                bg={"none"}
              />
            </Tr>
            <Tr>
              <Td>feet</Td>
              <Td>centimetres (cm)</Td>
              <Td>30.48</Td>
              <Progress
                value={60}
                w={"100px"}
                p={"1rem"}
                h={"45px"}
                bg={"none"}
              />
            </Tr>
            <Tr>
              <Td>yards</Td>
              <Td>metres (m)</Td>
              <Td>0.91444</Td>
              <Progress
                value={80}
                w={"100px"}
                p={"1rem"}
                h={"45px"}
                backgroundColor={"none"}
              />
            </Tr> */
}
