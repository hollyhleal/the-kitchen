
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
import decode from "jwt-decode";

export default function Booking() {
  const [resDate, setResDate] = useState({
    startDate: null,
  });
  // console.log(value);

  const object = decode(localStorage.getItem("id_token"));
  console.log(object.data._id);

  const [resTime, setResTime] = useState({
    hour: null,
  });

  const selectResTime = (resTime) => {
    console.log(resTime);
    setResTime(resTime);
    localStorage.setItem("resTime", resTime);
  };
  console.log(resTime);

  const selectResDate = (resDate) => {
    console.log(resDate.startDate);
    setResDate(resDate);
    localStorage.setItem("resDate", resDate.startDate);
    localStorage.setItem("player", object.data._id);
  };

  const selectCourt = (e) => {
    console.log(e.target.id);
    localStorage.setItem("court", e.target.id);
  };

  const makeRes = () => {
    const reservation = [];
    // localStorage.getItem("court");
    reservation.push(localStorage.getItem("court"));
    reservation.push(localStorage.getItem("resDate"));
    reservation.push(localStorage.getItem("resTime"));
    reservation.push(localStorage.getItem("player"));
    console.log(reservation);
    const resObj = new Object();
    resObj.playerId = reservation[3];
    resObj.time = reservation[2];
    console.log(resObj);
  };
  makeRes();
  return (
    <>
      <div className="container mx-auto">
        <Card color="transparent" shadow={false}>
          <form className="mx-auto mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
            <Typography className="text-center" variant="h4" color="blue-gray">
              Reserve
            </Typography>
            <Typography color="gray" className="mt-1 font-normal text-center">
              Select a date to reserve a court.
              <br />
              Note: You must reserve at least one day in advance.
            </Typography>
            <div className="mb-4 flex flex-col gap-6">
              <Datepicker
                label="Date"
                minDate={new Date()}
                asSingle={true}
                value={resDate}
                onChange={selectResDate}
                displayFormat={"MM/DD/YYYY"}
              />
              <div className="w-90">
                <Select
                  value={resTime}
                  onChange={selectResTime}
                  name="time"
                  label="Time"
                >
                  <Option value="10am">10am</Option>
                  <Option value="11am">11am</Option>
                  <Option value="12pm">12pm</Option>
                  <Option value="1pm">1pm</Option>
                  <Option value="2pm">2pm</Option>
                  <Option value="3pm">3pm</Option>
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
          {courts.map(({ name, type, image, courtId }) => (
            <div>
              <img src={image} alt="court"></img>
              <Typography variant="h4">{name}</Typography>
              <Typography variant="h5">{type}</Typography>
              <p>Available Slots: </p>
              <p>Booked Slots: </p>
              <Button onClick={selectCourt} size="md" id={courtId}>
                Book {name}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}