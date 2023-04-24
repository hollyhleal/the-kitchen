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
import Auth from "../utils/Auth";

export default function NavBar() {
  const [openNav, setOpenNav] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen((cur) => !cur);
  const [showSignupModal, setShowSignupModal] = useState(false);

  const handleSignupOpen = () => {
    setOpen(false);
    setShowSignupModal(true);
  };

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const navLinkCLick = (e) => {
    setOpenNav(false);
  };

  // const navList = (

  // );

  return (
    <>
      <Navbar className="sticky inset-0 z-10 h-max max-w-full bg-sky-500/50 rounded-none py-2 px-4 lg:px-8 lg:py-4">
        <div className="flex items-center justify-between">
          <a
            href="/"
            color="green"
            className="mr-4 cursor-pointer py-1.5 font-semibold text-5xl text-blue-800"
          >
            The Kitchen
          </a>
          <div className="flex items-center gap-4">
            <div className="mr-4 hidden lg:block">
              <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
                {Auth.loggedIn() ? (
                  <>
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
                    {/* <Typography
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
                    </Typography> */}
                    <Typography
                      as="li"
                      variant="small"
                      color="green"
                      className="p-1 font-normal"
                    >
                      <NavLink
                        onClick={Auth.logout}
                        className="flex items-center font-semibold text-blue-800 text-2xl"
                        to="/"
                      >
                        Logout
                      </NavLink>
                    </Typography>
                  </>
                ) : (
                  <div></div>
                )}
              </ul>
            </div>

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
          <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
            {Auth.loggedIn() ? (
              <>
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
                {/* <Typography
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
                    </Typography> */}
                <Typography
                  as="li"
                  variant="small"
                  color="green"
                  className="p-1 font-normal"
                >
                  <NavLink
                    onClick={Auth.logout}
                    className="flex items-center font-semibold text-blue-800 text-2xl"
                    to="/"
                  >
                    Logout
                  </NavLink>
                </Typography>
              </>
            ) : (
              <div></div>
            )}
          </ul>
        </MobileNav>
      </Navbar>
    </>
  );
}
