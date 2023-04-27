// use npm i --save-dev @types/node and npm i --save-dev @types/express to add type support (autocompletion)

// experimental syntax in JS, but standard in TS

import express, { Request, Response, NextFunction } from "express";
import { json } from "body-parser";

import todoRoutes from "./routes/todos";

const app = express();

app.use(json())

app.use("/todos", todoRoutes);

// imported from line 5
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  res.status(500).json({ message: err.message });
});

app.listen(3000);
