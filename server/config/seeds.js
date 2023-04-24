const db = require("./connection");
const { Player, Court, Reservation } = require("../models");

db.once("open", async () => {
  try {
    // await Player.deleteMany();

    const players = await Player.insertMany([
      {
        name: "bob",
        email: "email1@email.com",
        password: "testpassword1",
        level: "beginner",
        reservations: [
          {
            _id: "64460fa8790af1d4c15cd2e4",
          },
        ],
      },
      {
        name: "steve",
        email: "email2@email.com",
        password: "testpassword2",
        level: "intermediate",
      },
      {
        name: "john",
        email: "email3@email.com",
        password: "testpassword3",
        level: "beginner",
      },
      {
        name: "aldo",
        email: "email4@email.com",
        password: "testpassword4",
        level: "beginner",
      },
      {
        name: "travis",
        email: "email5@email.com",
        password: "testpassword5",
        level: "beginner",
      },
    ]);
    console.log("Players seeded successfully!");

    // await Court.deleteMany();
    const courts = await Court.insertMany([
      {
        name: "Court 1",
      },
      {
        name: "Court 2",
      },
      {
        name: "Court 3",
      },
      {
        name: "Court 4",
      },
    ]);
    console.log("Courts seeded successfully!");
    const reservations = await Reservation.insertMany([
      {
        court: "64460ca120d168f019fd85dc",
        player: "64460ca120d168f019fd85d5",
        time: "3pm",
        date: "2023-05-11",
      },
      {
        court: "64460ca120d168f019fd85dd",
        player: "64460ca120d168f019fd85d6",
        time: "5pm",
        date: "2023-05-15",
      },
      {
        court: "64460ca120d168f019fd85de",
        player: "64460ca120d168f019fd85d7",
        time: "8pm",
        date: "2023-04-30",
      },
      {
        court: "64460ca120d168f019fd85df",
        player: "64460ca120d168f019fd85d8",
        time: "12pm",
        date: "2023-05-01",
      },
    ]);
    console.log("Reservations seeded successfully!");
  } catch (error) {
    console.log(error);
  } finally {
    process.exit(0);
  }
});
