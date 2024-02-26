import {
  Avatar,
  AvatarGroup,
  Box,
  Button,
  Flex,
  IconButton,
  Img,
  Link,
  Text,
} from "@chakra-ui/react";
import Card from "./Card";
import { IoHeartOutline } from "react-icons/io5";
import { useState } from "react";
import { IoIosHeart } from "react-icons/io";

export default function NFT(props) {
  const { name, author, img, bid } = props;
  const [isClicked, setIsClicked] = useState(false);
  return (
    <>
      <Card>
        <Flex
          flexDir={"column"}
          borderRadius={"20px"}
          w={"100%"}
          minW={"0px"}
          bg={"white"}
        >
          <Flex>
            <Box mb={"20px"} position={"relative"}>
              <Img src={img} w={"100%"} h={"100%"} borderRadius={"20px"} />
              <IconButton
                onClick={() => setIsClicked((prevState) => !prevState)}
                icon={isClicked ? <IoIosHeart /> : <IoHeartOutline />}
                position={"absolute"}
                top={"14px"}
                right={"14px"}
                verticalAlign={"middle"}
                lineHeight={1.2}
                borderRadius={"50%"}
                fontWeight={"semibold"}
                boxShadow={"45px 76px 113px 7px rgba(112, 144, 176, 0.08)"}
                h={"36px"}
                minW={"36px"}
                w={"36px"}
                fontSize={"24px"}
                // px={"1rem"}
                // py={0}
                color={"brand.500"}
                p={0}
              />
            </Box>
            <Flex></Flex>
          </Flex>

          <Flex flexDir={"column"} justifyContent={"space-between"} h={"100%"}>
            <Flex
              flexDir={{ base: "row", md: "column", lg: "row", lg2: "column" }}
              justifyContent={"space-between"}
              mb={"auto"}
            >
              <Flex flexDir={"column"}>
                <Text
                  color={"navy.700"}
                  mb={"5px"}
                  fontWeight={"bold"}
                  mr={"14px"}
                  fontSize={{
                    base: "1.25rem",
                    md: "1.125rem",
                    lg: null,
                    lg2: null,
                  }}
                >
                  {name}
                </Text>
                <Text
                  color={"secondaryGray.600"}
                  fontWeight={"normal"}
                  mr={"14px"}
                  fontSize={"0.875rem"}
                >
                  By {author}
                </Text>
              </Flex>
              <Flex
                alignItems={"center"}
                justifyContent={"flex-end"}
                flexDir={"row-reverse"}
                color={"brand.500"}
                fontSize={"12px"}
                mt={{ base: "0px", md: "10px", lg: "0px", lg: "10px" }}
              >
                <AvatarGroup size="sm" max={3}>
                  <Avatar
                    name="Ryan Florence"
                    src="https://bit.ly/ryan-florence"
                  />
                  <Avatar
                    name="Segun Adebayo"
                    src="https://bit.ly/sage-adebayo"
                  />
                  <Avatar name="Kent Dodds" src="https://bit.ly/kent-c-dodds" />
                  <Avatar
                    name="Prosper Otemuyiwa"
                    src="https://bit.ly/prosper-baba"
                  />
                </AvatarGroup>
              </Flex>
            </Flex>
            <Flex
              alignItems={"start"}
              justifyContent={"space-between"}
              mt={"25px"}
              flexDir={{ base: "row", md: null, lg: null, lg: "column" }}
            >
              <Text
                fontSize={"0.875rem"}
                color={"brand.500"}
                fontWeight={"bold"}
              >
                Current Bid: {bid} ETH
              </Text>
              <Link
                textDecoration={"none"}
                mt={{ base: "0px", md: "10px", lg: "0px", lg2: "10px" }}
              >
                <Button
                  display={"inline-flex"}
                  alignItems={"center"}
                  justifyContent={"center"}
                  verticalAlign={"middle"}
                  w={"auto"}
                  borderRadius={"70px"}
                  fontWeight={"medium"}
                  boxShadow={"45px 76px 113px 7px rgba(112, 144, 176, 0.08)"}
                  h={"2.5rem"}
                  minW={"2.5remc"}
                  fontSize={"0.875rem"}
                  px={"24px"}
                  bg={"brand.900"}
                  color={"white"}
                  py={"5px"}
                >
                  Place Bid
                </Button>
              </Link>
            </Flex>
          </Flex>
        </Flex>
      </Card>
    </>
  );
}
