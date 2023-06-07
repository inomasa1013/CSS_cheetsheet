import { Request, Response } from "express";

/* GET users listing. */
const index = (req: Request, res: Response) => {
  res.send("respond with a resource");
};

export default index;
