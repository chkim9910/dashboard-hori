import { Box, Flex, Text } from "@chakra-ui/react";
import { useState } from "react";
import { Link as ReactRouterLink } from "react-router-dom";
import {
  IoIosCart,
  IoMdHome,
  IoMdLock,
  IoMdPerson,
  IoMdStats,
} from "react-icons/io";
import { Link } from "react-router-dom";

const Gnb = () => {
  const gnbList = [
    { name: "Main Dashboard", icon: <IoMdHome />, path: "/" },
    { name: "NFT Marketplace", icon: <IoIosCart />, path: "/marketplace" },
    { name: "Data Tables", icon: <IoMdStats />, path: "/datatables" },
    { name: "Profile", icon: <IoMdPerson />, path: "/profile" },
    { name: "Sign In", icon: <IoMdLock />, path: "/signin" },
  ];
  const [activeIndex, setActiveIndex] = useState(null);
  return (
    <Box paddingInlineEnd={"16px"} paddingStart={"20px"}>
      {gnbList.map((item, index) => (
        <Link
          as={ReactRouterLink}
          key={index}
          to={item.path}
          bg={"transparent"}
          color={"secondaryGray.500"}
          textDecoration={"none"}
          className={index === activeIndex ? "active" : ""}
          onClick={() => {
            // event.preventDefault(); // 기본 동작 방지
            setActiveIndex(index);
          }}
        >
          <Box>
            <Flex
              alignItems={"center"}
              flexDir={"row"}
              pt={"5px"}
              pb={"5px"}
              paddingInlineStart={"10px"}
              _hover={{ background: "gray.200" }}
            >
              <Flex
                alignItems={"center"}
                justifyContent={"flex-start"}
                w={"100%"}
              >
                <Box
                  className="icon"
                  marginInlineEnd={"18px"}
                  color={
                    activeIndex === index ? "brand.500" : "secondaryGray.500"
                  }
                  fontSize={"20px"}
                  display={"inline-block"}
                  height={"27px"}
                  lineHeight={"1em"}
                  flexShrink={0}
                >
                  {item.icon}
                </Box>
                <Text
                  color={
                    activeIndex === index ? "gray.700" : "secondaryGray.500"
                  }
                  fontWeight={activeIndex === index ? "bold" : "medium"}
                >
                  {item.name}
                </Text>
              </Flex>
              <Box
                mt={0}
                marginInlineEnd={0}
                mb={0}
                marginInlineStart={"22px"}
                h={"36px"}
                w={"4px"}
                bg={activeIndex === index ? "brand.500" : "transparent"}
                borderRadius={"5px"}
              ></Box>
            </Flex>
          </Box>
        </Link>
      ))}
    </Box>
  );
};

export default Gnb;
