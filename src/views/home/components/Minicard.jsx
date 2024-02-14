import {
  Box,
  Flex,
  Img,
  SimpleGrid,
  Stat,
  StatArrow,
  StatHelpText,
  StatLabel,
  StatNumber,
  Text,
} from "@chakra-ui/react";
import {
  IoIosDocument,
  IoLogoUsd,
  IoMdCheckboxOutline,
  IoMdStats,
} from "react-icons/io";
import usFlag from "../../../assets/images/us-flag.png";

export default function Minicard() {
  const infoList = [
    {
      dt: "Earnings",
      dd: "$350.4",
      rightDir: true,
      icon: <IoMdStats />,
    },
    {
      dt: "Spend this month",
      dd: "$642.39",
      rightDir: true,
      icon: <IoLogoUsd />,
    },
    { dt: "Sales", dd: "$574.34", statArrow: "23%", desc: "since last month" },
    {
      dt: "Your balance",
      dd: "$1,000",
      leftDir: true,
      img: usFlag,
    },
    {
      dt: "New Tasks",
      dd: "154",
      rightDir: true,
      icon: <IoMdCheckboxOutline />,
      bgColor: true,
      colorWhite: true,
    },
    {
      dt: "Total Projects",
      dd: "2935",
      rightDir: true,
      icon: <IoIosDocument />,
    },
  ];
  return (
    <>
      <SimpleGrid
        gridGap={"20px"}
        gridTemplateColumns={{
          base: "repeat(1, minmax(0, 1fr))",
          md: "repeat(2, minmax(0, 1fr))",
          lg: "repeat(3, minmax(0, 1fr))",
          "2xl": "repeat(6, minmax(0, 1fr))",
        }}
        mb={"20px"}
      >
        {infoList.map((item, index) => (
          <>
            <Box
              key={index}
              p={"15px 20px"}
              flexDirection={"column"}
              w={"100%"}
              position={"relative"}
              borderRadius={"20px"}
              minW={0}
              bg={"white"}
            >
              <Flex
                h={"100%"}
                alignItems={{ base: "center", lg2: "start" }}
                justifyContent={"center"}
                my={"auto"}
              >
                <Flex
                  display={item.rightDir ? "flex" : "none"}
                  alignItems={"center"}
                  justifyContent={"center"}
                  borderRadius={"50%"}
                  w={"56px"}
                  h={"56px"}
                  bg={
                    item.bgColor
                      ? "linear-gradient(90deg, #4481EB 0%, #04BEFE 100%)"
                      : "secondaryGray.300"
                  }
                  fontSize={"32px"}
                  color={item.colorWhite ? "white" : "brand.500"}
                >
                  {item.icon}
                </Flex>
                <Stat
                  position={"relative"}
                  my={"auto"}
                  marginInlineStart={"18px"}
                  flex={"1 1 0%"}
                >
                  <StatLabel
                    fontWeight={"medium"}
                    fontSize={"0.875rem"}
                    lineHeight={"100%"}
                    color={"secondaryGray.600"}
                  >
                    {item.dt}
                  </StatLabel>
                  <StatNumber
                    fontWeight={"semibold"}
                    fontSize={"1.5rem"}
                    color={"secondaryGray.900"}
                  >
                    {item.dd}
                  </StatNumber>
                  <StatHelpText
                    as={"div"}
                    display={"flex"}
                    alignItems={"center"}
                    mb={0}
                    fontSize={"12px"}
                  >
                    <StatArrow
                      type="increase"
                      display={item.statArrow ? "block" : "none"}
                    />
                    <Text marginInlineEnd={"5px"}>{item.statArrow}</Text>
                    <Text
                      fontWeight={"medium"}
                      fontSize={"0.75rem"}
                      color={"secondaryGray.600"}
                    >
                      {item.desc}
                    </Text>
                  </StatHelpText>
                </Stat>
                <Flex h={"100%"} alignItems={"center"}>
                  <Flex
                    display={item.leftDir ? "flex" : "none"}
                    alignItems={"center"}
                    justifyContent={"center"}
                    borderRadius={"50%"}
                    w={"48px"}
                    h={"48px"}
                    bg={"secondaryGray.300"}
                  >
                    <Img src={item.img} width={"100%"} />
                  </Flex>
                </Flex>
              </Flex>
            </Box>
          </>
        ))}
      </SimpleGrid>
    </>
  );
}
