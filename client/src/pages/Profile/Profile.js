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
      <div className="container mx-auto">
        <div class="grid grid-rows-3 grid-flow-col gap-4">
          {/* left-hand side column for profile photo/bio */}
          <div className="row-span-3 md:row-span-4 mx-auto text-center">
            <Typography variant="h3">Welcome back, Name!</Typography>
            <Card className="w-96">
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

          <div className="row-span-2 col-span-2">
            <Button size="lg">Book a Court</Button>
          </div>

          <div class="row-span-2 col-span-2">
            <Typography variant="h4">Upcoming Reservations</Typography>
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;
