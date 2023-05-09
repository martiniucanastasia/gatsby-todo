import React from "react";
import { useState } from "react";

import { Header } from "../Header/header";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { Section } from "../Section/section";

export const Layout = () => {
  const [value, setValue] = useState(new Date());
  const [day, setDay] = useState(new Date());

  const onChange = (nextValue) => {
    setValue(nextValue);
  };

  const selectDay = (value) => {
    setDay(value.getDate());
    alert(`Day: ${value.getDate()}`);
  };

  return (
    <>
      <Header />
      <Section>
        <Calendar
          onChange={() => onChange}
          value={value}
          onClickDay={selectDay}
        />
      </Section>
    </>
  );
};
