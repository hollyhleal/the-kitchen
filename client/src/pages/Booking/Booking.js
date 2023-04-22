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
import { courts } from "../../seeds/CourtData";

export default function Booking() {
  const [value, setValue] = useState({
    startDate: null,
    endDate: null,
  });
  // console.log(value);

  const [resTime, setResTime] = useState({
    hour: null,
  });

  const handleTimeChange = (newTime) => {
    console.log("newTime:", newTime);
    setResTime(newTime);
  };
  console.log(resTime);

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
                <Select
                  value={resTime}
                  onChange={handleTimeChange}
                  name="time"
                  label="Time"
                >
                  <Option value="10am">10am</Option>
                  <Option value="11am">11am</Option>
                  <Option value="12am">12pm</Option>
                  <Option value="1pm">1pm</Option>
                  <Option value="2pm">2pm</Option>
                  <Option value="3pn">3pm</Option>
                  <Option value="4pm">4pm</Option>
                  <Option value="5pm">5pm</Option>
                  <Option value="6pm">6pm</Option>
                  <Option value="7pm">7pm</Option>
                  <Option value="8pm">8pm</Option>
                  <Option value="9pm">9pm</Option>
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
          {courts.map(({ name, type, image }) => (
            <div>
              <img src={image} alt="court"></img>
              <Typography variant="h4">{name}</Typography>
              <Typography variant="h5">{type}</Typography>
              <p>Available Slots: </p>
              <p>Booked Slots: </p>
              <Button size="md">Book {name}</Button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
