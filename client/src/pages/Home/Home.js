import React from "react";
import "./Home.css";
import Paddle from "./pickleBall-Paddle.jpg";
import {
  Button,
  Dialog,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Input,
  Checkbox,
} from "@material-tailwind/react";

export default function Home() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen((cur) => !cur);
  return (
    <>
      <div
        className=" bg-opacity-100 bg-cover bg-center h-96 bg-no-repeat content"
        style={{ backgroundImage: `url(${Paddle})` }}
      ></div>
      <div className="container mx-auto grid grid-cols-3 h-96">
        <div className="place-self-center">test</div>
        <div className="place-self-center">test</div>
        <div className="place-self-center">
          <React.Fragment>
            <Button onClick={handleOpen}>Sign In</Button>
            <Dialog
              size="xs"
              open={open}
              handler={handleOpen}
              className="bg-transparent shadow-none"
            >
              <Card className="mx-auto w-full max-w-[24rem]">
                <CardHeader
                  variant="gradient"
                  color="blue"
                  className="mb-4 grid h-28 place-items-center"
                >
                  <Typography variant="h3" color="white">
                    Sign In
                  </Typography>
                </CardHeader>
                <CardBody className="flex flex-col gap-4">
                  <Input label="Email" size="lg" />
                  <Input label="Password" size="lg" />
                  <div className="-ml-2.5">
                    <Checkbox label="Remember Me" />
                  </div>
                </CardBody>
                <CardFooter className="pt-0">
                  <Button variant="gradient" onClick={handleOpen} fullWidth>
                    Sign In
                  </Button>
                  <Typography
                    variant="small"
                    className="mt-6 flex justify-center"
                  >
                    Don&apos;t have an account?
                    <Typography
                      as="a"
                      href="#signup"
                      variant="small"
                      color="blue"
                      className="ml-1 font-bold"
                      onClick={handleOpen}
                    >
                      Sign up
                    </Typography>
                  </Typography>
                </CardFooter>
              </Card>
            </Dialog>
          </React.Fragment>
        </div>
      </div>
    </>
  );
}
