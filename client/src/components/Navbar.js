import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
  Card,
} from "@material-tailwind/react";

export default function NavBar() {
  const [openNav, setOpenNav] = React.useState(false);

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
            <Button
              color="red"
              variant="gradient"
              size="sm"
              className="hidden lg:inline-block"
            >
              <span>Login / Sign up </span>
            </Button>
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
          <Button
            variant="gradient"
            color="red"
            size="sm"
            fullWidth
            className="mb-2"
          >
            <span>Login / Sign up</span>
          </Button>
        </MobileNav>
      </Navbar>
      <div className="mx-auto max-w-screen-md py-12">
        <Card className="mb-12 overflow-hidden">
          <img
            alt="nature"
            className="h-[32rem] w-full object-cover object-center"
            src="https://images.unsplash.com/photo-1659318006095-4d44845f3a1b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2110&q=80"
          />
        </Card>
        <Typography variant="h2" color="green" className="mb-2">
          Test
        </Typography>
        <Typography color="gray" className="font-normal">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Enim
            facilisis gravida neque convallis a cras. Proin nibh nisl
            condimentum id venenatis a. Ipsum dolor sit amet consectetur
            adipiscing elit. Leo urna molestie at elementum eu facilisis sed
            odio morbi. Cum sociis natoque penatibus et. Sem viverra aliquet
            eget sit amet tellus cras adipiscing enim. Vestibulum lorem sed
            risus ultricies tristique. Ultrices eros in cursus turpis massa
            tincidunt. Ipsum suspendisse ultrices gravida dictum fusce ut
            placerat orci nulla. Nisi scelerisque eu ultrices vitae auctor eu
            augue ut lectus. At elementum eu facilisis sed odio morbi. Est
            placerat in egestas erat imperdiet sed. Suspendisse ultrices gravida
            dictum fusce ut placerat orci nulla pellentesque. Pellentesque
            habitant morbi tristique senectus et netus. Orci sagittis eu
            volutpat odio facilisis mauris sit amet. Nisl nisi scelerisque eu
            ultrices. Vitae auctor eu augue ut lectus. Massa enim nec dui nunc.
            In arcu cursus euismod quis. Ullamcorper eget nulla facilisi etiam
            dignissim diam. Neque viverra justo nec ultrices. Ac turpis egestas
            maecenas pharetra convallis posuere. Etiam non quam lacus
            suspendisse faucibus interdum posuere. Risus feugiat in ante metus
            dictum at. Arcu bibendum at varius vel pharetra vel turpis. Sed
            blandit libero volutpat sed cras ornare. Pretium quam vulputate
            dignissim suspendisse in. Sed nisi lacus sed viverra tellus in hac
            habitasse.
          </p>
        </Typography>
      </div>
    </>
  );
}
