import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { addDays, subDays} from "date-fns";
const Picker = (props) => {


  return (
    <>
      <DatePicker
        selected={props.startDate}
        onChange={date => props.setStartDate(date)}
        selectsStart
        startDate={props.startDate}
        minDate={subDays(props.endDate, 13)}
        placeholderText="Show days from..."
      />
      <DatePicker
        selected={props.endDate}
        onChange={date => props.setEndDate(date)}
        selectsEnd
        endDate={props.endDate}
        minDate={props.startDate}
        maxDate={addDays(props.startDate, 13)}
        placeholderText="...to"
      />
    </>
  );
};

export default Picker;
