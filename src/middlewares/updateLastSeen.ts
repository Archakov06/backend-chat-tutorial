import express from "express";
import { UserModel } from "../models";

export default (
  _: express.Request,
  __: express.Response,
  next: express.NextFunction
) => {
  UserModel.findOneAndUpdate(
    { _id: "5d1ba4777a5a9a1264ba240c" },
    {
      fullname: "qwe",
      last_seen: new Date()
    },
    { new: true },
    () => {}
  );
  next();
};
