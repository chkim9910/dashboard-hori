import React, { useEffect, useState } from "react";
import { Link as ReactRouterLink } from "react-router-dom";
import {
  Box,
  ButtonGroup,
  Button,
  Heading,
  IconButton,
  Container,
  UnorderedList,
  ListItem,
  Flex,
  Link,
  Text,
  Image,
} from "@chakra-ui/react";
// import {
//   IoIosCart,
//   IoMdHome,
//   IoMdLock,
//   IoMdPerson,
//   IoMdStats,
// } from "react-icons/io";
// import { HamburgerIcon, SearchIcon, SunIcon } from "@chakra-ui/icons";
import Gnb from "./Gnb";
import gsap from "gsap";
import circle from "../../assets/images/circle.png";

const Header = () => {
  const [isScroll, setIsScroll] = useState(false);

  return (
    <Box
      as="header"
      id="header"
      position={"fixed"}
      // w={"100%"}
      minH={"100%"}
      display={{ base: "none", lg2: "block" }}
      // left={{ base: "-500px", lg2: "0" }}
      transition={"left 0.2s linear"}
      zIndex={10}
      // zIndex={1000}
      // bg={isScroll ? "rgba(0,0,0,.1)" : "transparent"}
      // backdropFilter={isScroll ? "saturate(180%) blur(15px)" : "none"}
    >
      <Box
        className="nav-bar__wrapper"
        width={"300px"}
        height={"100vh"}
        minH={"100%"}
        overflowX={"hidden"}
        position={"relative"}
        m={0}
        boxShadow={"14px 17px 40px 4px rgba(112, 144, 176, 0.08)"}
        transition={"0.2s linear;"}
        bg={"white"}
      >
        <Box position={"relative"} overflow={"hidden"} w={"100%"} h={"100%"}>
          <Box
            position={"absolute"}
            inset={"0px"}
            overflow={"scroll"}
            mr={"-16px"}
            mb={"-22px"}
          >
            <Flex
              flexDir={"column"}
              h={"100%"}
              pt={"25px"}
              paddingInlineStart={"16px"}
              paddingInlineEnd={"16px"}
              borderRadius={"30px"}
            >
              {/* logo */}
              <Flex flexDir={"column"} alignItems={"center"}>
                <Heading
                  as={"h1"}
                  w={"175px"}
                  h={"26px"}
                  display={"inline-block"}
                  lineHeight={"1em"}
                  flexShrink={0}
                  verticalAlign={"middle"}
                  mt={"32px"}
                  mb={"32px"}
                  fontSize={24}
                  color={"navy.700"}
                  textAlign={"center"}
                >
                  <Link to="/">Dashboard</Link>
                </Heading>
                <Flex
                  h={"1px"}
                  w={"100%"}
                  bg={"rgba(135, 140, 189, 0.3)"}
                  mb={"20px"}
                ></Flex>
              </Flex>
              {/* gnb */}
              <Flex flexDir={"column"} mb={"auto"} mt={"8px"}>
                <Gnb />
              </Flex>
              {/* bottom content */}
              <Box mt={"60px"} mb={"40px"} borderRadius={"30px"}>
                <Flex
                  flexDirection={"column"}
                  alignItems={"center"}
                  justifyContent={"center"}
                  bg={"linear-gradient(135deg, #868CFF 0%, #4318FF 100%)"}
                  borderRadius={"30px"}
                  position={"relative"}
                >
                  <Flex
                    alignItems={"center"}
                    justifyContent={"center"}
                    w={"94px"}
                    h={"94px"}
                    border={"5px solid"}
                    borderColor={"white"}
                    bg={"linear-gradient(135deg, #868CFF 0%, #4318FF 100%)"}
                    borderRadius={"50%"}
                    position={"absolute"}
                    left={"50%"}
                    top={"-47px"}
                    transform={"translate(-50%, 0%)"}
                  >
                    <Image src={circle} w={"40px"} h={"40px"} />
                  </Flex>
                  <Flex
                    flexDir={"column"}
                    alignItems={"center"}
                    justifyContent={"center"}
                    mb={"12px"}
                    paddingInlineStart={"15px"}
                    paddingInlineEnd={"15px"}
                    pt={"55px"}
                  >
                    <Text
                      fontSize={"18px"}
                      color={"white"}
                      fontWeight={"bold"}
                      lineHeight={"150%"}
                      textAlign={"center"}
                      paddingInlineStart={"10px"}
                      paddingInlineEnd={"10px"}
                      mt={"10px"}
                      mb={"6px"}
                    >
                      Upgrade to PRO
                    </Text>
                    <Text
                      fontSize={"14px"}
                      color={"white"}
                      fontWeight={"normal"}
                      textAlign={"center"}
                      paddingInlineStart={"10px"}
                      paddingInlineEnd={"10px"}
                      mb={"6px"}
                    >
                      Improve your development process and start doing more with
                      Horizon UI PRO!
                    </Text>
                  </Flex>
                  <Link
                    to="/"
                    outline={"2px solid transparent"}
                    outlineOffset={"2px"}
                  >
                    <Button
                      mb={"24px"}
                      fontSize={"0.875rem"}
                      variant="ghost"
                      color={"white"}
                      bg={"whiteAlpha.300"}
                      boxShadow={
                        "45px 76px 113px 7px rgba(112, 144, 176, 0.08)"
                      }
                      marginInlineEnd={"auto"}
                      marginInlineStart={"auto"}
                      paddingInlineStart={"1rem"}
                      paddingInlineEnd={"1rem"}
                      minW={"185px"}
                      h={"2.5rem"}
                      transition={".25s all ease"}
                      borderRadius={"16px"}
                      display={"inline-flex"}
                      alignItems={"center"}
                      justifyContent={"center"}
                    >
                      Upgrade to PRO
                    </Button>
                  </Link>
                </Flex>
              </Box>
            </Flex>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Header;

{
  /* <Gnb />
              <ButtonGroup color={"white"}>
                <IconButton
                  variant="ghost"
                  aria-label="Search database"
                  icon={<SearchIcon />}
                  color={"white"}
                />
                <IconButton
                  variant="ghost"
                  aria-label="Light database"
                  icon={<SunIcon />}
                  color={"white"}
                />
                <IconButton
                  variant="ghost"
                  aria-label="전체 메뉴"
                  icon={<HamburgerIcon />}
                  display={{ base: "block", lg: "none" }}
                  color={"white"}
                />
              </ButtonGroup> */
}
