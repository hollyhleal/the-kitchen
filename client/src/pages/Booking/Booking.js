import { useState } from "react";
import {
  Card,
  Button,
  Typography,
  Radio,
  Select,
  Option,
} from "@material-tailwind/react";
import Datepicker from "react-tailwindcss-datepicker";
import CourtImage from "../../images/pickleballcourt.png";

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
    <>
      <div className="container mx-auto">
        <Card color="transparent" shadow={false}>
          <form className="mx-auto mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
            <Typography className="text-center" variant="h4" color="blue-gray">
              Reserve
            </Typography>
            <Typography color="gray" className="mt-1 font-normal">
              Select a date to reserve a court. (Please Note: You must reserve
              at least one day in advance.)
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
              <div className="w-90">
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
              See Availability
            </Button>
          </form>
        </Card>
      </div>

      <div className="container mx-auto">
        <div className="flex flex-wrap mx-auto justify-center text-center">
          <div>
            <img src={CourtImage} alt="court"></img>
            <Typography variant="h5">Court 1 (Singles)</Typography>
            <p>Available Slots: </p>
            <p>Booked Slots: </p>
            <Button size="md">Book Court 1</Button>
          </div>
          <div>
            <img src={CourtImage} alt="court"></img>
            <Typography variant="h5">Court 2 (Singles)</Typography>
            <p>Available Slots: </p>
            <p>Booked Slots: </p>
            <Button size="md">Book Court 2</Button>
          </div>
          <div>
            <img src={CourtImage} alt="court"></img>
            <Typography variant="h5">Court 3 (Doubles)</Typography>
            <p>Available Slots: </p>
            <p>Booked Slots: </p>
            <Button size="md">Book Court 3</Button>
          </div>
          <div>
            <img src={CourtImage} alt="court"></img>
            <Typography variant="h5">Court 4 (Doubles)</Typography>
            <p>Available Slots: </p>
            <p>Booked Slots: </p>
            <Button size="md">Book Court 4</Button>
          </div>
        </div>
      </div>
    </>
  );
}
