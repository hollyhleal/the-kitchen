const db = require("./connection");
const { Player, Reservation, Court} = require("../models");

db.once("open", async () => {
    try {
        await Player.deleteMany();

        const players = await Player.insertMany([
            {
                name: "bob",
                email: "email1@email.com",
                password: "testpassword1",
                level: "beginner",
                Reservation: {
                    court: {
                        name: "doubles"
                    },
                    player: {
                        name: "bob"
                    },
                    time: 8,
                    price: 4.99
                }
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
                reservation: {
                    court: {
                        name: "Court A"
                    }
                }
            },
            {
                name: "aldo",
                email: "email4@email.com",
                password: "testpassword4",
                level: "beginner",
                reservation: {
                    court: {
                        name: "Court A"
                    }
                }
            },
            {
                name: "travis",
                email: "email5@email.com",
                password: "testpassword5",
                level: "beginner",
                reservation: {
                    court: {
                        name: "Court A"
                    }
                }
            },
        ]);
        
        console.log('Players seeded successfully!');
    
    
    } catch (error) {
    console.log("error in seeding!", "error ");
} finally {
    process.exit(0)
}
});