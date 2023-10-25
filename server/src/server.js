import express from "express";
/*paquete de logging http */
import morgan from "morgan";

import authRouter from "./routes/auth.router.js";
const server = express();
server.use(morgan("dev"));
/* expres podra convertir request de cliente 
   en json, o se leeran como undefined    */
server.use(express.json()); 

server.use("/api", authRouter);

export default server;
