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
        className=" opacity-80 bg-cover bg-center h-96 bg-no-repeat content"
        style={{ backgroundImage: `url(${Paddle})` }}>
          <h3 class="absolute text-5xl text-white text-left pr-60 top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2">
            You Can't Serve Up </h3>
            <h3 class="absolute text-5xl text-white pl-6 contrast-125 top-1/3 left-1/4 -translate-x-1/2 -translate-y-1/2">
            A Masterpiece If You're Not In... </h3>
            <h1 class="absolute text-8xl text-white pl-6 font-bold contrast-125 top-1/2 right-1/4 -translate-x-1/2 -translate-y-1/2">
            The Kitchen </h1>
        </div>
      <div className="container mx-auto grid grid-cols-3 h-96 text-center">
        <div className="place-self-center">test</div>
        <div className="place-self-center">
        <Typography variant="h2">What is 'The Kitchen?'</Typography>
            <p className="pt-6 text-xl">On a pickleball court, there is a seven-foot non-volley zone that extends from the net on both sides of the court. The term “kitchen” refers to this non-volley zone.</p>
            <p className="pt-6 text-xl">Here however, the Kitchen is your best way of reserving a pickleball court for you and your friends to "Dink", "Erne", and "Volley"</p>
        </div>
        <div className="place-self-center">
          <React.Fragment>
            <Button size="lg" onClick={handleOpen}>Sign In</Button>
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
