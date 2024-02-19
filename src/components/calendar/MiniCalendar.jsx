import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import Card from "../card/Card";
import { useState } from "react";
import {
  IoChevronBackCircle,
  IoChevronBackSharp,
  IoChevronForwardCircle,
  IoChevronForwardSharp,
} from "react-icons/io5";
import { Icon, Text } from "@chakra-ui/react";
import "../../assets/scss/style.scss";

export default function MiniCalendar() {
  const [value, onChange] = useState(new Date());
  return (
    <>
      <Card>
        <Calendar
          onChange={onChange}
          value={value}
          defaultView={"month"}
          prev2Label={false}
          next2Label={false}
          prevLabel={
            <Icon as={IoChevronBackSharp} w="24px" h="24px" mt="4px" />
          }
          nextLabel={
            <Icon as={IoChevronForwardSharp} w="24px" h="24px" mt="4px" />
          }
          tileContent={<Text color={"brand.500"}></Text>}
        />
      </Card>
    </>
  );
}
