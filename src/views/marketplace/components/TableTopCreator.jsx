import {
  Avatar,
  Box,
  Button,
  CircularProgress,
  Flex,
  Progress,
  ProgressLabel,
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import Card from "../../../components/card/Card";
import styled from "styled-components";
import { globalStyles } from "../../../theme/styles"; // style.js 파일에서 globalStyles를 import 해옵니다.

export default function TableTopCreator() {
  const creatorsList = [
    {
      avatarName: "Dan Abrahmov",
      avatarSrc: "https://bit.ly/dan-abramov",
      name: "@maddison_c21",
      artworks: 9821,
      rating: 90,
    },
    {
      avatarName: "Kola Tioluwani",
      avatarSrc: "https://bit.ly/broken-link",
      name: "@karl.will02",
      artworks: 7032,
      rating: 80,
    },
    {
      avatarName: "Kent Dodds",
      avatarSrc: "https://bit.ly/kent-c-dodds",
      name: "@andreea.1z",
      artworks: 5204,
      rating: 70,
    },
    {
      avatarName: "Ryan Florence",
      avatarSrc: "https://bit.ly/ryan-florence",
      name: "@abraham47.y",
      artworks: 4309,
      rating: 60,
    },
    {
      avatarName: "Prosper Otemuyiwa",
      avatarSrc: "https://bit.ly/prosper-baba",
      name: "@simmmple.web",
      artworks: 3871,
      rating: 50,
    },
  ];
  return (
    <>
      <Card>
        <Flex
          flexDir={"column"}
          w={"100%"}
          overflowX={{ base: "scroll", lg: "hidden" }}
          boxShadow={"0px 40px 58px -20px rgba(112, 144, 176, 0.26)"}
        >
          <Flex
            justifyContent={"space-between"}
            w={"100%"}
            px={"22px"}
            pb={"20px"}
            mb={"10px"}
            boxShadow={"0px 40px 58px -20px rgba(112, 144, 176, 0.26)"}
          >
            <Text fontSize={"1.25rem"} fontWeight={"bold"} color={"navy.700"}>
              Top Creators
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
        </Flex>

        <Table variant="simple" color={"secondaryGray.500"} w={"100%"}>
          <TableCaption>Imperial to metric conversion factors</TableCaption>
          <Thead>
            <Tr>
              <ThStyle>NAME</ThStyle>
              <ThStyle>ARTWORKS</ThStyle>
              <ThStyle>RATING</ThStyle>
            </Tr>
          </Thead>
          <Tbody>
            {creatorsList.map((item, index) => (
              <Tr key={index}>
                <Td display={"flex"} alignItems={"center"}>
                  <Avatar
                    name={item.avatarName}
                    src={item.avatarSrc}
                    size="sm"
                    mr={"8px"}
                  />
                  <Text
                    fontSize={"0.875rem"}
                    color={"navy.700"}
                    fontWeight={"bold"}
                  >
                    {item.name}
                  </Text>
                </Td>
                <Td
                  fontSize={"0.875rem"}
                  color={"secondaryGray.600"}
                  fontWeight={"medium"}
                  textAlign={"start"}
                >
                  {item.artworks}
                </Td>
                <Td>
                  <Progress
                    value={item.rating}
                    size="s"
                    isAnimated
                    hasStripe
                    colorScheme="cyan"
                  />
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </Card>
    </>
  );
}

const { secondaryGray } = globalStyles.colors; // destructuring assignment를 통해 secondaryGray를 바로 가져옵니다.
const ThStyle = styled.th`
  color: ${secondaryGray[500]};
  font-size: 0.75rem;
  font-weight: 700;
  padding: 0.75rem 20px;
  text-align: start;
`;
