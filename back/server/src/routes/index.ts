import { Request, Response, NextFunction } from "express";
import path from "path";

var express = require("express");
var router = express.Router();

/* GET home page. */
// router.get("/", function (req: Request, res: Response, next: NextFunction) {
//   res.sendFile(path.join("__dirName", "../build/index.html"));
// });
router.get("/", (req: Request, res: Response) => {
  res.send("inoino");
});
export default router;
