import { Elysia } from "elysia";
import { PrismaClient } from "@prisma/client";
import auth from "./auth";

const app = new Elysia();

const prisma = new PrismaClient();

// app.derive(({ request: { headers } }) => {
//     return {
//         authorization: headers.get("Authorization"),
//     };
// }).post("/", ({ authorization, body, store, set }) => {
//     console.log("23", authorization);

//     console.log(body);
//     set.status = 400;
//     return "invalid";
// });
app.group("/v1", (app) => app.get("/", () => "Using v1").use(auth));

app.listen(3000);

// await prisma.user.create({
//     data: {
//         name: "Adarsh",
//         password: "123",
//     },
// });

console.log(
    `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
