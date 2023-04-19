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
      <div class="grid grid-rows-3 grid-flow-col gap-4">
        {/* left-hand side column for profile photo/bio */}
        <div class="row-span-3">
          <h2>Welcome back, !</h2>
          <Card className="w-96">
            <CardHeader floated={false} className="h-80">
              <img src="" alt="profile-picture" />
            </CardHeader>
            <CardBody className="text-center">
              <Typography variant="h4" color="blue-gray" className="mb-2">
                
              </Typography>
              <Typography color="blue" className="font-medium" textGradient>
                
              </Typography>
              <Typography className="font-medium">
                Member Since: 
              </Typography>
            </CardBody>
          </Card>
        </div>

        <div class="col-span-2">
          <Button size="lg">Book a Court</Button>
        </div>

        <div class="row-span-2 col-span-2">
          <h3>Upcoming Reservations</h3>
        </div>
      </div>
    </>
  );
}

export default Profile;
