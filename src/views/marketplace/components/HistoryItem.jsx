import { Button, Center, Flex, Image, Text } from "@chakra-ui/react";
import Card from "../../../components/card/Card";

export default function HistoryItem(props) {
  return (
    <>
      <Card>
        <Flex flexDir={"column"} justifyContent={"center"}>
          <Flex alignItems={"center"}>
            <Image
              src={props.img}
              w={"66px"}
              h={"66px"}
              mr={"16px"}
              borderRadius={"xl"}
            />
            <Flex
              flexDir={"column"}
              mr={{ base: "4px", md: "32px", xl: "10px" }}
            >
              <Text
                fontSize={"1rem"}
                mb={"5px"}
                mr={"14px"}
                fontWeight={"bold"}
              >
                {props.name}
              </Text>
              <Text
                fontSize={"0.875rem"}
                color={"secondaryGray.600"}
                mr={"14px"}
                fontWeight={"normal"}
              >
                By {props.author}
              </Text>
            </Flex>
            <Flex
              alignItems={"center"}
              mr={{ base: "4px", md: "32px", lg2: "10px" }}
              fontWeight={"bold"}
              fontSize={"1rem"}
            >
              {props.bid} ETH
            </Flex>
            <Text
              fontSize={"0.875rem"}
              color={"secondaryGray.600"}
              ml={"auto"}
              fontWeight={"bold"}
            >
              {props.history} ago
            </Text>
          </Flex>
        </Flex>
      </Card>
    </>
  );
}
