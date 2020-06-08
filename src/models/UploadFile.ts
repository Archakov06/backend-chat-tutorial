import mongoose, { Schema, Document } from "mongoose";
import { IUser } from "./User";
import { IMessage } from "./Message";

export interface IUploadFile {
  filename: string;
  size: number;
  ext: string;
  url: string;
  message: IMessage | string;
  user: IUser | string;
}

export type IUploadFileDocument = Document & IUploadFile;

const UploadFileSchema = new Schema(
  {
    filename: String,
    size: Number,
    ext: String,
    url: String,
    message: { type: Schema.Types.ObjectId, ref: "Message", require: true },
    user: { type: Schema.Types.ObjectId, ref: "User", require: true },
  },
  {
    timestamps: true,
  }
);

const UploadFileModel = mongoose.model<IUploadFileDocument>(
  "UploadFile",
  UploadFileSchema
);

export default UploadFileModel;
