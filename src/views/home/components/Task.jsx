import { Box, Checkbox, Flex, Icon, IconButton, Text } from "@chakra-ui/react";
import Card from "../../../components/card/Card";
import { IoIosCheckbox, IoMdCheckbox } from "react-icons/io";
import Banner from "../../../components/menu/MainMenu";

export default function Task() {
  const taskList = [
    { title: "Landing Page Design", isChecked: false },
    { title: "Dashboard Builder", isChecked: true },
    { title: "Mobile App Design", isChecked: true },
    { title: "Illustrations", isChecked: false },
    { title: "Promotional LP", isChecked: true },
  ];
  return (
    <>
      <Card>
        <Flex alignItems={"center"} mb={"30px"}>
          <Flex
            alignItems={"center"}
            justifyContent={"center"}
            me={"12px"}
            w={"38px"}
            h={"38px"}
            bg={"secondaryGray.300"}
            borderRadius={"50%"}
          >
            <Icon as={IoMdCheckbox} color={"brand.500"} fontSize={"24px"} />
          </Flex>
          <Text
            color="secondaryGray.900"
            fontSize="1.125rem"
            fontWeight="700"
            lineHeight="100%"
          >
            Tasks
          </Text>
          <Banner />
        </Flex>
        {taskList.map((item, index) => (
          <Box mb={"20px"}>
            <Checkbox
              key={index}
              defaultChecked={item.isChecked ? true : false}
            >
              <Text
                color="secondaryGray.900"
                fontSize="1rem"
                fontWeight="bold"
                textAlign={"start"}
                ms={"16px"}
              >
                {item.title}
              </Text>
            </Checkbox>
          </Box>
        ))}
      </Card>
    </>
  );
}
