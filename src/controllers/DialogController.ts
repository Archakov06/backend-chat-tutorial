import express from "express";
import socket from "socket.io";

import { DialogModel, MessageModel } from "../models";

class DialogController {
  io: socket.Server;

  constructor(io: socket.Server) {
    this.io = io;
  }

  index = (req: any, res: express.Response) => {
    const authorId = req.user._id;

    DialogModel.find({ author: authorId })
      .populate(["author", "partner"])
      .exec(function(err, dialogs) {
        if (err) {
          return res.status(404).json({
            message: "Dialogs not found"
          });
        }
        return res.json(dialogs);
      });
  };

  create = (req: express.Request, res: express.Response) => {
    const postData = {
      author: req.body.author,
      partner: req.body.partner
    };
    const dialog = new DialogModel(postData);

    dialog
      .save()
      .then((dialogObj: any) => {
        const message = new MessageModel({
          text: req.body.text,
          user: req.body.author,
          dialog: dialogObj._id
        });

        message
          .save()
          .then(() => {
            res.json(dialogObj);
          })
          .catch(reason => {
            res.json(reason);
          });
      })
      .catch(reason => {
        res.json(reason);
      });
  };

  delete = (req: express.Request, res: express.Response) => {
    const id: string = req.params.id;
    DialogModel.findOneAndRemove({ _id: id })
      .then(dialog => {
        if (dialog) {
          res.json({
            message: `Dialog deleted`
          });
        }
      })
      .catch(() => {
        res.json({
          message: `Dialog not found`
        });
      });
  };
}

export default DialogController;
