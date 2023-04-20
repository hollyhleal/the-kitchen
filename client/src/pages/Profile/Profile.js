import {
  Button,
  Card,
  CardHeader,
  CardBody,
  Typography,
} from "@material-tailwind/react";

function Profile() {
  return (
    <>
      <div className="flex flex-row">
        {/* <div class=""> */}
          {/* left-hand side column for profile photo/bio */}
          <div className="basis-1/2 place-self-center text-center my-8">
            <Typography variant="h3">Welcome back, Name!</Typography>
            <Card className="w-96 mx-auto">
              <CardHeader floated={false} className="h-80">
                <img src="" alt="profile-picture" />
              </CardHeader>
              <CardBody className="text-center">
                <Typography variant="h4" color="blue-gray" className="mb-2">
                  Name
                </Typography>
                <Typography color="blue" className="font-medium" textGradient>
                  Level
                </Typography>
                <Typography className="font-medium">Member Since:</Typography>
              </CardBody>
            </Card>
          </div>

          <div className="basis-1/2 text-center my-8">
            <Button className="my-11" size="lg">Book a Court</Button>



            <Typography variant="h4">Upcoming Reservations</Typography>
            <div>
            <Typography variant="h6">Date: 5/5/2023</Typography>
            <Typography variant="h6">Time: 12pm</Typography>
            <Typography variant="h6">Court: 4</Typography>
            <Typography variant="h6">Session: Singles</Typography>
            </div>
          </div>
        {/* </div> */}
      </div>
    </>
  );
}

export default Profile;
