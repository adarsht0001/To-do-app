import { Elysia } from "elysia";

const userRoutes = new Elysia()
    .post("/signup", () => {
        console.log("signup");
    })
    .post("/login", () => {
        console.log("login");
    });

export default userRoutes;
