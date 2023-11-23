import express from "express";
import dotenv from "dotenv";

dotenv.config();

import morgan from "morgan";
import cors from "cors";
import authRouter from "./routes/auth.routes.js";
import organizerRoutes from "./routes/organizer.routes.js";
import artistRoutes from "./routes/artist.routes.js";
import eventsRoutes from "./routes/event.routes.js";

const server = express();
server.use(morgan("dev"));

server.use(
  cors({
    origin: "http://localhost:5173",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  })
);

server.use(express.json());

server.use("/api", authRouter);
server.use("/api/organizers", organizerRoutes);
server.use("/api/artists", artistRoutes);
server.use("/api/events", eventsRoutes);

export default server;
