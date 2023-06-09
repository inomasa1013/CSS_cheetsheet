import { Request, Response, NextFunction } from "express";
import path from "path";
import models from "../../knex/cssModels";

let express = require("express");
let router = express.Router();

/* GET home page. */
// router.get("/", function (req: Request, res: Response, next: NextFunction) {
//   res.sendFile(path.join("__dirName", "../build/index.html"));
// });
const server = () => {
  // router.get("/", (req: Request, res: Response) => {
  //   res.sendFile(path.join(__dirname, "../../../../front/build/index.html"));
  // });

  router.get("/api/data", async (req: Request, res: Response) => {
    res.status(200).send(await models.getAll());
  });
  return router;
};
export default server;
