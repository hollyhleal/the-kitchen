import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Dialog,
  Input,
  Checkbox,
} from "@material-tailwind/react";
import Signup from "./Signup";

export default function NavBar() {
  const [openNav, setOpenNav] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen((cur) => !cur);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const navLinkCLick = (e) => {
    setOpenNav(false);
  };

  const navList = (
    <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography as="li" variant="small" color="" className="p-1 font-normal">
        <NavLink
          onClick={navLinkCLick}
          className="flex items-center font-semibold text-blue-800 text-2xl"
          to="/"
        >
          Home
        </NavLink>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="green"
        className="p-1 font-normal"
      >
        <NavLink
          onClick={navLinkCLick}
          className="flex items-center font-semibold text-blue-800 text-2xl"
          to="/profile"
        >
          Profile
        </NavLink>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="green"
        className="p-1 font-normal"
      >
        <NavLink
          onClick={navLinkCLick}
          className="flex items-center font-semibold text-blue-800 text-2xl"
          to="/booking"
        >
          Booking
        </NavLink>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="green"
        className="p-1 font-normal"
      >
        <NavLink
          onClick={navLinkCLick}
          className="flex items-center font-semibold text-blue-800 text-2xl"
          to="/payment"
        >
          Payment
        </NavLink>
      </Typography>
    </ul>
  );

  return (
    <>
      <Navbar className="sticky inset-0 z-10 h-max max-w-full bg-teal-100 rounded-none py-2 px-4 lg:px-8 lg:py-4">
        <div className="flex items-center justify-between">
          <Typography
            as="a"
            color="green"
            className="mr-4 cursor-pointer py-1.5 font-semibold text-5xl text-blue-800"
          >
            The Kitchen
          </Typography>
          <div className="flex items-center gap-4">
            <div className="mr-4 hidden lg:block">{navList}</div>
            <React.Fragment>
              <Button className="hidden lg:inline-block" onClick={handleOpen}>
                Sign In
              </Button>
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
            <IconButton
              variant="text"
              className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
              ripple={false}
              onClick={() => setOpenNav(!openNav)}
            >
              {openNav ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  className="h-6 w-6"
                  viewBox="0 0 24 24"
                  stroke="blue"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  stroke="blue"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </IconButton>
          </div>
        </div>
        <MobileNav open={openNav}>
          {navList}
          <React.Fragment>
            <Button onClick={handleOpen}>Sign In</Button>
            <Dialog
              size="xs"
              open={open}
              handler={handleOpen}
              className="bg-transparent shadow-none "
            >
              <Card className="w-full max-w-[24rem]">
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
        </MobileNav>
      </Navbar>
    </>
  );
}
