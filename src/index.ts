import { Elysia } from "elysia";

const app = new Elysia();

app.get("/", () => "Hello Elysia");

app.post("/", ({ body, set }) => {
    console.log(body);
    return "invalid";
});

app.listen(3000);

console.log(
    `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
