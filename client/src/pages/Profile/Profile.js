import {
  Button,
  Card,
  CardHeader,
  CardBody,
  Typography,
} from "@material-tailwind/react";
import decode from "jwt-decode";
import personIcon from "../images/personicon.svg";

function Profile() {
  const profileInfo = decode(localStorage.getItem("id_token"));

  const reservation = [];
  reservation.push(localStorage.getItem("player"));
  reservation.push(localStorage.getItem("resDate"));
  reservation.push(localStorage.getItem("resTime"));
  reservation.push(localStorage.getItem("court"));

  console.log(reservation);
  const resObj = new Object();
  resObj.playerId = reservation[0];
  resObj.resDate = reservation[1];
  resObj.resTime = reservation[2];
  resObj.court = reservation[3];
  console.log(resObj);
  const newArray = [];
  newArray.push(resObj);
  console.log(newArray);

  return (
    <>
      <div className="flex flex-row content">
        {/* left-hand side column for profile photo/bio */}
        <div className="basis-1/2 place-self-center text-center my-8">
          <Typography variant="h3">
            Welcome back, {profileInfo.data.name}!
          </Typography>
          <Card className="w-96 mx-auto bg-sky-500/50">
            <CardHeader floated={false} className="h-80">
              <img src={personIcon} alt="profile" />
            </CardHeader>
            <CardBody className="text-center">
              <Typography variant="h4" color="blue-gray" className="mb-2">
                {profileInfo.data.name}
              </Typography>
              {/* <Typography color="blue" className="font-medium" textGradient>
                Level
              </Typography> */}
              <Typography className="font-medium">
                Member Since: 2023
              </Typography>
            </CardBody>
          </Card>
        </div>

        <div className="basis-1/2 text-center my-8">
          <Button className="my-11" size="lg">
            <a href="/booking">Book a Court</a>
          </Button>

          <Typography variant="h4">Upcoming Reservations:</Typography>
          {newArray.map(({ resDate, resTime, court }) => (
            <div>
              <Typography variant="h6">{resDate}</Typography>
              <Typography variant="h6">{resTime}</Typography>
              <Typography variant="h6">Court: {court}</Typography>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Profile;
