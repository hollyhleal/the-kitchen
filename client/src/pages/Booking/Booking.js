import { useState } from "react";
import {
  Card,
  Input,
  Button,
  Typography,
  Radio,
  Select,
  Option,
} from "@material-tailwind/react";
import Datepicker from "react-tailwindcss-datepicker";

export default function Booking() {
  const [value, setValue] = useState({
    startDate: null,
    endDate: null,
  });

  const handleValueChange = (newValue) => {
    console.log("newValue:", newValue);
    setValue(newValue);
  };

  return (
    <div className="container mx-auto content">
      <Card color="transparent" shadow={false}>
        <Typography variant="h4" color="blue-gray">
          Reserve
        </Typography>
        <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
          <Typography color="gray" className="mt-1 font-normal">
            Select a date to reserve a court.
          </Typography>
          <div className="mb-4 flex flex-col gap-6">
            <Datepicker
              label="Date"
              minDate={new Date()}
              asSingle={true}
              value={value}
              onChange={handleValueChange}
              displayFormat={"MM/DD/YYYY"}
            />
            <div className="w-72">
              <Select label="Time">
                <Option>10am</Option>
                <Option>11am</Option>
                <Option>12pm</Option>
                <Option>1pm</Option>
                <Option>2pm</Option>
                <Option>3pm</Option>
                <Option>4pm</Option>
                <Option>5pm</Option>
                <Option>6pm</Option>
                <Option>7pm</Option>
                <Option>8pm</Option>
                <Option>9pm</Option>
              </Select>
            </div>
            <div className="flex w-max gap-4">
              <Radio
                id="blue"
                name="duration"
                color="blue"
                defaultChecked
                label="60 mins"
              />
            </div>
          </div>
          <Button className="mt-6" fullWidth>
            Book Now
          </Button>
        </form>
      </Card>
    </div>
  );
}
