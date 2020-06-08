import mongoose, { Schema, Document } from "mongoose";
import { IMessage } from "./Message";
import { IUser } from "./User";

export interface IDialog extends Document {
  partner: IUser | string;
  author: IUser | string;
  messages: IMessage[];
  lastMessage: IMessage | string;
}

const DialogSchema = new Schema(
  {
    partner: { type: Schema.Types.ObjectId, ref: "User" },
    author: { type: Schema.Types.ObjectId, ref: "User" },
    lastMessage: { type: Schema.Types.ObjectId, ref: "Message" },
  },
  {
    timestamps: true,
  }
);

const DialogModel = mongoose.model<IDialog>("Dialog", DialogSchema);

export default DialogModel;
