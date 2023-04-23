const db = require("./connection");
const { Player, Court } = require("../models");

db.once("open", async () => {
  try {
    await Player.deleteMany();

    const players = await Player.insertMany([
      {
        name: "bob",
        email: "email1@email.com",
        password: "testpassword1",
        level: "beginner",
        createdAt: "2023",
      },
      {
        name: "steve",
        email: "email2@email.com",
        password: "testpassword2",
        level: "intermediate",
        createdAt: "2022",
      },
      {
        name: "john",
        email: "email3@email.com",
        password: "testpassword3",
        level: "beginner",
        createdAt: "2022",
      },
      {
        name: "aldo",
        email: "email4@email.com",
        password: "testpassword4",
        level: "beginner",
        createdAt: "2023",
      },
      {
        name: "travis",
        email: "email5@email.com",
        password: "testpassword5",
        level: "beginner",
        createdAt: "2022",
      },
    ]);
    console.log("Players seeded successfully!");

    await Court.deleteMany();
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
  } catch (error) {
    console.log("error in seeding!", "error ");
  } finally {
    process.exit(0);
  }
});
