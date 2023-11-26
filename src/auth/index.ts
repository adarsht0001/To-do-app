import { Elysia } from "elysia";
import userRoutes from "./user";

const auth = new Elysia({ prefix: "/auth" })
    .post("/sign-in", (context) => {
        console.log(context);
        return 12;
    })
    .post("/sign-up", () => "!2")
    .post("/profile", () => "!2")
    .use(userRoutes);

export default auth;
