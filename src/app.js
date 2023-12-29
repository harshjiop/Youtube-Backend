import express from "express";
import cors from "cors";
import CookieParser from "cookie-parser";
import { Cors_Origin } from "./constants";
import cookieParser from "cookie-parser";

const app = express();

app.use(
  cors({
    origin: Cors_Origin,
    credentials: true,
  })
);
app.use(
  express.json({
    limit: "20kb",
  })
);
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(express.static("public"));
app.use(cookieParser());

export { app };
