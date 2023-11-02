import { Elysia } from "elysia";
import { PrismaClient } from "@prisma/client";

const app = new Elysia();

const prisma = new PrismaClient();

app.get("/", () => "Hello Elysia");

app.post("/", ({ body, set }) => {
    console.log(body);
    return "invalid";
});

app.listen(3000);

console.log(
    `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
