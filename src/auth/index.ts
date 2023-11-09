import { Elysia } from "elysia";

const auth = new Elysia({ prefix: "/auth" })
    .post("/sign-in", (context) => {
        console.log(context);
        return 12;
    })
    .post("/sign-up", () => "!2")
    .post("/profile", () => "!2");

export default auth;
