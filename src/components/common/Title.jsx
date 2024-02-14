import { SearchIcon } from "@chakra-ui/icons";
import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Button,
  Flex,
  Heading,
  IconButton,
  Input,
  Link,
} from "@chakra-ui/react";
import {
  IoIosColorPalette,
  IoIosInformationCircleOutline,
  IoMdNotificationsOutline,
} from "react-icons/io";
const Title = (props) => {
  return (
    <>
      <Flex
        position={"fixed"}
        top={{ base: "12px", md: "16px", lg2: "20px" }}
        right={{ base: "12px", md: "30px" }}
        zIndex={10}
        bg={"rgba(244, 247, 254, 0.2)"}
        backdropFilter={"blur(20px)"}
        borderRadius={"16px"}
        minH={"75px"}
        mt={0}
        py={"8px"}
        justifyContent={"center"}
        alignItems={"center"}
        lineHeight={"25.6px"}
        paddingInlineStart={{ base: "15px", md: "10px", lg2: "12px" }}
        paddingInlineEnd={{ base: "15px", md: "10px" }}
        w={{
          base: "calc(100vw - 6%)",
          md: "calc(100vw - 8%)",
          lg: "calc(100vw - 6%)",
          lg2: "calc(100vw - 350px)",
        }}
      >
        <Flex
          w={"100%"}
          mb={0}
          alignItems={"center"}
          flexDirection={{ base: "column", md: "row" }}
        >
          <Box mb={{ base: "8px", md: "0px" }}>
            <Breadcrumb as="nav" color={"gray.700"} fontSize={"0.875rem"}>
              <BreadcrumbItem mb={"5px"}>
                <BreadcrumbLink href="#">Pages</BreadcrumbLink>
              </BreadcrumbItem>

              <BreadcrumbItem mb={"5px"}>
                <BreadcrumbLink href="#">{props.children}</BreadcrumbLink>
              </BreadcrumbItem>
            </Breadcrumb>
            <Link
              fontSize={"34px"}
              fontWeight={"bold"}
              color={"navy.700"}
              cursor={"pointer"}
            >
              {props.children}
            </Link>
          </Box>
          <Box w={{ base: "100%", md: "unset" }} marginInlineStart={"auto"}>
            <Flex
              flexDirection={"row"}
              alignItems={"center"}
              bg={"white"}
              p={"10px"}
              borderRadius={"30px"}
              boxShadow={"14px 17px 40px 4px rgba(112, 144, 176, 0.18)"}
            >
              <Flex
                position={"relative"}
                marginInlineEnd={"10px"}
                w={{ base: "100%", md: "200px" }}
              >
                <Box w={"100%"}>
                  <IconButton
                    fontSize={"1rem"}
                    width={"2.5rem"}
                    height={"2.5rem"}
                    position={"absolute"}
                    top={0}
                    left={0}
                    zIndex={"2"}
                    display={"flex"}
                    alignItems={"center"}
                    justifyContent={"center"}
                    bg={"none"}
                    aria-label="Search database"
                    icon={<SearchIcon />}
                  />
                  <Input
                    w={"100%"}
                    minW={0}
                    borderRadius={"30px"}
                    outlineOffset={"2px"}
                    fontWeight={"normal"}
                    fontSize={"0.875rem"}
                    paddingInlineStart={"2.5rem"}
                    paddingInlineEnd={"1rem"}
                    h={"2.5rem"}
                    py={"11px"}
                    bg={"secondaryGray.300"}
                    color={"gray.700"}
                    placeholder="Search..."
                  />
                </Box>
              </Flex>
              <IconButton
                bg={"none"}
                w={"18px"}
                minW={0}
                h={"18px"}
                display={"inline-block"}
                lineHeight={"1rem"}
                color={"gray.400"}
                mt={"6px"}
                marginInlineEnd={"10px"}
                aria-label="Search database"
                icon={<IoMdNotificationsOutline />}
              />
              <IconButton
                bg={"none"}
                w={"18px"}
                minW={0}
                h={"18px"}
                display={"inline-block"}
                lineHeight={"1rem"}
                color={"gray.400"}
                mt={"6px"}
                marginInlineEnd={"10px"}
                aria-label="Search database"
                icon={<IoIosInformationCircleOutline />}
              />
              <IconButton
                bg={"none"}
                w={"18px"}
                minW={0}
                h={"18px"}
                display={"inline-block"}
                lineHeight={"1rem"}
                color={"gray.400"}
                mt={"6px"}
                marginInlineEnd={"10px"}
                aria-label="Search database"
                icon={<IoIosColorPalette />}
              />
              <Button
                bg={"#11047A"}
                borderRadius={"9999px"}
                color={"white"}
                w={"40px"}
                h={"40px"}
                display={"inline-flex"}
                alignItems={"center"}
                justifyContent={"center"}
                fontSize={"calc(2rem / 2.5)"}
              >
                AP
              </Button>
            </Flex>
          </Box>
        </Flex>
      </Flex>
    </>
  );
};

export const TitleH4 = (props) => {
  return (
    <Heading
      as={"h4"}
      my={30}
      fontSize={20}
      fontWeight={700}
      color={"darkblue"}
    >
      {props.children}
    </Heading>
  );
};

export default Title;
